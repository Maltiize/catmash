<?php

namespace App\Controller;

use App\Entity\Cat;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class CatController extends AbstractController
{


    private $encoders;
    private $normalizer;
    private $normalizers;
    private $serializer;

    private $response;

    // to not repeat myself
    public function __construct()
    {
        $this->response = new Response();
        $this->response->headers->set('Content-Type', 'application/json');

        $this->encoders = array(new JsonEncoder());
        $this->normalizer = new ObjectNormalizer();
        $this->normalizer->setCircularReferenceHandler(function ($object) {
            return $object->getId();
        });
        $this->normalizers = array($this->normalizer);
        $this->serializer = new Serializer($this->normalizers, $this->encoders);
    }

    /**
     * @Route("/cats", name="cat_index")
     */
    public function index()
    {
        $cats = $this->getDoctrine()
            ->getRepository(Cat::class)
            ->findAll();

        $normalizedCats = $this->serializer->normalize($cats);
        $jsonContent = $this->serializer->serialize($normalizedCats, 'json');

        $this->response->setContent($jsonContent);
        return $this->response;
    }

    /**
     * @Route("/cat/{id}", name="cat_get",methods={"GET","HEAD"})
     * @return Response
     */
    public function getCat($id)
    {

        $cat =  $this->getDoctrine()
            ->getRepository(Cat::class)
            ->find($id);

        if (!isset($cat)) {

            $this->response->setContent(json_encode(array('data' => "Couldnt find the cat entity")));
            $this->response->setStatusCode(404);
            return $this->response;
        }

        $normalizedCat = $this->serializer->normalize($cat);
        $jsonContent = $this->serializer->serialize($normalizedCat, 'json');

        $this->response->setContent($jsonContent);
        return $this->response;
    }



    /**
     * @Route("/cat/rand/{nb}", name="cat_get_rand",methods={"GET","HEAD"})
     * @return Response
     */
    public function getCatRand($nb)
    {

        $resultArray = [];

        $totalCat =  $this->getDoctrine()
            ->getRepository(Cat::class)
            ->createQueryBuilder('u')
            ->select('count(u.id)')
            ->getQuery()
            ->getSingleScalarResult();

        if (!isset($nb) || $nb > $totalCat) 
            $nb = $totalCat ;
        
        $availableIds = range(0, $totalCat);

        for ($i = 0; $i < $nb; $i++) {

            $id = $availableIds[rand(0, count($availableIds)-1)];

            array_push(
                $resultArray,
                $this->getDoctrine()
                    ->getRepository(Cat::class)
                    ->find($id)
            );

            unset($availableIds[$id]);
        }

        $normalizedCats = $this->serializer->normalize($resultArray);
        $jsonContent = $this->serializer->serialize($normalizedCats, 'json');

        $this->response->setContent($jsonContent);
        return $this->response;
    }
}
