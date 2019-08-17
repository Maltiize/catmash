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
     * @Route("/api/cat", name="cat_index")
     */
    public function index()
    {
        $cats = $this->getDoctrine()
            ->getRepository(Cat::class)
            ->findBy(array(), array('score' => 'DESC'));

        $normalizedCats = $this->serializer->normalize($cats);
        $jsonContent = $this->serializer->serialize($normalizedCats, 'json');

        $this->response->setContent($jsonContent);
        return $this->response;
    }
     /**
     * @Route("/api/cat/matchup", name="cat_get_matchup",methods={"GET","HEAD"})
     * @return Response
     */
    public function getCatMatchup()
    {

        $resultArray = $this->getRandomCats(2);

        $normalizedCats = $this->serializer->normalize($resultArray);
        $jsonContent = $this->serializer->serialize($normalizedCats, 'json');

        $this->response->setContent($jsonContent);
        return $this->response;
    }


     /**
     * @Route("/api/cat/matchup/vote", name="cat_vote",methods={"POST","HEAD"})
     * @return Response
     */
    public function voteMatchup(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $content = $request->getContent();

        // to validate the JSON
        $jsonContent = json_decode($content);
       
        if (!isset ($content) || $content === '' || json_last_error() !== JSON_ERROR_NONE) {

            $this->response->setContent(json_encode(array('data' => "Bad Request JSON INVALID")));
            $this->response->setStatusCode(400);
            return $this->response;

        }

        if (!isset($jsonContent->winner) || !isset($jsonContent->loser)) {

            $this->response->setContent(json_encode(array('data' => "Argument(s) missing for his request")));
            $this->response->setStatusCode(400);
            return $this->response;
        }

        $catW = $em->getRepository(Cat::class)->find($jsonContent->winner);
        $catL = $em->getRepository(Cat::class)->find($jsonContent->loser);

        if (!isset($catW) || !isset($catL)) {

            $this->response->setContent(json_encode(array('data' => "Couldnt find one of the cat entity")));
            $this->response->setStatusCode(404);
            return $this->response;
        }

        // I ve made a mistake in the calculation and i lack time to debug this 
    

        // $diffW = $catW->getScore() - $catL->getScore();
        // $this->eloMatch($catW,$diffW,1);
        // $this->eloMatch($catL,-$diffW,0);


        $catW->setScore($catW->getScore()+10);
        $catW->setNbMatch($catW->getNbMatch()+1);
        $em->persist($catW);

        $catL->setNbMatch($catL->getNbMatch()+1);
        $em->persist($catL);

        $em->flush();


        // we keep the winner fpor the next match
        $resultArray = $this->getRandomCats(1,[$jsonContent->winner]);
        array_unshift( $resultArray ,$catW);

        $normalizedCats = $this->serializer->normalize($resultArray) ;
        $jsonContent = $this->serializer->serialize($normalizedCats, 'json');

        $this->response->setContent($jsonContent);
        return $this->response;
    }


    /**
     * @Route("/api/cat/{id}", name="cat_get",methods={"GET","HEAD"})
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


    private function getRandomCats($nb = 0, $unusedIds = [])
    {
        $resultArray = [];

        // Its quite a bother to have a random doctrine entity's picker  without going full SQL 
        // so im picking in a range of index limited by the number of cats 
        // of course that would crash if the ids arent in a range
        // but here we dont kill cats 

        $totalCat =  $this->getDoctrine()
            ->getRepository(Cat::class)
            ->createQueryBuilder('u')
            ->select('count(u.id)')
            ->getQuery()
            ->getSingleScalarResult();


        if (count($unusedIds) == $totalCat)
            return array();

        $availableIds = range(0, $totalCat);

        foreach ($unusedIds as  $value)
            if (isset($value) && isset($availableIds[$value]))
                unset($availableIds[$value]);

        for ($i = 0; $i < $nb && count($availableIds) != 0; $i++) {

            $id = $availableIds[rand(0, count($availableIds) - 1)];

            array_push(
                $resultArray,
                $this->getDoctrine()
                    ->getRepository(Cat::class)
                    ->find($id)
            );

            unset($availableIds[$id]);
        }

        return $resultArray;
    }


    private function eloMatch($player,$diff,$win=1){

        // As a tribute to the original facemash 
        // I used the elo calculation to determine a player worth

        $em = $this->getDoctrine()->getManager();

        $score = $player->getScore();
        $nbm =  $player->getNbMatch();

        $k = $nbm < 30 ? 40 : 20 ;
        $pd = (1/(1+pow(10,-$diff)));

        print_r($diff);

        
        exit ;

        $score =  $score + $k * ($win - $pd);

        $player->setScore($score>0 ? $score : 0);
        $player->setNbMatch($nbm+1);

        $em->persist($player);
        $em->flush();

    }

   


}
