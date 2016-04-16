		<div class="row body-content">
 			<div class="col-md-4 col-md-offset-4 animated zoomInLeft" id="">
 				<!-- <h3 class="text-center">Konfirmasi</h3> -->
 						<div class="row">
 							<div class="col-md-6" style="padding-right: 0px;"><button id="konfirmasi" class="btn btn-primary btn-flat form-control">Konfirmasi</button></div>
 							<div class="col-md-6" style="padding-left: 0px;"><button id="cek" class="btn btn-success btn-flat form-control">Cek Your Gift</button></div>
 						</div>
 						<div class="divider"></div>
 				<div class="box-content">
 					<div class="box-body">
 						
						<form id="formkonfirmasi" class="form" action="">
							<div class="form-group">
								<input type="text" required="" class="form-control btn-flat" placeholder="Masukkan kode transaksi "></input>
							</div>
							<div class="form-group">
								<input type="submit" required="" class="form-control btn btn-primary btn-flat" value="Konfirmasi"></input>
							</div>
						</form>
						<form id="formcek" class="form" action="" style="display: none;">
							<div class="form-group">
								<input type="text" class="form-control btn-flat" placeholder="Masukkan kode transaksi "></input>
							</div>
							<div class="form-group">
								<input type="submit" class="form-control btn btn-success btn-flat" value="Check Your Gift"></input>
							</div>
						</form>						
 					</div>
 				</div>
 			</div>
 		</div>

<script type="text/javascript">
	/*$("#konfirmasi").click()(function(){
		$("#formkonfirmasi").fadeTo(1000,1)
		$("#formcek").fadeTo(1000,0.0)
		$("#formcek").hide()
	})
	$("#cek").click()(function(){
		$("#formkonfirmasi").fadeTo(1000,0.0)
		$("#formcek").fadeTo(1000,1)
		$("#formkonfirmasi").hide()
	})*/

	$("#konfirmasi").click(function(){
	    $("#formcek").fadeTo(1000, 0.0);
	    $("#formcek").hide();
	    $("#formkonfirmasi").fadeTo(1000, 1);

	});
	$("#cek").click(function(){
	    $("#formcek").fadeTo(1000, 1);
	    $("#formkonfirmasi").fadeTo(1000, 0.0);
	    $("#formkonfirmasi").hide();

	});
</script>