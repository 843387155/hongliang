<?php
require('./model/__connect.php');
//获取前端的参数
$code = $_REQUEST['code'];//商品编码
$name = $_REQUEST['name'];//商品名称
$img = $_REQUEST['img'];//商品图片
$price = $_REQUEST['price'];//商品价格
$num = $_REQUEST['num'];//商品数量
$color = $_REQUEST['color'];//商品颜色
$edition = $_REQUEST['edition'];//商品版本
$meal = $_REQUEST['meal'];//商品套餐
//根据前端参数插入数据

$sql = "SELECT * FROM `shop` WHERE `product_code`='$code'";
$res = mysqli_query($conn,$sql);
$rows = mysqli_num_rows($res);//mysqli_num_rows方法是统计查询结果有几行
if($rows>0){
	$row = mysqli_fetch_assoc($res);//获取当前行数据,转成php数组
	$num = $row['product_num']+$num;
	$sql = "UPDATE `shop` SET `product_num`='$num' WHERE `product_code`='$code'";
}else{
	$sql = "INSERT INTO `shop` (`product_code`,`product_name`,`product_img`,`product_price`,`product_num`,`product_color`,`product_edition`,`product_meal`) VALUES ('$code','$name','$img','$price','$num','$color','$edition','$meal')";
}

$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}

?>