<?php
namespace App\Modelos;

//importa Eloquent para usarlo en el modelo
use Illuminate\Database\Eloquent\Model as Eloquent;
n
class ModeloUsuario extends Eloquent
{
   // Define la llave primaria de la tabla usuarios
   protected $primaryKey = 'idusuarios_gestordoc';

   // Define el nombre de la tabla 
   protected $table = 'usuarios_gestordoc';
   
     // Define los campos que pueden llenarse en la tabla
   protected $fillable = [
       'nombre',
       'correo',
       'apellidos',
   ];
}