<?php
require('./__connect.php');

//书写sql语句
$sql = "CREATE TABLE shop (
			-- id   int   unsigned   not   null   auto_increme   primary   key,
			
			product_code VARCHAR(300) NOT NULL PRIMARY KEY,
			
			product_name VARCHAR(300) NOT NULL,
			
			product_img VARCHAR(30) NOT NULL,
			
			product_price VARCHAR(30) NOT NULL,
			
			product_num VARCHAR(30) NOT NULL,
			
			product_color VARCHAR(30) NOT NULL,
			
			product_edition VARCHAR(30) NOT NULL,
			
			product_meal VARCHAR(30) NOT NULL,

			submission_date TIMESTAMP	
)";
$result = mysqli_query($conn,$sql);
if($result){
	echo "数据表创建成功";
}else{
	echo "数据表创建失败";
}

?>