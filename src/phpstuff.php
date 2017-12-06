<?php
    // A simple PHP script demonstrating how to connect to MySQL.
    // Press the 'Run' button on the top to start the web server,
    // then click the URL that is emitted to the Output tab of the console.
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    //Info to connect to the MySql database
    $servername = getenv('IP');
    $username = getenv('C9_USER');
    $password = "";
    $dbname = "pets3309";
    $dbport = 8082;
    
    // Create connection
    $db = new mysqli($servername, $username, $password, $dbname, $dbport);
    
    // Check connection
    if (!$db) {
        die("Connection failed: " . mysqli_connect_error());
    }
    

    $result = $db->query("SELECT * FROM pets);
    
    $outp = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {x
        if ($outp != "") {$outp .= ",";}
        $outp .= '{"size":"'  . $rs["size"] . '",';
        $outp .= '"rating":"'  . $rs["rating"] . '",';
        $outp .= '"pricing":"'. $rs["pricing"]     . '"}';
    }
$outp ='{"records":['.$outp.']}';
$db->close();

echo($outp);