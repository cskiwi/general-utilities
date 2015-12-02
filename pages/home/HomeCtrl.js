/**
*/

'use strict';

angular.module('general-utilities-demo').controller('HomeCtrl', function ($scope, $rootScope, cskiwiUtilities) {
    $scope.networkInfo = cskiwiUtilities.networkInfo;
    $scope.deviceInfo = cskiwiUtilities.deviceInfo;
});