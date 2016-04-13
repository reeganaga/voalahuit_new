<?php
session_start();
include 'config/koneksi.php';

$username=$_POST['username'];
$password=md5($_POST['password']);

$cek_login=mysql_query("select * from admin where username='$username' and password='$password' ");


$ada=mysql_num_rows($cek_login);
if ($ada!==0) {
	$_SESSION['username']='Admin';
	header("location:index.php");
}else{
	header("location:login.php?status=fail");
	//echo "cek_login";
}