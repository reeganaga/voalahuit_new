		<div class="row body-content">
 			<div class="col-md-4 animated zoomInLeft" id="">
 				<div class="box-content">
 					<div class="box-header">Desain</div>
 					<div class="box-body">
						<div class="papercraft-jadi">
			        		<div id="base_paper"><img src="images/assets/basePaper-<?php echo $_SESSION['qc']['kulit'];?>.jpg"></div>
					        <div id="rambut"><img src="images/rambut/<?php echo $_SESSION['qc']['rambut'];?>.png"></div>
					        <!-- <div id="kulit"><img src="images/kulit/h01.png"></div> -->
					        <div id="mata"><img src="images/mata/<?php echo $_SESSION['qc']['mata'];?>.png"></div>
					        <div id="hidung"><img src="images/hidung/<?php echo $_SESSION['qc']['hidung'];?>.png"></div>
					        <div id="mulut"><img src="images/mulut/<?php echo $_SESSION['qc']['mulut'];?>.png"></div>
					        <div id="alis"><img src="images/alis/<?php echo $_SESSION['qc']['alis'];?>.png"></div>
					        <div id="baju"><img src="images/baju/<?php echo $_SESSION['qc']['baju'];?>.png"></div>
					        <div id="celana"><img src="images/celana/<?php echo $_SESSION['qc']['celana'];?>.png"></div>
					        <div id="sepatu"><img src="images/sepatu/<?php echo $_SESSION['qc']['sepatu'];?>.png"></div>
					        <div id="topi"><img src="images/topi/<?php echo $_SESSION['qc']['topi'];?>.png"></div>
					        <div id="kacamata"><img src="images/kacamata/<?php echo $_SESSION['qc']['kacamata'];?>.png"></div>	
				        </div>						
 					</div>
 				</div>
 			</div>
 			<div class="col-md-5 animated zoomInRight" id="">
 				<div class="box-content">
 					<div class="box-header">Data Diri</div>
 					<div class="box-body">
						<table class="table table-hover">
							<tr>
								<td width="30%">Nama</td>
								<td width="70%"><input type="text" class="form-control btn-flat" value="<?php echo $_SESSION['qc']['nama']; ?>"></input></td>
							</tr>
							<tr>
								<td width="30%">HP</td>
								<td width="70%"><input type="text" class="form-control btn-flat" value="<?php echo $_SESSION['qc']['no_hp'];?>"></input></td>
							</tr>
							<tr>
								<td width="30%">Email</td>
								<td width="70%"><input type="text" class="form-control btn-flat" value="<?php echo $_SESSION['qc']['email'];?>"></input></td>
							</tr>
							<tr>
								<td width="30%">Alamat</td>
								<td width="70%">
									<textarea class="form-control btn-flat"><?php echo $_SESSION['qc']['alamat'];?></textarea>
								</td>
							</tr>
							<tr>
								<td width="30%">Ucapan</td>
								<td width="70%"><input type="text" class="form-control btn-flat" value="<?php echo $_SESSION['qc']['ucapan'];?>"></input></td>
							</tr>
						</table>
						<button class="btn-warning btn btn-flat" style="width: 100%">Ubah Data Diri</button>						
 					</div>
 				</div>
 				
 			</div>
 			<div class="col-md-3 animated zoomInRight" id="">
 				<div class="box-content">
 					<div class="box-header">Metode Pembayaran</div>
 					<div class="box-body">
 						<i style="color: red;">*pilih salah satu metode pembayaran</i>

 						<form class="form" action="prosespesan.php" method="post">
							<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
							  <div class="panel panel-default btn-flat">
							    <div class="panel-heading" role="tab" id="headingOne">
							      <h4 class="panel-title">
							        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							          Tranfer Bank BNI
							        </a>
							      </h4>
							    </div>
							    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
							      <div class="panel-body">
							        <input type="radio" name="tranfer" value="BNI">BNI</input>
							      </div>
							    </div>
							  </div>
							  <div class="panel panel-default btn-flat">
							    <div class="panel-heading" role="tab" id="headingTwo">
							      <h4 class="panel-title">
							        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							          Tranfer Bank BCA
							        </a>
							      </h4>
							    </div>
							    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
							      <div class="panel-body">
							        <input type="radio" name="tranfer" value="BCA">BCA</input>
							        
							      </div>
							    </div>
							  </div>
							  <div class="panel panel-default btn-flat">
							    <div class="panel-heading" role="tab" id="headingThree">
							      <h4 class="panel-title">
							        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							          Tranfer Bank BRI
							        </a>
							      </h4>
							    </div>
							    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
							      <div class="panel-body">
							        <input type="radio" name="tranfer" value="BRI">BRI</input>
							        
							      </div>
							    </div>
							  </div>
							</div>

							<div class="form-group">
								<label class="label-control">Pilih Kota Tempat Tinggal</label>
								<select name="kota" id="kota" class="form-control select2 btn-flat" style="width: 100%;">
								<?php 
								$cekkota=mysql_query("SELECT * from kota");
								while ($row=mysql_fetch_array($cekkota)) {
									# code...
								
								 ?>
			                      <option  value="<?php echo $row['id']; ?>"><?php echo $row['nama_kota']; ?></option>
			                    <?php } ?>
			                    </select>
							</div>
							<label>Detail Pembayaran</label>
							<table class="table table-striped">
								<tr>
									<td>Papercraft</td>
									<td>Rp 100.000,00</td>
								</tr>
								<tr>
									<td>Ongkir</td>
									<td>Rp 20.000,00</td>
								</tr>
								<tr>
									<td><h3>Total</h3></td>
									<td><h3>Rp 120.000,00</h3></td>
								</tr>
							</table>
							<button name="pesan2" type="submit" class="btn btn-success btn-flat" style="width: 100%;">Pesan</button>
							<!-- <a href="?page=sukses" class="btn btn-success btn-flat" style="width: 100%;">Pesan</a> -->
						</form>
 					</div>
 				</div>
 			</div>
 		</div>
					
<script src="plugins/select2/select2.full.min.js"></script>
<script>
	$(function () {
        //Initialize Select2 Elements
        $(".select2").select2();
	});
						document.getElementById('kota').addEventListener('change', function(event){
						    var elem = event.target;
						    console.log(elem.name);
						    console.log(elem.tagName);
						    console.log(elem.type);
						    console.log(elem.value);
						    console.log(elem.text);
						    if (elem.value=='') {}
						    var harga = document.getElementById('harga').value;
						    var total = elem.value * harga;
						    document.getElementById('total').innerHTML = "Rp "+total+" ,-";
						         console.log("total = "+total);
						      
						}); 
</script>	