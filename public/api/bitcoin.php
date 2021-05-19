<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


if($_REQUEST['action']){
    switch ($_REQUEST['action']) {
        case 'getprice':
            $status = true;
            $url = "https://blockchain.info/ticker";
            $api = file_get_contents($url);
            $api = json_decode($api);
            print $api->USD->last;
                
            break;
        
        case 'convert':
                // if($_REQUEST['value'] !== ""){
                // }
                $value = $_REQUEST['value'];
                $url = 'https://blockchain.info/tobstc?currency=USD&value='.$value;
                $api = file_get_contents($url);
                $api = json_decode($api);
                print $api;
            break;
    }    
}

// return json_encode($status, JSON_PRETTY_PRINT);