angular.module('test').factory('UsuariosResource', function($resource){
    var resource = $resource('rest/usuarios/:UsuariosId',
    							{UsuariosId:'@id'},
    							{	'queryAll':{method:'GET',isArray:true},
    								'query':{method:'GET',isArray:false},
    								'update':{method:'PUT'}
    							}
    						);
    return resource;
});