<?php 
session_start();
include '../config/db.php';
if (isset($_SESSION['username'])) {
  # code...

if (isset($_POST['ubahstatus'])) {
  //ubah status
  mysql_query("UPDATE pemesanan set status='".$_POST['status']."' ,
                      no_resi='".$_POST['resi']."' where id=".$_POST['id']);
  echo "sukses";
}
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
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- DataTables -->
    <link rel="stylesheet" href="../plugins/datatables/dataTables.bootstrap.css">    
    <!-- Theme style -->
    <link rel="stylesheet" href="../dist/css/AdminLTE.min.css">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="../dist/css/skins/_all-skins.min.css">

    <!-- custom css -->
    <link rel="stylesheet" type="text/css" href="../css/custom.css">
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
              <a href="../index2.html" class="navbar-brand"><b>Quicraft </b>ADMIN</a>
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                <i class="fa fa-bars"></i>
              </button>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Pemesanan <span class="sr-only">(current)</span></a></li>
                <li><a href="#">Customer</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Laporan <span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    <li class="divider"></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
              </ul>
              <form class="navbar-form navbar-left" role="search">
                <div class="form-group">
                  <input type="text" class="form-control" id="navbar-search-input" placeholder="Search">
                </div>
              </form>
            </div><!-- /.navbar-collapse -->
            <!-- Navbar Right Menu -->
              <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                  <!-- Messages: style can be found in dropdown.less-->
                  <li class="dropdown messages-menu">
                    <!-- Menu toggle button -->
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      <i class="fa fa-envelope-o"></i>
                      <span class="label label-success">4</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="header">You have 4 messages</li>
                      <li>
                        <!-- inner menu: contains the messages -->
                        <ul class="menu">
                          <li><!-- start message -->
                            <a href="#">
                              <div class="pull-left">
                                <!-- User Image -->
                                <img src="../dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                              </div>
                              <!-- Message title and timestamp -->
                              <h4>
                                Support Team
                                <small><i class="fa fa-clock-o"></i> 5 mins</small>
                              </h4>
                              <!-- The message -->
                              <p>Why not buy a new awesome theme?</p>
                            </a>
                          </li><!-- end message -->
                        </ul><!-- /.menu -->
                      </li>
                      <li class="footer"><a href="#">See All Messages</a></li>
                    </ul>
                  </li><!-- /.messages-menu -->

                  <!-- Notifications Menu -->
                  <li class="dropdown notifications-menu">
                    <!-- Menu toggle button -->
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      <i class="fa fa-bell-o"></i>
                      <span class="label label-warning">10</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="header">You have 10 notifications</li>
                      <li>
                        <!-- Inner Menu: contains the notifications -->
                        <ul class="menu">
                          <li><!-- start notification -->
                            <a href="#">
                              <i class="fa fa-users text-aqua"></i> 5 new members joined today
                            </a>
                          </li><!-- end notification -->
                        </ul>
                      </li>
                      <li class="footer"><a href="#">View all</a></li>
                    </ul>
                  </li>
                  <!-- Tasks Menu -->
                  <li class="dropdown tasks-menu">
                    <!-- Menu Toggle Button -->
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      <i class="fa fa-flag-o"></i>
                      <span class="label label-danger">9</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="header">You have 9 tasks</li>
                      <li>
                        <!-- Inner menu: contains the tasks -->
                        <ul class="menu">
                          <li><!-- Task item -->
                            <a href="#">
                              <!-- Task title and progress text -->
                              <h3>
                                Design some buttons
                                <small class="pull-right">20%</small>
                              </h3>
                              <!-- The progress bar -->
                              <div class="progress xs">
                                <!-- Change the css width attribute to simulate progress -->
                                <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                  <span class="sr-only">20% Complete</span>
                                </div>
                              </div>
                            </a>
                          </li><!-- end task item -->
                        </ul>
                      </li>
                      <li class="footer">
                        <a href="#">View all tasks</a>
                      </li>
                    </ul>
                  </li>
                  <!-- User Account Menu -->
                  <li class="dropdown user user-menu">
                    <!-- Menu Toggle Button -->
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      <!-- The user image in the navbar-->
                      <img src="../dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                      <!-- hidden-xs hides the username on small devices so only the image appears. -->
                      <span class="hidden-xs">Hi Admin</span>
                    </a>
                    <ul class="dropdown-menu">
                      <!-- The user image in the menu -->
                      <li class="user-header">
                        <img src="../dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                        <p>
                          Admin - Quicraft
                          <small></small>
                        </p>
                      </li>
                      <!-- Menu Body -->
                      <li class="user-body">
                        <div class="col-xs-4 text-center">
                          <a href="#">Followers</a>
                        </div>
                        <div class="col-xs-4 text-center">
                          <a href="#">Sales</a>
                        </div>
                        <div class="col-xs-4 text-center">
                          <a href="#">Friends</a>
                        </div>
                      </li>
                      <!-- Menu Footer-->
                      <li class="user-footer">
                        <div class="pull-left">
                          <a href="#" class="btn btn-default btn-flat">Profile</a>
                        </div>
                        <div class="pull-right">
                          <a href="logout.php" class="btn btn-default btn-flat">Sign out</a>
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
        <div class="container">
          <!-- Content Header (Page header) -->
          <section class="content-header">
            <h1>
              Top Navigation
              <small>Example 2.0</small>
            </h1>
            <ol class="breadcrumb">
              <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
              <li><a href="#">Layout</a></li>
              <li class="active">Top Navigation</li>
            </ol>
          </section>

          <!-- Main content -->
          <?php 
          $ambildata=mysql_query("SELECT * from pemesanan ");
           ?>
          <section class="content">
              <div class="box">
                <div class="box-header">
                  <h3 class="box-title">Data Table With Full Features</h3>
                </div><!-- /.box-header -->
                <div class="box-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Status</th>
                        <th>Token</th>
                        <th>Nama</th>
                        <th>Tanggal</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <?php while ($row=mysql_fetch_array($ambildata)) {
                        # code...
                       ?>
                      <tr>
                        <td><?php echo $row['id']; ?></td>
                        <td><?php 
                        if ($row['status']=='pending') {
                          echo "<div class='label label-warning'>pending</div>";
                        }elseif ($row['status']=='terbayar') {
                          echo "<div class='label label-info'>terbayar</div>";
                        }elseif ($row['status']=='dikerjakan') {
                          echo "<div class='label label-primary'>dikerjakan</div>";
                        }elseif ($row['status']=='dikirim') {
                          echo "<div class='label label-success'>dikirim</div>";
                        }
                         ?></td>
                        <td><?php echo $row['token']; ?></td>
                        <td><?php echo $row['nama']; ?></td>
                        <td><?php echo $row['tgl_pesan']; ?></td>
                        <td>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" 
                        data-whatever="@getbootstrap"
                        data-id     ="<?php echo $row['id']; ?>"
                        data-nama     ="<?php echo $row['nama']; ?>"
                        data-nohp     ="<?php echo $row['no_hp']; ?>"
                        data-email    ="<?php echo $row['email']; ?>"
                        data-alamat   ="<?php echo $row['alamat']; ?>"
                        data-ucapan   ="<?php echo $row['ucapan']; ?>"
                        data-tglpesan ="<?php echo $row['tgl_pesan']; ?>"
                        data-status   ="<?php echo $row['status']; ?>"
                        data-bank     ="<?php echo $row['bank']; ?>"
                        data-bukti    ="<?php echo $row['bukti']; ?>"
                        data-resi    ="<?php echo $row['no_resi']; ?>"
                        <?php 
                        $id_pemesanan=$row['id'];
                        $datapapercraft=mysql_query("SELECT * from pemesanan_papercraft where id_pemesanan=$id_pemesanan");
                        while ($pc=mysql_fetch_array($datapapercraft)) {
                          # code...
                        
                         ?>
                        data-rambut   ="<?php echo $pc['rambut']; ?>"
                        data-mata     ="<?php echo $pc['mata']; ?>"
                        data-hidung   ="<?php echo $pc['hidung']; ?>"
                        data-mulut    ="<?php echo $pc['mulut']; ?>"
                        data-alis     ="<?php echo $pc['alis']; ?>"
                        data-baju     ="<?php echo $pc['baju']; ?>"
                        data-celana   ="<?php echo $pc['celana']; ?>"
                        data-sepatu   ="<?php echo $pc['sepatu']; ?>"
                        data-topi     ="<?php echo $pc['topi']; ?>"
                        data-kacamata ="<?php echo $pc['kacamata'] ?>"
                        data-kulit    ="<?php echo $pc['kulit']; ?>"
                        <?php } ?>
                        >
                        <i class="fa fa-eye"></i>Lihat</a></button>
                      </tr>
                      <?php } ?>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>No</th>
                        <th>Status</th>
                        <th>Token</th>
                        <th>Nama</th>
                        <th>Tanggal</th>
                      </tr>
                    </tfoot>
                  </table>
                </div><!-- /.box-body -->
              </div><!-- /.box -->
          </section><!-- /.content -->

        </div><!-- /.container -->
      </div><!-- /.content-wrapper -->
      <footer class="main-footer">
        <div class="container">
          <div class="pull-right hidden-xs">
            <b>Version</b> 2.3.0
          </div>
          <strong>Copyright &copy; 2014-2015 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights reserved.
        </div><!-- /.container -->
      </footer>
    </div><!-- ./wrapper -->

<!-- start modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Detail Pemesanan</h4>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
            <div class="papercraft-jadi">
                  
                  <div id="base_paper"><img src=""></div>
                  <div id="rambut"><img src=""></div>
                  <!-- <div id="kulit"><img src="images/kulit/h01.png"></div> -->
                  <div id="mata"><img src=""></div>
                  <div id="hidung"><img src=""></div>
                  <div id="mulut"><img src=""></div>
                  <div id="alis"><img src=""></div>
                  <div id="baju"><img src=""></div>
                  <div id="celana"><img src=""></div>
                  <div id="sepatu"><img src=""></div>
                  <div id="topi"><img src=""></div>
                  <div id="kacamata"><img src=""></div> 
                
                </div>
          </div>
          <div class="col-md-6">
            <table class="table">
              <tr>
                <td>Nama</td>
                <td id="nama">isi</td>
              </tr>
              <tr>
                <td>No Hp</td>
                <td id="nohp">isi</td>
              </tr>
              <tr>
                <td>Email</td>
                <td id="email">isi</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td id="alamat">isi</td>
              </tr>
              <tr>
                <td>Ucapan</td>
                <td id="ucapan">isi</td>
              </tr>
              <tr>
                <td>Tgl Pesan</td>
                <td id="tglpesan">isi</td>
              </tr>
              <tr>
                <td>bank</td>
                <td id="bank">isi</td>
              </tr>
              <tr>
                <td>bukti</td>
                <td id="bukti">
                  <a href="" target="_blank">
                    <img src="" class="img-responsive img-thumbnail" >
                  </a>
                </td>
              </tr>
              <tr>
                <td>Status</td>
                <td id="status"></td>
              </tr>
              <tr>
                <td>No Resi</td>
                <td id="resi"></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>
                  <form class="form" method="post" action="">
                    <div class="form-group">
                      <select name="status" class="form-control">
                        <option value="pending">pending</option>
                        <option value="terbayar">terbayar</option>
                        <option value="dikerjakan">dikerjakan</option>
                        <option value="dikirim">dikirim</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <input name="resi" type="text" class="form-control" placeholder="Masukkan no Resi"></input>
                    </div>
                    <div class="form-group">
                      <input class="id_pemesanan" type="hidden" name="id" value=""></input>
                      <input type="submit" name="ubahstatus" value="Ubah Status" class="btn btn-success btn-flat"></input>
                    </div>
                  </form>
                </tr>
              </td>
            </table>
            <hr>
          </div>
        </div>
<!--         <form>
          <div class="form-group">
            <label for="recipient-name" class="control-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="message-text" class="control-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form> -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
<!-- end modal -->
    <!-- jQuery 2.1.4 -->
    <script src="../plugins/jQuery/jQuery-2.1.4.min.js"></script>
    <!-- Bootstrap 3.3.5 -->
    <script src="../bootstrap/js/bootstrap.min.js"></script>
    <!-- DataTables -->
    <script src="../plugins/datatables/jquery.dataTables.min.js"></script>
    <script src="../plugins/datatables/dataTables.bootstrap.min.js"></script>    
    <!-- SlimScroll -->
    <script src="../plugins/slimScroll/jquery.slimscroll.min.js"></script>
    <!-- FastClick -->
    <script src="../plugins/fastclick/fastclick.min.js"></script>
    <!-- AdminLTE App -->
    <script src="../dist/js/app.min.js"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="../dist/js/demo.js"></script>
        <!-- page script -->
    <script>
      $(function () {
        $("#example1").DataTable();
        $('#example2').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": false,
          "ordering": true,
          "info": true,
          "autoWidth": false
        });
      });
    </script>

    <script type="text/javascript">
      $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var id = button.data('id') // Extract info from data-* attributes
        var nama      = button.data('nama')
        var nohp      = button.data('nohp')
        var email     = button.data('email')
        var alamat    = button.data('alamat')
        var ucapan    = button.data('ucapan')
        var tglpesan  = button.data('tglpesan')
        var status    = button.data('status')
        var bank      = button.data('bank')
        var bukti     = button.data('bukti')
        var resi     = button.data('resi')
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        // modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body .id_pemesanan').val(id)
        modal.find('#nama').text(nama)
        modal.find('#nohp').text(nohp)
        modal.find('#email').text(email)
        modal.find('#alamat').text(alamat)
        modal.find('#ucapan').text(ucapan)
        modal.find('#tglpesan').text(tglpesan)
        modal.find('#status').text(status)
        modal.find('#bank').text(bank)
        modal.find('#bukti a').attr('href','../uploads/bukti/'+bukti)
        modal.find('#bukti a img').attr('src','../uploads/bukti/'+bukti)
        modal.find('#resi').text(resi)
        //untuk menampilkan desainpapercraft
        var namaKulit     = button.data('kulit')
        var namaRambut    = button.data('rambut')
        var namaMata      = button.data('mata')
        var namaHidung    = button.data('hidung')
        var namaMulut     = button.data('mulut')
        var namaAlis      = button.data('alis')
        var namaBaju      = button.data('baju')
        var namaCelana    = button.data('celana')
        var namaSepatu    = button.data('sepatu')
        var namaTopi      = button.data('topi')
        var namaKacamata  = button.data('kacamata')

          $('#base_paper img').attr('src', '../images/assets/basePaper-'+namaKulit+'.jpg') 
          $('#rambut img').attr('src', '../images/rambut/'+namaRambut+'.png') 
          $('#mata img').attr('src', '../images/mata/'+namaMata+'.png') 
          $('#hidung img').attr('src', '../images/hidung/'+namaHidung+'.png') 
          $('#mulut img').attr('src', '../images/mulut/'+namaMulut+'.png') 
          $('#alis img').attr('src', '../images/alis/'+namaAlis+'.png') 
          $('#baju img').attr('src', '../images/baju/'+namaBaju+'.png') 
          $('#celana img').attr('src', '../images/celana/'+namaCelana+'.png') 
          $('#sepatu img').attr('src', '../images/sepatu/'+namaSepatu+'.png') 
          $('#topi img').attr('src', '../images/topi/'+namaTopi+'.png') 
          $('#kacamata img').attr('src', '../images/kacamata/'+namaKacamata+'.png')         
        })
    </script>
  </body>
</html>


<?php 
}else{
header('Location:login.php');
}
?>
