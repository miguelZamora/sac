
angular.module('test').controller('NewUsuariosController', function ($scope, $location, locationParser, flash, UsuariosResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.usuarios = $scope.usuarios || {};
    
    $scope.userStatusList = [
        "true",
        "false"
    ];


    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The usuarios was created successfully.'});
            $location.path('/Usuarios');
        };
        var errorCallback = function(response) {
            if(response && response.data) {
                flash.setMessage({'type': 'error', 'text': response.data.message || response.data}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        UsuariosResource.save($scope.usuarios, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Usuarios");
    };
});