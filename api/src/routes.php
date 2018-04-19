<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes


// mysql config

//$db = $this->get('db');


$db = new mysqli('localhost', 'root', 'C123.,', 'gestor_documental');

//$rows = $db->table('usuarios_gestordoc')->get()->toArray();



/*$container['logger'] = function($c) {
    $logger = new \Monolog\Logger('my_logger');
    $file_handler = new \Monolog\Handler\StreamHandler("../logs/app.log");
    $logger->pushHandler($file_handler);
    return $logger;
};*/



$app->get('/', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});


$app->get('/users', function () use($db, $app) {
 
            $select = $db->query("select * from usuarios_gestordoc");

          //  return $select;

            $users=array();
            while($fila=$select->fetch_assoc()){
                $users[]=$fila;
            }
 			print_r(json_encode($users));
 			//die;
            //echo json_encode($select->fetch_assoc());
        });
 



$app->get('/users/{id}', function ($req, $res, $args) use($db, $app) {
            
            $select = $db->query("select * from usuarios_gestordoc where idusuarios_gestordoc=" . $args['id'].";");
            $users=array();
            while($fila=$select->fetch_assoc()){
                $users[]=$fila;
            }
 			print_r(json_encode($users));
        });


$app->get('/test', function () {

	$str = 'Hello Users';


    return $str;//$this->renderer->render( $str );
});
    

$app->get('/test/[{name}]', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'test.phtml', $args);
});
