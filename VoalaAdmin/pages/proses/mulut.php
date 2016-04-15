<?php
include '../../config/koneksi.php';



    $index=1;
    foreach($_FILES['m']['name'] as $key => $val){

        $file_ke="m0".$index;
        $file_ext=strtolower(end(explode('.',$_FILES['m']['name'][$key])));

        $name = $_FILES['m']['name'][$key];
        $tmp  = $_FILES['m']['tmp_name'][$key];
        if(trim($name)!=''){
            
            if ($index==10) {
             $new_name = "m10.".$file_ext; //rename file
            }else{$new_name = "$file_ke.".$file_ext; }//rename file


            if(move_uploaded_file($tmp,'../../images/mulut/'.$new_name)){ //proses upload
              echo '<script>window.location = "../../index.php?page=mulut&msg=success";</script>';
              //echo 'Berhasil mengupload file '.$name.' ke Folder upload<br/>'; //pesan berhasil
            }else{
              echo '<script>window.location = "../../index.php?page=mulut&msg=fail";</script>';
            }
        }

      $index++;
    }



