<?php
mysql_connect("localhost","root","root");
$conn=mysql_select_db("quicrafts");
if($conn){
 // echo "konek";
}else{
 echo "<script>alert('gak konek');</script>";
}