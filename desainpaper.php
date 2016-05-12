	<div class="row">
		<div class="col-md-12">
			<a class="no-padding" href="">
			<img  class="tool-papercraft img-responsive animated fadeInUp content" src="images/male.svg">
			</a>
			<a class=" no-padding" href="">
			<img  class="tool-papercraft img-responsive animated fadeInUp content" src="images/female.svg">
			</a>
			<a class="" href="">
			<img  style="width: 12% !important;" class="tool-papercraft img-responsive animated fadeInUp content" src="images/save.svg" onclick="testClick()">
			</a>
<script type="text/javascript">
	function testClick(){
		if (namaKulit == "" || namaRambut == "" || namaMata == "" || namaHidung == "" || namaMulut == "" || namaAlis == "" || namaBaju == "" || namaCelana == "") {
				alert("Data Belum lengkap");


			} else {
				// $('#myModal').modal('show');
				$('#myModal').on('show.bs.modal', function (event) {
				  var modal = $(this)

				  modal.find('.modal-title').text('Pemesanan ' + namaKulit)
				  $('#base_paper img').attr('src', 'images/assets/basePaper-'+namaKulit+'.jpg') 
				  $('#rambut img').attr('src', 'images/rambut/'+namaRambut+'.png') 
				  $('#mata img').attr('src', 'images/mata/'+namaMata+'.png') 
				  $('#hidung img').attr('src', 'images/hidung/'+namaHidung+'.png') 
				  $('#mulut img').attr('src', 'images/mulut/'+namaMulut+'.png') 
				  $('#alis img').attr('src', 'images/alis/'+namaAlis+'.png') 
				  $('#baju img').attr('src', 'images/baju/'+namaBaju+'.png') 
				  $('#celana img').attr('src', 'images/celana/'+namaCelana+'.png') 
				  $('#sepatu img').attr('src', 'images/sepatu/'+namaSepatu+'.png') 
				  $('#topi img').attr('src', 'images/topi/'+namaTopi+'.png') 
				  $('#kacamata img').attr('src', 'images/kacamata/'+namaKacamata+'.png') 

				  // modal.find('.modal-body rambut').val(recipient)
				})
				$('#myModal').modal('show');

				//alert("kulit" + namaKulit + "\nrambut:" + namaRambut + "\nmata:" + namaMata + "\nHidung:" + namaHidung + "\nmulut:" + namaMulut + "\nalis:" + namaAlis + "\nbaju:" + namaBaju + "\ncelana:" + namaCelana + "\ntopi:" + namaTopi + "\nkacamata:" + namaKacamata + "");
			}
	}
</script>			
		</div>
	</div>
	<canvas class="papercraft animated fadeInUp content" id="canvas" width="1360" height="367"  ></canvas>
		


<!-- Small modal -->
<div id="myModal" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Isikan Data Ini Lengkap Ini Untuk Melanjutkan Pemesanan</h4>
      </div>
      <div class="modal-body">
        <!-- <input type="text" class="form-control" id="recipient-name"></input> -->
        <div class="row">
        	<div class="col-md-6">
	        	<div class="papercraft-jadi">
	        		<div id="base_paper"><img src=""></div>
			        <div id="topi"><img src=""></div>
			        <div id="kacamata"><img src=""></div>		        		
			        <div id="rambut"><img src=""></div>
			        <!-- <div id="kulit"><img src="images/kulit/h01.png"></div> -->
			        <div id="mata"><img src=""></div>
			        <div id="hidung"><img src=""></div>
			        <div id="mulut"><img src=""></div>
			        <div id="alis"><img src=""></div>
			        <div id="baju"><img src=""></div>
			        <div id="celana"><img src=""></div>
			        <div id="sepatu"><img src=""></div>
		        </div>
	        </div>
	        <div class="col-md-6">
	        	<form class="form">
	        		<div class="form-group">
	        			<label class="label-control">Nama</label>
	        			<input type="text" class="form-control btn-flat" required="required" placeholder="Masukkan Nama Lengkap"></input>
	        		</div>
	        		<div class="form-group">
	        			<label class="label-control">No Hp</label>
	        			<input type="text" class="form-control btn-flat" required="required" placeholder="0856xxxxxxxx"></input>
	        		</div>
	        		<div class="form-group">
	        			<label class="label-control">Email</label>
	        			<input type="email" class="form-control btn-flat" required="required" placeholder="Email"></input>
	        		</div>

	        		<div class="form-group">
	        			<label class="label-control">Alamat</label>
	        			<textarea class="form-control btn-flat" required="required" placeholder="Masukkan alamat lengkap anda"></textarea> 
	        		</div>
	        		<div class="form-group">
	        			<label class="label-control">Ucapan</label>
	        			<input type="text" class="form-control btn-flat" required="required" placeholder="Ucapan ex: HBD Istriku tercinta"></input>
	        		</div>
	        		<div class="form-group">
	        			<!-- <input type="submit" value="Lanjutkan Pemesanan" class="btn btn-success btn-flat form-control"></input> -->
	        			<a href="?page=pembayaran" value="Lanjutkan Pemesanan" class="btn btn-success btn-flat form-control">Lanjutkan Pemesanan</a>
	        			<!-- <input type="text" class="form-control" required="required" placeholder="Metode Pembayaran"></input> -->
	        		</div>
	        			

	        	</form>
	        </div>
        </div>
	        
	        
        <!-- <div id="rambut"><img src=""></div> -->
        
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
