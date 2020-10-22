<?php
require('./model/__connect.php');

$code = $_REQUEST['code'];
//根据id删除数据
$sql = "DELETE FROM `shop` WHERE `product_code`=$code";
$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}

?>