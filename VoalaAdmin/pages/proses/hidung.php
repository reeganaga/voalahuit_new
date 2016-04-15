<?php
include '../../config/koneksi.php';



    $index=1;
    foreach($_FILES['n']['name'] as $key => $val){

        $file_ke="n0".$index;
        $file_ext=strtolower(end(explode('.',$_FILES['n']['name'][$key])));

        $name = $_FILES['n']['name'][$key];
        $tmp  = $_FILES['n']['tmp_name'][$key];
        if(trim($name)!=''){
            
            if ($index==10) {
             $new_name = "n10.".$file_ext; //rename file
            }else{$new_name = "$file_ke.".$file_ext; }//rename file


            if(move_uploaded_file($tmp,'../../images/hidung/'.$new_name)){ //proses upload
              echo '<script>window.location = "../../index.php?page=hidung&msg=success";</script>';
              //echo 'Berhasil mengupload file '.$name.' ke Folder upload<br/>'; //pesan berhasil
            }else{
              echo "file error";
            }
        }

      $index++;
    }

