angular.module('app', []).controller('myCtrl', function($scope, $http){
    $http.get('../data/data.json').then(function (result) {
        $scope.members = result.data;
        console.log('Data loaded successfull');
    });
})

.controller('SomeCtrl', ['$scope', function($scope) {
    $scope.personalDetails = [
        {
            'fname':'Muhammed',
            'lname':'Shanid',
            'email':'shanid@shanid.com'
        },
        {
            'fname':'John',
            'lname':'Abraham',
            'email':'john@john.com'
        },
        {
            'fname':'Roy',
            'lname':'Mathew',
            'email':'roy@roy.com'
        }];

    $scope.addNew = function(personalDetail){
        $scope.personalDetails.push({
            'fname': "",
            'lname': "",
            'email': "",
        });
    };

    $scope.remove = function(){
        var newDataList=[];
        $scope.selectedAll = false;
        angular.forEach($scope.personalDetails, function(selected){
            if(!selected.selected){
                newDataList.push(selected);
            }
        });
        $scope.personalDetails = newDataList;
    };

    $scope.checkAll = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.personalDetails, function(personalDetail) {
            personalDetail.selected = $scope.selectedAll;
        });
    };


}]);