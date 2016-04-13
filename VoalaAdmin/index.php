<?php
session_start();
include 'config/koneksi.php';
if (isset($_SESSION['username'])) {
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>AdminLTE 2 | Top Navigation</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.5 -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="dist/css/AdminLTE.css">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="dist/css/skins/skin-blue.css">

    <!-- css untuk tooltip -->
    <link rel="stylesheet" href="dist/css/tooltip.css">

    <!-- css font google -->
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Font+Name">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <!-- ADD THE CLASS layout-top-nav TO REMOVE THE SIDEBAR. -->
  <body class="hold-transition skin-blue layout-top-nav">
    <div class="wrapper">

      <header class="main-header">
        <nav class="navbar navbar-static-top">
          <div class="container">
            <div class="navbar-header">
              <a href="index.php" class="navbar-brand"><b>Admin</b>Papercraft</a>
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                <i class="fa fa-bars"></i>
              </button>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
              <ul class="nav navbar-nav">
                
                <li <?php if(isset($_GET['page'])) {if($_GET['page']=='rambut')echo "class='active'";} ?> ><a href="index.php?page=rambut">Rambut</a></li>
                <li <?php if(isset($_GET['page'])) {if($_GET['page']=='mata')echo "class='active'";} ?> ><a href="index.php?page=mata">Mata</a></li>
                <li <?php if(isset($_GET['page'])) {if($_GET['page']=='hidung')echo "class='active'";} ?> ><a href="index.php?page=hidung">Hidung</a></li>
                <li <?php if(isset($_GET['page'])) {if($_GET['page']=='mulut')echo "class='active'";} ?> ><a href="index.php?page=mulut">Mulut</a></li>
                <li <?php if(isset($_GET['page'])) {if($_GET['page']=='alis')echo "class='active'";} ?> ><a href="index.php?page=alis">Alis</a></li>
                <li <?php if(isset($_GET['page'])) {if($_GET['page']=='baju')echo "class='active'";} ?> ><a href="index.php?page=baju">Baju</a></li>
                <li <?php if(isset($_GET['page'])) {if($_GET['page']=='celana')echo "class='active'";} ?> ><a href="index.php?page=celana">Celana</a></li>
                <li <?php if(isset($_GET['page'])) {if($_GET['page']=='sepatu')echo "class='active'";} ?> ><a href="index.php?page=sepatu">Sepatu</a></li>
                <li <?php if(isset($_GET['page'])) {if($_GET['page']=='topi')echo "class='active'";} ?> > <a href="index.php?page=topi">Topi</a></li>
                <li <?php if(isset($_GET['page'])) {if($_GET['page']=='kacamata')echo "class='active'";} ?> ><a href="index.php?page=kacamata">Kacamata</a></li>
                
              </ul>
             
            </div><!-- /.navbar-collapse -->
            <!-- Navbar Right Menu -->
              <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                  
                  <!-- User Account Menu -->
                  <li class="dropdown user user-menu">
                    <!-- Menu Toggle Button -->
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      <!-- The user image in the navbar-->
                      <img src="dist/img/logo.png" class="user-image" alt="User Image">
                      <!-- hidden-xs hides the username on small devices so only the image appears. -->
                      <span class="hidden-xs">Admin</span>
                    </a>
                    <ul class="dropdown-menu">
                      <!-- The user image in the menu -->
                      <li class="user-header">
                        <img src="dist/img/logo.png" class="img-circle" alt="User Image">
                        <p>
                          Hi Admin
                          <small>now <?php echo date("d-M-Y"); ?></small>
                        </p>
                      </li>
                      
                      <!-- Menu Footer-->
                      <li class="user-footer">
                        
                        <div class="text-center">
                          <a href="proses-logout.php" class="btn btn-default btn-flat">Sign out</a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div><!-- /.navbar-custom-menu -->
          </div><!-- /.container-fluid -->
        </nav>
      </header>
      <!-- Full Width Column -->
      <div class="content-wrapper">
        <?php
        if (isset($_GET['page'])) {
          include 'pages/'.$_GET['page'].'.php';
        }else{
          include 'pages/index.php';
        }

        ?>
      </div><!-- /.content-wrapper -->
      <footer class="main-footer">
        <div class="container">
          
          <strong>Copyright &copy; 2015-2016 VoalaHuitGift</a>.</strong> All rights reserved.
        </div><!-- /.container -->
      </footer>
    </div><!-- ./wrapper -->

    <!-- jQuery 2.1.4 -->
    <script src="plugins/jQuery/jQuery-2.1.4.min.js"></script>
    <!-- Bootstrap 3.3.5 -->
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <!-- SlimScroll -->
    <script src="plugins/slimScroll/jquery.slimscroll.min.js"></script>
    <!-- FastClick -->
    <script src="plugins/fastclick/fastclick.min.js"></script>
    <!-- AdminLTE App -->
    <script src="dist/js/app.min.js"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="dist/js/demo.js"></script>
  </body>
</html>

<?php
}else{
  header("location:login.php");
}

?>
