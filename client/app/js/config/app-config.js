CONFIG_MODULE
    .config(['$locationProvider', '$routeProvider', 'TemplatesProvider',
        function($locationProvider, $routeProvider, TemplatesProvider){

            $routeProvider
                .when('/', {
                    //templateUrl: TemplatesProvider.$get().empty
                    templateUrl: 'templates/views/home.html',
                    controller: 'MainController',
                    requireLogin: false
                })
                .when('/login', {
                    //templateUrl: TemplatesProvider.$get().empty
                    templateUrl: 'templates/views/login.html',
                    controller: 'UserController',
                    requireLogin: false
                })
                .when('/signup',{
                    templateUrl: 'templates/views/login.html',
                    controller: 'UserController',
                    requireLogin: false
                })
                .otherwise({
                    redirectTo: '/',
                    templateUrl: 'templates/view/home.html',
                    controller: 'MainController'
                })

            $locationProvider.html5Mode(true);
    }])

    .config(['$httpProvider', function($httpProvider){
        $httpProvider.interceptors.push('TokenInterceptor');
    }])