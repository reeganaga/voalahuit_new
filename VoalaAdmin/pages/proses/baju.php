<?php
include '../../config/koneksi.php';



    $index=1;
    foreach($_FILES['cl']['name'] as $key => $val){

        $file_ke="cl0".$index;
        $file_ext=strtolower(end(explode('.',$_FILES['cl']['name'][$key])));

        $name = $_FILES['cl']['name'][$key];
        $tmp  = $_FILES['cl']['tmp_name'][$key];
        if(trim($name)!=''){
            
            if ($index==10) {
             $new_name = "cl10.".$file_ext; //rename file
            }else{$new_name = "$file_ke.".$file_ext; }//rename file


            if(move_uploaded_file($tmp,'../../images/baju/'.$new_name)){ //proses upload
              echo '<script>window.location = "../../index.php?page=baju&msg=success";</script>';
              //echo 'Berhasil mengupload file '.$name.' ke Folder upload<br/>'; //pesan berhasil
            }else{
              echo "file error";
            }
        }

      $index++;
    }

