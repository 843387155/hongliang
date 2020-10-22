<?php
/* 
    如果要用login.php处理登陆
    传入用户名必须使用username这个键
    传入密码必须使用password这个键
*/

require('./model/_connect.php');

$numb = $_REQUEST['numb'];//用户手机号numb
$pass = $_REQUEST['pass'];//用户密码pass

$sql = "SELECT * FROM `user` WHERE `user_number`='$numb' AND `user_password`='$pass'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);
mysqli_close($conn);
// if($row){
//     //如果登陆成功
//     //并且$expires有值
//     if($expires){
//         //给浏览器写入cookie,有效期是10天
//         setcookie('name',$uname,time()+10*24*60*60);
//     }else{
//         //给浏览器写入cookie,会话时效
//         setcookie('name',$uname);
//     }
    
//     header('location:./hwstore.html');
// }else{
//     echo "用户名或密码错误!";
// }

// $result = mysqli_query($conn,$sql);
if($row){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}


?>