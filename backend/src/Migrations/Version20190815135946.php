<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190815135946 extends AbstractMigration
{
    public function getDescription() : string
    {
        return "The inital database for catmash";
    }

    public function up(Schema $schema) : void
    {
        $cats = json_decode(file_get_contents("./cats.json"))->images;
        $names =  json_decode(file_get_contents("https://uinames.com/api/?region=united+states&amount=" . count($cats)));
    
        foreach ($cats as $key => $cat) 
            $this->addSql( "Insert into cat (name,score,url,vote,gender) values ('".$names[$key]->name."',0,'".$cat->url."',0,'".$names[$key]->gender[0]."') ;");        
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE cat DROP url');
    }
}
