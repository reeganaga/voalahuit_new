<?php 
session_start();
include 'config/db.php';
if(isset($_POST['pesan'])){

//datadiri


	$_SESSION['qc']['nama']=$_POST['nama'];
	$_SESSION['qc']['no_hp']=$_POST['no_hp'];
	$_SESSION['qc']['email']=$_POST['email'];
	$_SESSION['qc']['alamat']=$_POST['alamat'];
	$_SESSION['qc']['ucapan']=$_POST['ucapan'];
	$_SESSION['qc']['tgl_pesan']=date('Y-m-d H:i:s');	
//konten


	$_SESSION['qc']['rambut']=$_POST['f_rambut'];
	$_SESSION['qc']['mata']=$_POST['f_mata'];
	$_SESSION['qc']['hidung']=$_POST['f_hidung'];
	$_SESSION['qc']['mulut']=$_POST['f_mulut'];
	$_SESSION['qc']['alis']=$_POST['f_alis'];
	$_SESSION['qc']['baju']=$_POST['f_baju'];
	$_SESSION['qc']['celana']=$_POST['f_celana'];
	$_SESSION['qc']['sepatu']=$_POST['f_sepatu'];
	$_SESSION['qc']['topi']=$_POST['f_topi'];
	$_SESSION['qc']['kacamata']=$_POST['f_kacamata'];
	$_SESSION['qc']['kulit']=$_POST['f_kulit'];	
		header('Location:index.php?page=pembayaran');


}elseif (isset($_POST['pesan2'])) {
	$nama 		=$_SESSION['qc']['nama'];
	$no_hp 		=$_SESSION['qc']['no_hp'];
	$email 		=$_SESSION['qc']['email'];
	$alamat 	=$_SESSION['qc']['alamat'];
	$ucapan 	=$_SESSION['qc']['ucapan'];
	$tgl_pesan=date('Y-m-d H:i:s');
	$id_kota=$_POST['kota'];
	$tranfer=$_POST['tranfer'];

	$rambut 	=$_SESSION['qc']['rambut'];
	$mata 		=$_SESSION['qc']['mata'];
	$hidung 	=$_SESSION['qc']['hidung'];
	$mulut 		=$_SESSION['qc']['mulut'];
	$alis 		=$_SESSION['qc']['alis'];
	$baju 		=$_SESSION['qc']['baju'];
	$celana 	=$_SESSION['qc']['celana'];
	$sepatu 	=$_SESSION['qc']['sepatu'];
	$topi 		=$_SESSION['qc']['topi'];
	$kacamata 	=$_SESSION['qc']['kacamata'];
	$kulit 		=$_SESSION['qc']['kulit'];

    function generateRandomString($length = 5) {
            $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $charactersLength = strlen($characters);
            $randomString = '';
            for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    $token=generateRandomString(5);

	$query_pesan=mysql_query("INSERT into pemesanan (nama,no_hp,email,alamat,ucapan,tgl_pesan,jenis,status,token,id_kota,bank)
		values (
		'$nama','$no_hp','$email','$alamat','$ucapan','$tgl_pesan','pc','pending','$token',$id_kota,'$tranfer')");
	echo mysql_error();
	$id=mysql_insert_id();
	$query_papercraft=mysql_query("INSERT into pemesanan_papercraft 
		(id_pemesanan,rambut,mata,hidung,mulut,alis,baju,celana,sepatu,topi,kacamata,kulit)
		values 
		($id,'$rambut','$mata','$hidung','$mulut','$alis','$baju','$celana','$sepatu','$topi','$kacamata','$kulit')");
	if ($query_papercraft) {
		header('Location:index.php?page=sukses');
		echo "sukses";
		echo mysql_error();



	}else{
		header('Location:index.php?page=gagal');
		echo mysql_error();
		echo "gagal";
	}
}

 ?>
