<!DOCTYPE html>
<html>
<head>
	<title>Voala Huit</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/custom.css">
	<link rel="stylesheet" type="text/css" href="css/animate.css">

	<!-- google font -->
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Tangerine">

	<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
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
		<img src="images/Desain_MenuUtama1.png" class="header animated bounceInDown">
		<div class="header-content">
			<div class="info-header">
				<ul class="menu-top">
					<a href="#"><li class="bg-tosca">aaaaa</li></a>
					<a href="#"><li class="bg-red">aaaaa</li></a>
					<a href="#"><li class="bg-navy">aaaaa</li></a>
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
</html>
