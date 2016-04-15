<?php
include '../../config/koneksi.php';



    $index=1;
    foreach($_FILES['pn']['name'] as $key => $val){

        $file_ke="pn0".$index;
        $file_ext=strtolower(end(explode('.',$_FILES['pn']['name'][$key])));

        $name = $_FILES['pn']['name'][$key];
        $tmp  = $_FILES['pn']['tmp_name'][$key];
        if(trim($name)!=''){
            
            if ($index==10) {
             $new_name = "pn10.".$file_ext; //rename file
            }else{$new_name = "$file_ke.".$file_ext; }//rename file


            if(move_uploaded_file($tmp,'../../images/celana/'.$new_name)){ //proses upload
              echo '<script>window.location = "../../index.php?page=celana&msg=success";</script>';
              //echo 'Berhasil mengupload file '.$name.' ke Folder upload<br/>'; //pesan berhasil
            }else{
              echo "file error";
            }
        }

      $index++;
    }

