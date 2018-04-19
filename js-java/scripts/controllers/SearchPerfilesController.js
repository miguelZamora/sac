

angular.module('test').controller('SearchPerfilesController', function($scope,$location,$routeParams, $http,$rootScope, $filter, PerfilesResource ) {

    $scope.search={};
    $scope.currentPage = 0;
    $scope.pageSize= 10;
    $scope.searchResults = [];
    $scope.filteredResults = [];
    $scope.pageRange = [];




            var self                    = this;
            $scope.disabled             = false;
            $scope.$location            = $location;
           
            $scope.searchResults        = [];

/***/

                    
                $scope.perfilesSearch = function() {
                    var successCallback = function(data){
                        $scope.crear = data.crear;
                        $scope.visualizar = data.visual;
                        $scope.actualizar = data.actualizar;
                        $scope.eliminar = data.eliminar;
                    };
                    var errorCallback = function() {
                        flash.setMessage({'type': 'error', 'text': 'No se puede obtener Permisos'});
                    };
                    
                    
             
                    $scope.searchResults = PerfilesResource.queryAll(function(){
                        $scope.filteredResults = $filter('searchFilter')($scope.searchResults, $scope);
                        $scope.total = $scope.filteredResults.length;
                        $scope.currentPage = 1;
                    });
                };
/***/








    $scope.numberOfPages = function() {
        var result = Math.ceil($scope.filteredResults.length/$scope.pageSize);
        var max = (result == 0) ? 1 : result;
        $scope.pageRange = [];
        for(var ctr=0;ctr<max;ctr++) {
            $scope.pageRange.push(ctr);
        }
        return max;
    };

    $scope.userStatusList = [
        "true",
        "false"
    ];

    $scope.performSearch = function() {
        $scope.searchResults = PerfilesResource.queryAll(function(){
            $scope.filteredResults = $filter('searchFilter')($scope.searchResults, $scope);
            $scope.currentPage = 0;
        });
    };
    

    $scope.previous = function() {
       if($scope.currentPage > 0) {
           $scope.currentPage--;
       }
    };
    
    $scope.next = function() {
       if($scope.currentPage < ($scope.numberOfPages() - 1) ) {
           $scope.currentPage++;
       }
    };
    
    $scope.setPage = function(n) {
       $scope.currentPage = n;
    };

    $scope.persona = {};
    //$scope.performSearch();
    
    
    $scope.persona = [{     nombre       : "CHIQUI"             ,
                            apellido     : "DI CUENTI"          ,
                            rol          : "USUARIO"            }   ,
                        {   nombre       :"GOMI"                ,
                            apellido     :"ZAMORA MONTECINOS"   ,
                            rol          :"ADMINISTRADOR"           }
                    ] ;



/*
$scope.$watch('persona', function(newValue, oldValue) {
    // do something with the new or the old value.

            $scope.persona = [  {   nombre       : "Chocobos"           ,
                                apellido     : "DI CUENTI"         ,
                                rol          : "perro "            }    ,
                            {   nombre       :"you"                ,
                                apellido     :"ZAMORA MONTECINOS"  ,
                                rol          :"ADMINISTRAIDOR"           }
                    ] ;  
});





$scope.getidSearch = function() {
        $scope.searchResults = PerfilesResource.queryAll(function(){
            $scope.filteredResults = $filter('searchFilter')($scope.searchResults, $scope);
            $scope.currentPage = 0;
        });
    };

*/


/*
    $scope.persona =  [nombre   : "GOMI1"                   ,
                      apellido  : "ZAMORA1 MONTECINOS1"      ,
                      rol       : "ADMINISTRADOR1"          ];
*/

   

       $scope.perfilesSearch(); 

        

});