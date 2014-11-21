MASTERS_APP_MODULE.controller('MainController',['$scope',
    function($scope){
        $scope.navPath = FOLDER_PATH + 'templates/views/partials/header.html';
        $scope.footerPath = FOLDER_PATH + 'templates/views/partials/footer.html';
        $scope.homePath = FOLDER_PATH + 'templates/views/home.html';
    }
]);