<!DOCTYPE html>
<html>
<head>
	<title>Voala Huit</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/custom.css">
	<link rel="stylesheet" type="text/css" href="css/custom.sass">
	<link rel="stylesheet" type="text/css" href="css/animate.css">

	<!-- google font -->
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Tangerine">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>

	<script src="js/jquery-1.9.0.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/createjs-2015.11.26.min.js"></script>
	<script src="desainPaper.js?1459339718380"></script>

<script>
var canvas, stage, exportRoot;
function init() {
	// --- write your JS code here ---
	
	canvas = document.getElementById("canvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
	exportRoot = new lib.desainPaper();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	stage.enableMouseOver();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}


function playSound(id, loop) {
	return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}
</script>
</head>
<body onload="init();">
  	<nav class="navbar">
		<a href="index.php"><img src="images/Desain_MenuUtama.png" class="header animated bounceInDown" ></a>
		<div class="header-content">
			<div class="info-header">
				<ul class="menu-top animated flipInX">
					<a href="" data-toggle="modal" data-target="#pilihdesain" data-remote="false"><li class="bg-tosca">Make Your Gift</li></a>
					<a href="?page=galeri"><li class="bg-red">Galeri</li></a>
					<a href="?page=bantuan"><li class="bg-navy">Cara Pemesanan</li></a>
					<a href="#"><li class="bg-red">Tentang</li></a>
				</ul>
			</div>
		</div>
 	</nav>
 	<div class="container-fluid content-custom">
 		<?php 
 		if (isset($_GET['page'])) {
 			if (file_exists($_GET['page'].'.php')) {
 				include $_GET['page'].'.php';
 			}else{
 				include 'home.php';
 			}
 		}else{
 			include 'home.php';
 		 
 		}
 		?>
 		
 	</div>
</body>

<!-- Small modal -->

<div id="pilihdesain" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <div class="modal-body">
        <!-- <input type="text" class="form-control" id="recipient-name"></input> -->
        <div class="row">
        	<div class="col-md-12">
        		<div class="desain-papercraft third-effect">
        		<!-- <img src="images/Desain_MenuUtama1.png" class="banner-img"> -->
        			<div class="mask">
        				<a href="index.php?page=desainpaper" class="banner-label">Papercraft</a>
        			</div>
        		</div>
	        </div>
        </div>
        <div class="row">
        	<div class="col-md-12">
        		<div class="desain-papercraft third-effect">
        		<!-- <img src="images/Desain_MenuUtama1.png" class="banner-img"> -->
        			<div class="mask">
        				<a class="banner-label">Papercraft</a>
        			</div>
        		</div>
	        </div>
        </div>
        <div class="row">
        	<div class="col-md-12">
        		<div class="desain-papercraft third-effect">
        		<!-- <img src="images/Desain_MenuUtama1.png" class="banner-img"> -->
        			<div class="mask">
        				<a class="banner-label">Papercraft</a>
        			</div>
        		</div>
	        </div>
        </div>
	        
	        
        <!-- <div id="rambut"><img src=""></div> -->
        
      </div>

    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
</html>
