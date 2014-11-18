MASTERS_APP_MODULE
    .factory('UserVerificationService',function(){
       var auth =  {
           isLogged: false
       }
       return auth;
    })

    .factory('UserAuthenticationService', function($http){
        return{
            loginUser: function(username, password){
                return $http.post({username: username, password: password})
            },
            logoutUser: function(){}
        }
    })