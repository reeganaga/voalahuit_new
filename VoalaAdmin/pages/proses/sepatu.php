<?php
include '../../config/koneksi.php';



    $index=1;
    foreach($_FILES['sh']['name'] as $key => $val){

        $file_ke="sh0".$index;
        $file_ext=strtolower(end(explode('.',$_FILES['sh']['name'][$key])));

        $name = $_FILES['sh']['name'][$key];
        $tmp  = $_FILES['sh']['tmp_name'][$key];
        if(trim($name)!=''){
            
            if ($index==10) {
             $new_name = "sh10.".$file_ext; //rename file
            }else{$new_name = "$file_ke.".$file_ext; }//rename file


            if(move_uploaded_file($tmp,'../../images/sepatu/'.$new_name)){ //proses upload
              echo '<script>window.location = "../../index.php?page=sepatu&msg=success";</script>';
              //echo 'Berhasil mengupload file '.$name.' ke Folder upload<br/>'; //pesan berhasil
            }else{
              echo "file error";
            }
        }

      $index++;
    }