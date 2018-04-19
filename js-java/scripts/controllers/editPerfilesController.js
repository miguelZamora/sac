angular.module('test').controller('EditPerfilesController', 
        function($scope, $routeParams, $location, flash, PerfilesResource, $rootScope ) 
        {

            $rootScope.mostrarPagina    = false;
            var self                    = this;
            $scope.disabled             = false;
            $scope.$location            = $location;
            //$scope.entext               = $scope.entext || {};
            $scope.perfiles                 = $scope.perfiles || {};

            $scope.get = function() 
            {
                var successCallback = function(data)
                    {
                        self.original = data;
                        $scope.perfiles = new PerfilesResource(self.original);
                    };
                
                var errorCallback = function() 
                    {
                        var txt = "";
                        txt = 'Usted no posee permisos para actualizar las entidades externas.';
                        flash.setMessage({'type': 'error', 'text': txt});
                        $location.path("/Perfiles");
                    };
                    PerfilesResource.get({perfid:$routeParams.perfid}, successCallback, errorCallback);
            };


            $scope.save = function() 
            {
                var msg = "";
                if (angular.isUndefined($scope.entext.entExtnom) || $scope.entext.entExtnom == "")
                    {
                        msg = '<p>Debe ingresar el Nombre para La nueva Entidad Externa</p>';
                        $('#modalNotificacionesBody').html(msg);
                        $('#modalNotificaciones').modal('show');
                        return false;
                    }
                
                if (angular.isUndefined($scope.perf.nombre) || $scope.perf.nombre == "")
                    {
                        msg = '<p>Debe ingresar la Descripci\xF3n de la Entidad</p>';
                        $('#modalNotificacionesBody').html(msg);
                        $('#modalNotificaciones').modal('show');
                        return false;
                    }
                

                var successCallback = function()
                    {
                        var txt = "";
                        txt = 'La Entidad se ha actualizado correctamente.';
                        flash.setMessage(   {   'type':'success',
                                                'text':txt}, true);
                        $location.path('/Perfiles');
                    };
                    
                var errorCallback = function(response) 
                    {
                        if(response && response.data && response.data.message) 
                            {
                                flash.setMessage(   {   'type': 'error', 
                                                        'text': response.data.message
                                                    }, true);
                                $location.path('/Perfiles');
                            } 
                        else 
                            {
                                var txt = "";
                                txt += 'Ocurrio un problema. Vuelva a intentar, ';
                                txt += 'o cancelar y comience de nuevo.';
                                
                                flash.setMessage(   {   'type': 'error', 
                                                        'text': txt 
                                                    }, true);
                                $location.path('/Perfiles');
                            }
                    };
                    $scope.perf.$update(successCallback, errorCallback);
            };
            
            $scope.cancel = function() 
                {
                    $location.path("/Perfiles");
                };
                
            $scope.get();
});