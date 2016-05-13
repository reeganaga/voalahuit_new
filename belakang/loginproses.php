<?php 
session_start();
include '../config/db.php';
if (isset($_POST['login'])) {
	$username=$_POST['username'];
	$password=md5($_POST['password']);
	
	$query="SELECT * from admin where username='$username' and password='$password'";
	$aksi=mysql_query($query);
	$ada=mysql_num_rows($aksi);

	if ($ada>0) {
		while ($row=mysql_fetch_array($aksi)) {
			$_SESSION['username']=$row['username'];

			header('Location:index.php');
		}
		
	}else{
			header('Location:login.php?log=false');
	}

}else{
			header('Location:login.php?log=false');
}
