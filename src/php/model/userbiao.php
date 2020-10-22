<?php
require('./_connect.php');

//书写sql语句
$sql = "CREATE TABLE user (
			id   int   unsigned   not   null   auto_increment   primary   key,
			user_country VARCHAR(300) NOT NULL,
			user_number VARCHAR(300) NOT NULL,
			user_code VARCHAR(30) NOT NULL,
			user_password VARCHAR(30) NOT NULL,
			user_datebirth VARCHAR(30) NOT NULL,
			submission_date TIMESTAMP	
)";
$result = mysqli_query($conn,$sql);
if($result){
	echo "数据表创建成功";
}else{
	echo "数据表创建失败";
}

?>