		<div class="row body-content">
 			<div class="col-md-4 animated zoomInLeft" id="">
 				<div class="box-content">
 					<div class="box-header">Desain</div>
 					<div class="box-body">
						<div class="papercraft-jadi">
			        		<div id="base_paper"><img src="images/assets/basePaper-skin7.jpg"></div>
					        <div id="rambut"><img src="images/rambut/h01.png"></div>
					        <!-- <div id="kulit"><img src="images/kulit/h01.png"></div> -->
					        <div id="mata"><img src="images/mata/e01.png"></div>
					        <div id="hidung"><img src="images/hidung/n01.png"></div>
					        <div id="mulut"><img src="images/mulut/m01.png"></div>
					        <div id="alis"><img src="images/alis/eb01.png"></div>
					        <div id="baju"><img src="images/baju/cl01.png"></div>
					        <div id="celana"><img src="images/celana/pn01.png"></div>
					        <div id="sepatu"><img src="images/sepatu/sh01.png"></div>
					        <div id="topi"><img src="images/topi/hat01.png"></div>
					        <div id="kacamata"><img src="images/kacamata/eyg01.png"></div>	
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
								<td width="70%"><input type="text" class="form-control btn-flat" value="Rega"></input></td>
							</tr>
							<tr>
								<td width="30%">HP</td>
								<td width="70%"><input type="text" class="form-control btn-flat" value="085xxxxxxxxx"></input></td>
							</tr>
							<tr>
								<td width="30%">Email</td>
								<td width="70%"><input type="text" class="form-control btn-flat" value="rega.blank@gmail.com"></input></td>
							</tr>
							<tr>
								<td width="30%">Alamat</td>
								<td width="70%">
									<textarea class="form-control btn-flat">Nitikan Uh 6 317 Yogyakarta</textarea>
								</td>
							</tr>
							<tr>
								<td width="30%">Ucapan</td>
								<td width="70%"><input type="text" class="form-control btn-flat" value="rega"></input></td>
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

 						<form class="form" action="">
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
							        <input type="radio" name="tranfer" value="bni">BNI</input>
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
							        <input type="radio" name="tranfer" value="bca">BCA</input>
							        
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
							        <input type="radio" name="tranfer" value="bni">BRI</input>
							        
							      </div>
							    </div>
							  </div>
							</div>

							<div class="form-group">
								<label class="label-control">Pilih Kota Tempat Tinggal</label>
								<select id="kota" class="form-control select2 btn-flat" style="width: 100%;">
			                      <option selected="selected" value="1">Jakarta</option>
			                      <option value="2">Bandung</option>
			                      <option value="3">Yogyakarta</option>
			                      <option value="4">Denpasar</option>
			                      <option value="5">Batu</option>
			                      <option value="6">Blora</option>
			                      <option value="7">Kulon Progo</option>
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
							<!-- <button type="submit" class="btn btn-success btn-flat" style="width: 100%;">Pesan</button> -->
							<a href="?page=sukses" class="btn btn-success btn-flat" style="width: 100%;">Pesan</a>
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