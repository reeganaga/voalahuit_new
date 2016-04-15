<?php
include '../../config/koneksi.php';



    $index=1;
    foreach($_FILES['e']['name'] as $key => $val){

        $file_ke="e0".$index;
        $file_ext=strtolower(end(explode('.',$_FILES['e']['name'][$key])));

        $name = $_FILES['e']['name'][$key];
        $tmp  = $_FILES['e']['tmp_name'][$key];
        if(trim($name)!=''){
            
            if ($index==10) {
             $new_name = "e10.".$file_ext; //rename file
            }else{$new_name = "$file_ke.".$file_ext; }//rename file


            if(move_uploaded_file($tmp,'../../images/mata/'.$new_name)){ //proses upload
              echo '<script>window.location = "../../index.php?page=mata&msg=success";</script>';
              //echo 'Berhasil mengupload file '.$name.' ke Folder upload<br/>'; //pesan berhasil
            }else{
              echo "file error";
            }
        }

      $index++;
    }