MASTERS_APP_MODULE
    .factory('UserVerificationService',function(){
       var auth =  {
           isLogged: false,
           isAdmin: false
       }
       return auth;
    })

    .factory('UserAuthenticationService', function($http){
        return{
            loginUser: function(username, password){
                return $http.post(options.api.base_url + '/login', {username: username, password: password})
            },

            logoutUser: function(){
                return $http.get(options.api.base_url + '/');
            },

            registerUser: function(username, password, confirmPassword){
                return $http.post(options.api.base_url + '/signup', {username: username, password: password, confirmPassword: confirmPassword});
            }
        }
    })

    .factory('TokenInterceptor', function($q, $window, $location, UserVerificationService){
        return{
            request: function(request){
                request.headers = request.headers || {};

                if($window.sessionStorage.token){
                    request.headers.Authorisation = 'Bearer ' + $window.sessionStorage.token;
                }

                return request;
            },

            requestErr: function(err){
                return $q.reject(err);
            },

            response: function(response){
                if(response != null && response.status == 200 && $window.sessionStorage.token && !UserVerificationService.isLogged){
                    UserVerificationService.isLogged = true;
                }

                return response || $q.when(response);
            },

            responseErr: function(err){
                if(err != null && err.status == 401 && ($window.sessionStorage.token || UserVerificationService.isLogged)){

                    UserVerificationService.isLogged = false;
                    $location.path('/login');
                }

                return $q.reject(err);
            }

        }

    })