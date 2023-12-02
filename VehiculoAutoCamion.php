<?php


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

sleep(3);

if($method == "GET") {
    echo '[{"id":1,"modelo":"Fiat 100","anoFabricacion":1987,"velMax":60,"cantidadPuertas":4,"asientos":4},{"id":2,"modelo":"Ford Mustang","anoFabricacion":1960,"velMax":100,"cantidadPuertas":2,"asientos":2},{"id":3,"modelo":"Ferrary F100","anoFabricacion":1999,"velMax":200,"cantidadPuertas":2,"asientos":2},{"id":4,"modelo":"Escania","anoFabricacion":1987,"velMax":60,"carga":5550,"autonomia":300},{"id":5,"modelo":"Dodge Ram","anoFabricacion":1970,"velMax":100,"carga":2333,"autonomia":400},{"id":666,"modelo":"Chevy Silverado","anoFabricacion":1994,"velMax":80,"carga":1000,"autonomia":450}]';
    die();
}

if($method == "DELETE") {
    $objeto = json_decode(file_get_contents('php://input'), true);

    if (isset($objeto['id'])==false || $objeto['id'] == 666 || $objeto['id'] == "666") {
        http_response_code(400);
        echo "Error No se pudo procesar";
        die();
    }
    
    echo "Exito";
    die();
}


if($method == "POST") {
    $objeto = json_decode(file_get_contents('php://input'), true);

    $estJugador=1;
    $estProfesional=1;

    if (isset($objeto['id'])==false || isset($objeto['modelo'])==false || isset($objeto['anoFabricacion'])==false || isset($objeto['velMax'])==false || isset($objeto['cantidadPuertas'])==false || isset($objeto['asientos'])==false )   {
        $estJugador=0;
    }

    if (isset($objeto['id'])==false || isset($objeto['modelo'])==false || isset($objeto['anoFabricacion'])==false || isset($objeto['velMax'])==false || isset($objeto['carga'])==false || isset($objeto['autonomia'])==false  )   {
        $estProfesional=0;
    }

    if ($estJugador==0 && $estProfesional==0){
        http_response_code(400);
        echo "Estructura Incorrecta";
        die();
    }
    
    
    if ($objeto['id']==666) {
        http_response_code(400);
        echo "Error No se pudo procesar";
        die();
    }
    
    echo "Exito";
    die();
}


if($method == "PUT") {
    $objeto = json_decode(file_get_contents('php://input'), true);
    $estJugador=1;
    $estProfesional=1;

    if (isset($objeto['modelo'])==false || isset($objeto['anoFabricacion'])==false || isset($objeto['velMax'])==false || isset($objeto['cantidadPuertas'])==false || isset($objeto['asientos'])==false )   {
        $estJugador=0;
    }

    if (isset($objeto['modelo'])==false || isset($objeto['anoFabricacion'])==false || isset($objeto['velMax'])==false || isset($objeto['carga'])==false || isset($objeto['autonomia'])==false  )   {
        $estProfesional=0;
    }
   
    if ($estJugador==0 && $estProfesional==0){
        http_response_code(400);
    //    $s=$objeto['nombre']. $objeto['apellido'].$objeto['edad'].$objeto['titulo'].$objeto['facultad'].$objeto['anoGraduacion']; 
        echo "Estructura Incorrecta";
        die();
    }

    $s = (string)time();
    echo '{"id":' . $s . "}";
    die();
}

?>