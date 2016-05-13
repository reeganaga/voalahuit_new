<?php 
if (isset($_GET['id'])) {
	$id=$_GET['id'];
	$cek=mysql_query("SELECT * from pemesanan where id=$id");
	$ada=mysql_num_rows($cek);
	if ($ada==0) {
		echo "<script>alert('Maaf kode yang anda masukkan salah');window.location='index.php?page=konfirmasi';</script>";
	}else{
		$lihatdetail=mysql_query("SELECT * from pemesanan_papercraft where id_pemesanan=$id");
	if (isset($_POST['konfirmasi'])) {
		$target_dir = "uploads/bukti/";
		$target_file = $target_dir . basename($_FILES["bukti"]["name"]);
		$uploadOk = 1;
		$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
		// Check if image file is a actual image or fake image
		if(isset($_POST["konfirmasi"])) {
		    $check = getimagesize($_FILES["bukti"]["tmp_name"]);
		    if($check !== false) {
		        // echo "File is an image - " . $check["mime"] . ".";
		        $uploadOk = 1;
		        move_uploaded_file($_FILES["bukti"]["tmp_name"], $target_file);
		        $id=$_POST['id'];
		        mysql_query("UPDATE pemesanan set bukti='".$_FILES["bukti"]["name"]."',status='terbayar' where id=$id");
		        echo mysql_error();
		    } else {
		        // echo "File is not an image.";
		        $uploadOk = 0;
		    }
		}
	}	
?>
		<div class="row body-content">
 			<div class="col-md-4 animated zoomInLeft" id="">
 				<div class="box-content">
 					<div class="box-header">Desain</div>
 					<div class="box-body">
						<div class="papercraft-jadi">
						<?php while ($row=mysql_fetch_array($lihatdetail)) {
							# code...
						 ?>
			        		<div id="base_paper"><img src="images/assets/basePaper-<?php echo $row['kulit'];?>.jpg"></div>
					        <div id="rambut"><img src="images/rambut/<?php echo $row['rambut'];?>.png"></div>
					        <!-- <div id="kulit"><img src="images/kulit/h01.png"></div> -->
					        <div id="mata"><img src="images/mata/<?php echo $row['mata'];?>.png"></div>
					        <div id="hidung"><img src="images/hidung/<?php echo $row['hidung'];?>.png"></div>
					        <div id="mulut"><img src="images/mulut/<?php echo $row['mulut'];?>.png"></div>
					        <div id="alis"><img src="images/alis/<?php echo $row['alis'];?>.png"></div>
					        <div id="baju"><img src="images/baju/<?php echo $row['baju'];?>.png"></div>
					        <div id="celana"><img src="images/celana/<?php echo $row['celana'];?>.png"></div>
					        <div id="sepatu"><img src="images/sepatu/<?php echo $row['sepatu'];?>.png"></div>
					        <div id="topi"><img src="images/topi/<?php echo $row['topi'];?>.png"></div>
					        <div id="kacamata"><img src="images/kacamata/<?php echo $row['kacamata'];?>.png"></div>	
				        <?php } ?>
				        </div>						
 					</div>
 				</div>
 			</div>
 			<div class="col-md-8 animated zoomInRight" id="">
 				<div class="box-content">
 					<div class="box-header">Data Diri</div>
 					<div class="box-body">
						<table class="table table-hover">
						<?php while ($row=mysql_fetch_array($cek)) {
							# code...
						 ?>
							<tr>
								<td width="30%">No Transaksi</td>
								<td width="70%"><strong style="color: red;">#<?php echo $row['id']; ?></strong></td>
							</tr>
							<tr>
								<td width="30%">Nama Pembeli</td>
								<td width="70%"><?php echo $row['nama']; ?></td>
							</tr>
							<tr>
								<td width="30%">Alamat Dikirim</td>
								<td width="70%"><?php echo $row['alamat']; ?></td>
							</tr>
							<tr>
								<td width="30%">Kota Pengiriman</td>
								<td width="70%">Jakarta</td>
							</tr>
							<tr>
								<td width="30%">Email</td>
								<td width="70%"><?php echo $row['email']; ?></td>
							</tr>
							<tr>
								<td width="30%">HP</td>
								<td width="70%"><?php echo $row['no_hp']; ?></td>
							</tr>
							<tr>
								<td width="30%">Ucapan</td>
								<td width="70%"><?php echo $row['ucapan']; ?></td>
							</tr>
							<tr>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
							<tr>
								<td width="30%">Kode Token</td>
								<td width="70%">
									<div class="isi_token" style="color: red;"><?php echo $row['token']; ?></div><small> * simpan kode ini untuk cek status </small>
								</td>
							</tr>
							<tr>
								<td width="30%">Status</td>
								<td width="70%"><div class="btn btn-warning btn-flat">
								<?php echo $row['status']; ?></div></td>
							</tr>
							<tr>
								<td width="30%">No Resi</td>
								<td width="70%"></td>
							</tr>
							<tr>
								<td width="30%">&nbsp;</td>
								<td width="70%"><strong class="pull-right">Total yang harus dibayar</strong></td>
							</tr>
							<tr>
								<td width="30%">&nbsp;</td>
								<td width="70%" >Papercraft<strong class="pull-right">Rp 100.000,00</strong></td>
							</tr>
							<tr>
								<td width="30%">&nbsp;</td>
								<td width="70%" >Ongkir<strong class="pull-right">Rp 20.000,00</strong></td>
							</tr>
							<tr>
								<td width="30%">&nbsp;</td>
								<td width="70%" ><strong>Total</strong><strong class="pull-right">Rp 120.000,00</strong></td>
							</tr>
							<?php 
							$id=$row['id'];
							$bukti=$row['bukti'];
							} ?>
						</table>

						<?php 
							if (!empty($bukti)) {
								echo '<a class="example-image-link" href="uploads/bukti/'.$bukti.'" data-lightbox="example-1"><img class="bukti-tranfer" src="uploads/bukti/'.$bukti.'" alt="image-1" /></a>';
							}
						 ?>
						<form class="form" method="post" action="" enctype="multipart/form-data">
							<div class="form-group">
								<label class="label-control">Upload Bukti Pembayaran</label>
								<input name="bukti" type="file" class=""></input>
							</div>
							<div class="form-group">
								<input name="id" type="hidden" value="<?php echo $id; ?>"></input>
								<input name="konfirmasi" type="submit" class="btn btn-primary btn-flat" value="Konfirmasi"></input>
							</div>
						</form>
 					</div>
 				</div>
 				
 			</div>
 		</div>
<?php		
	}
}
 ?>

					
