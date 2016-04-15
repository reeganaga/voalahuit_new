<?php
include '../../config/koneksi.php';



    $index=1;
    foreach($_FILES['eb']['name'] as $key => $val){

        $file_ke="eb0".$index;
        $file_ext=strtolower(end(explode('.',$_FILES['eb']['name'][$key])));

        $name = $_FILES['eb']['name'][$key];
        $tmp  = $_FILES['eb']['tmp_name'][$key];
        if(trim($name)!=''){
            
            if ($index==10) {
             $new_name = "eb10.".$file_ext; //rename file
            }else{$new_name = "$file_ke.".$file_ext; }//rename file


            if(move_uploaded_file($tmp,'../../images/alis/'.$new_name)){ //proses upload
              echo '<script>window.location = "../../index.php?page=alis&msg=success";</script>';
              //echo 'Berhasil mengupload file '.$name.' ke Folder upload<br/>'; //pesan berhasil
            }else{
              echo "file error";
            }
        }

      $index++;
    }

