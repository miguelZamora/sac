angular.module('test').factory('PerfilesResource', function($resource){
    var resource = $resource('../../angularjs/api/public/index.php/users/:perfid',
    				{entExtid:'@perfid'},
    				{	'queryAll' 	: 	{method:'GET',isArray:true},
    					'query' 	: 	{method:'GET',url:'../../angularjs/api/public/index.php/users/:perfid'},
    					'update' 	: 	{method:'PUT'}
   	});
    return resource;
});

