<?php
    
    $username = isset($_GET['username'])?$_GET['username']:NULL;

    $userlist = array('a','b','c','d');

    if(in_array($username,$userlist)){

        echo "no";
    
    }else{

        echo "yes";
    }
?>