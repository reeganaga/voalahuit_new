<?php

$server="localhost";
$user="root";
$pass="";
$database="db_voala";

// koneksi phpmyadmin
$koneksi=mysql_connect($server,$user,$pass);

$pilihdb=mysql_select_db($database);

if (!$koneksi) {
	echo "koneksi gagal";
}
if (!$pilihdb) {
	echo "databse tidak ada";
}