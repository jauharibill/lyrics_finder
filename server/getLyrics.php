<?php 

$link = $_POST['url'];
$var = json_decode(file_get_contents($link));
echo json_encode($var);
?>