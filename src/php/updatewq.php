<?php
require('./model/__connect.php');

$code = $_REQUEST['code'];
$type = $_REQUEST['type'];

$sql = "SELECT * FROM `shop` WHERE `product_code`='$code'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);
$num = $row['product_num'];
if($type=='add'){	
	$num = $num+1;
	$sql = "UPDATE `shop` SET `product_num`='$num' WHERE `product_code`='$code'";
}else{
	$num = $num-1;
	if($num>0){
		$sql = "UPDATE `shop` SET `product_num`='$num' WHERE `product_code`='$code'";
	}
}

$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}
?>