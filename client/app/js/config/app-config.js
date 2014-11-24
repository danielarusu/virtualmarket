CONFIG_MODULE
    .config(['$locationProvider', '$routeProvider', 'TemplatesProvider',
        function($locationProvider, $routeProvider, TemplatesProvider){

            $routeProvider.when('/', {
                //templateUrl: TemplatesProvider.$get().empty
                templateUrl: '../../templates/views/home.html',
                controller: 'MainController'
            });
}]);