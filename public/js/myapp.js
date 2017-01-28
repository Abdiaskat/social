angular.module('app', []).controller('myCtrl', function($scope, $http){
    $http.get('../data/data.json').then(function (result) {
        $scope.members = result.data;
        console.log('Data loaded successfull');
    });
});