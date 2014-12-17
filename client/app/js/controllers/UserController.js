MASTERS_APP_MODULE.controller('UserController', [
    '$scope','$window','$location','UserVerificationService', 'UserAuthenticationService',
    function($scope, $window, $location, UserVerificationService, UserAuthenticationService){

        $scope.loginUser = function(username, password){

            if(username != undefined && password != undefined){

                UserAuthenticationService.loginUser(username, password).success(function(data){

                    UserVerificationService.isLogged = true;
                    $window.sessionStorage.token = data.token;
                    $location.path('/login');

                }).error(function(message, data){
                    console.log(message);
                    console.log(data);
                });

            }
        }

        $scope.logoutUser = function(){

            if(UserVerificationService.isLogged){

                UserVerificationService.isLogged = false;

                delete $window.sessionStorage.token;
                $location.path('/');
            }
        }
    }
]);