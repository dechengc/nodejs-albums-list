angular.module('myServices', [])
    .service('myservice', ['$http', function($http) {
        return {
            getAlbums: function($scope) {
                $http({
                    method: 'GET',
                    url: 'http://localhost:3000/api/albums';
                }).success(function(data) {
                    $scope.albums = data.results;
                });
            }
        };
    }]);