<?php

require('./model/_connect.php');

$numb = $_REQUEST['numb'];//用户手机号numb
$pass = $_REQUEST['pass'];//用户密码pass

$sql = "SELECT * FROM `user` WHERE `user_number`='$numb' AND `user_password`='$pass'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);
mysqli_close($conn);
if($row){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}


?>