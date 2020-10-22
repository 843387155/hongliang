<?php
require('./model/_connect.php');
//获取前端的参数
$area = $_REQUEST['area'];//用户地区area
$numb = $_REQUEST['numb'];//用户手机号numb
$code = $_REQUEST['code'];//用户验证码code
$pass = $_REQUEST['pass'];//用户密码pass
$data = $_REQUEST['data'];//用户出生日期data
//根据前端参数插入数据
$sql = "SELECT * FROM `user` WHERE `user_number`='$numb'";
$res = mysqli_query($conn,$sql);
// $rows = mysqli_num_rows($res);//mysqli_num_rows方法是统计查询结果有几行
//  if($rows>0){
//  	$row = mysqli_fetch_assoc($res);//获取当前行数据,转成php数组
//  	$pass = $row['product_num']+$pass;
//  	$sql = "UPDATE `user` SET `user_password`='$pass' WHERE `user_number`='$numb'";
// }else{
	$sql = "INSERT INTO `user` (`user_country`,`user_number`,`user_code`,`user_password`,`user_datebirth`) VALUES ('$area','$numb','$code','$pass','$data')";
// }
$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}
// $sql = "INSERT INTO `user` (`user_country`,`user_number`,`user_code`,`user_password`,`user_datebirth`) VALUES ('$area','$numb','$code','$pass','$data')";
// $res = mysqli_query($conn,$sql);
// mysqli_close($conn);

// if($res){
//     header('location:/cyrshop/src/pages/hwlogin.html');
// }else{
//     echo "服务器错误";
// }
?>