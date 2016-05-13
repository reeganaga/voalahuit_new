<?php 
if(isset($_POST['konfirmasi'])){
	// include 'config/db.php';
	$token=$_POST['token'];
	$cekdata=mysql_query("SELECT * from pemesanan where token='$token'");
	$ada=mysql_num_rows($cekdata);
	if ($ada>0) {
		$id=mysql_result($cekdata, 0);
		echo '<script>window.location = "index.php?page=detail_transaksi&id='.$id.'"</script>';
		// echo "<h1>berhasil</h1>";
	}else{
		echo "kode token salah";
	}
}
 ?>
		<div class="row body-content">
 			<div class="col-md-4 col-md-offset-4 animated zoomInLeft" id="">
 				<!-- <h3 class="text-center">Konfirmasi</h3> -->

 				<div class="box-content">
 					<div class="box-body">
						<form id="formkonfirmasi" class="form" action="" method="post">
							<div class="form-group">
								<input name="token" type="text" required="" class="form-control btn-flat" placeholder="Masukkan Kode Token "></input>
							</div>
							<div class="form-group">
								<!-- <input type="submit" required="" class="form-control btn btn-primary btn-flat" value="Konfirmasi & Cek Status"></input> -->
								<!-- <a href="?page=detail_transaksi" class="form-control btn btn-primary btn-flat">Konfirmasi & Cek Status</a> -->
								<input name="konfirmasi" type="submit" class="form-control btn btn-success btn-flat" value="Check Your Gift"></input>

							</div>
						</form>
						<form id="formcek" class="form" action="" style="display: none;">
							<div class="form-group">
								<!-- <input type="text" class="form-control btn-flat" placeholder="Masukkan kode transaksi "></input> -->
							</div>
							<div class="form-group">
								<input name="konfirmasi" type="submit" class="form-control btn btn-success btn-flat" value="Check Your Gift"></input>
							</div>
						</form>
 						<i><small>*Masukkan kode token yang anda peroleh dari email untuk melakukan konfirmasi dan melihat status pemesanan anda</small></i>

 					</div>
 				</div>
 			</div>
 		</div>


<script type="text/javascript">

/*	$("#konfirmasi").click(function(){
	    $("#formcek").fadeTo(1000, 0.0);
	    $("#formcek").hide();
	    $("#formkonfirmasi").fadeTo(1000, 1);

	});
	$("#cek").click(function(){
	    $("#formcek").fadeTo(1000, 1);
	    $("#formkonfirmasi").fadeTo(1000, 0.0);
	    $("#formkonfirmasi").hide();

	});*/
</script>