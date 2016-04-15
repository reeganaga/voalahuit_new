<?php

/*yang ci copy*/
// ambil data dari database
$query1="select * from sepatu";
$aksi1=mysql_query($query1);
?>

<div class="container">
          <!-- Content Header (Page header) -->
          <section class="content-header">
            <h1>
              sepatu
              <small>browse sesuai gambar yang ingin di update</small>
            </h1>
            
          </section>

          <!-- Main content -->
          <section class="content">
            <!-- left column -->
            <div class="col-md-6">
              <!-- general form elements -->
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Form Sepatu</h3>
                </div><!-- /.box-header -->

                <?php
                if (isset($_GET['msg'])) {
                  $msg=$_GET['msg'];
                  if ($msg=='success') {
                     echo '
                    <div class="box-body">
                    <div class="alert alert-success alert-dismissable">
                      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                      <h4>  <i class="icon fa fa-check"></i> Sukses!</h4>
                     Data sudah berhasil Disimpan
                    </div>
                    </div>
                    ';
                  }elseif ($msg=='fail') {
                    echo '
                    <div class="box-body">
                    <div class="alert alert-warning alert-dismissable">
                      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                      <h4>  <i class="icon fa fa-check"></i> Gagal!</h4>
                     Data sudah berhasil Disimpan, isi form terlebih dahulu
                    </div>
                    </div>
                    ';
                  }
                 
                }
                ?>
                <!-- form start -->
                <form role="form" method="post" enctype="multipart/form-data" action="pages/proses/sepatu.php">
                  <div class="box-body">
                    
                    <?php for ($i=1; $i <= 10; $i++) { 
                      # code...
                    ?>
                    <div class="form-group">
                      <label for="exampleInputFile">SH<?php echo $i; ?></label>
                      <input type="file" name="sh[]" class="form-control"  id="exampleInputFile">
                    </div>
                    <?php } ?>
                    
                   
                    
                  </div><!-- /.box-body -->

                  <div class="box-footer">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </form>

              </div><!-- /.box -->

            </div><!--/.col (left) -->

            <!-- right column -->
            <div class="col-md-6">
              <!-- general form elements -->
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Preview Sepatu</h3>
                </div><!-- /.box-header -->

                  <!-- picture thumbnail start -->
                    <div class='row margin-bottom'>
                        
                          <?php

                          /*yang di copy*/
                          $baris=1;
                          while ($row1=mysql_fetch_array($aksi1)) {
                           echo '
                           <div class="col-sm-6">
                           <div class="wrapper-tooltip">
                            <img class="img-responsive" src="images/sepatu/'.$row1['nama_sepatu'].' " alt="Photo">
                            <div class="tooltip">'.$row1['nama_sepatu'].'</div>
                          </div>
                          </div><!-- /.col -->
                          
                           ';
                           $baris++;
                          }
                          ?>
                          
                        
                    </div><!-- /.row -->
              </div><!-- /.box -->

            </div><!--/.col (kanan) -->

          </section><!-- /.content -->
        </div><!-- /.container -->