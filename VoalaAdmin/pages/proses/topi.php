<?php
include '../../config/koneksi.php';



    $index=1;
    foreach($_FILES['hat']['name'] as $key => $val){

        $file_ke="hat0".$index;
        //$file_ext=strtolower(end(explode('.',$_FILES['hat']['name'][$key])));

        $name = $_FILES['hat']['name'][$key];
        $tmp  = $_FILES['hat']['tmp_name'][$key];
        if($name!=''){
            
            if ($index==10) {
             $new_name = "hat10.png"; //rename file
            }else{
            $new_name = "$file_ke."."png";
             }//rename file


            if(move_uploaded_file($tmp,'../../images/topi/'.$new_name)){ //proses upload
              echo '<script>window.location = "../../index.php?page=topi&msg=success";</script>';
              //echo 'Berhasil mengupload file '.$name.' ke Folder upload<br/>'; //pesan berhasil
            }else{
              echo "file error";
            }
        }

      $index++;
    }

?>