MASTERS_APP_MODULE.controller('MainController',['$scope','Templates','$location',
    function($scope, Templates, $location){

        $scope.templates = Templates;
//        $scope.navPath = FOLDER_PATH + 'templates/views/partials/header.html';
//        $scope.footerPath = FOLDER_PATH + 'templates/views/partials/footer.html';
//        $scope.homePath = FOLDER_PATH + 'templates/views/home.html';

        $scope.path = function(route){
            $location.path(route);
        }
    }
]);