<?php 
$url = file_get_contents("http://api.lololyrics.com/0.5/getLyric?artist=adele&track=hello");
$xml=simplexml_load_string($url) or die("error parse data");
echo $xml;


 ?>