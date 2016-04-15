<?php
include '../../config/koneksi.php';



    $index=1;
    foreach($_FILES['h']['name'] as $key => $val){

        $file_ke="h0".$index;
        //$file_ext=strtolower(end(explode('.',$_FILES['h']['name'][$key])));

        $name = $_FILES['h']['name'][$key];
        $tmp  = $_FILES['h']['tmp_name'][$key];
        if($name!=''){
            
            if ($index==10) {
             $new_name = "h10.png"; //rename file
            }else{
            $new_name = "$file_ke."."png";
             }//rename file


            if(move_uploaded_file($tmp,'../../images/rambut/'.$new_name)){ //proses upload
              echo '<script>window.location = "../../index.php?page=rambut&msg=success";</script>';
              //echo 'Berhasil mengupload file '.$name.' ke Folder upload<br/>'; //pesan berhasil
            }else{
              echo "file error";
            }
        }

      $index++;
    }

?>