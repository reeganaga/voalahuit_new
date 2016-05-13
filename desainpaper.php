	<canvas class="papercraft animated fadeInUp content" id="canvas" width="1360" height="720"  ></canvas>


<!-- Small modal -->
<a href="" data-toggle="modal" data-target="#myModal" data-remote="false">coba dialog</a>
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
	        	<form class="form" action="prosespesan.php" method="post">
	        		<div class="form-group">
	        			<label class="label-control">Nama</label>
	        			<input name="nama" type="text" class="form-control btn-flat" required="required" placeholder="Masukkan Nama Lengkap"></input>
	        		</div>
	        		<div class="form-group">
	        			<label class="label-control">No Hp</label>
	        			<input name="no_hp" type="text" class="form-control btn-flat" required="required" placeholder="0856xxxxxxxx"></input>
	        		</div>
	        		<div class="form-group">
	        			<label class="label-control">Email</label>
	        			<input name="email" type="email" class="form-control btn-flat" required="required" placeholder="Email"></input>
	        		</div>

	        		<div class="form-group">
	        			<label class="label-control">Alamat</label>
	        			<textarea name="alamat" class="form-control btn-flat" required="required" placeholder="Masukkan alamat lengkap anda"></textarea> 
	        		</div>
	        		<div class="form-group">
	        			<label class="label-control">Ucapan</label>
	        			<input name="ucapan" type="text" class="form-control btn-flat" required="required" placeholder="Ucapan ex: HBD Istriku tercinta"></input>
	        		</div>
	        		<div class="form-group">
	        			<input name="f_rambut" type="hidden" id="f_rambut"></input>
	        			<input name="f_mata" type="hidden" id="f_mata"></input>
	        			<input name="f_hidung" type="hidden" id="f_hidung"></input>
	        			<input name="f_mulut" type="hidden" id="f_mulut"></input>
	        			<input name="f_alis" type="hidden" id="f_alis"></input>
	        			<input name="f_baju" type="hidden" id="f_baju"></input>
	        			<input name="f_celana" type="hidden" id="f_celana"></input>
	        			<input name="f_sepatu" type="hidden" id="f_sepatu"></input>
	        			<input name="f_topi" type="hidden" id="f_topi"></input>
	        			<input name="f_kacamata" type="hidden" id="f_kacamata"></input>
	        			<input name="f_kulit" type="hidden" id="f_kulit"></input>
	        			<input name="pesan" type="submit" value="Lanjutkan Pemesanan" class="btn btn-success btn-flat form-control"></input>
	        			<!-- <a href="?page=pembayaran" value="Lanjutkan Pemesanan" class="btn btn-success btn-flat form-control">Lanjutkan Pemesanan</a> -->
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
