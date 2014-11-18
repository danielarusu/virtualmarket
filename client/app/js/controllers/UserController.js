MASTERS_APP_MODULE.controller('UserController', [
    '$scope','$window','$location','UserVerificationService', 'UserAuthenticationService',
    function($scope, $window, $location, UserVerificationService, UserAuthenticationService){

        $scope.loginUser = function(username, password){

            if(username != undefined && password != undefined){

                UserAuthenticationService.loginUser(username, password).success(function(data){

                    UserVerificationService.isLogged = true

                }).error(function(status, data){
                    console.log(status);
                    console.log(data);
                });

            }
        }
    }
]);