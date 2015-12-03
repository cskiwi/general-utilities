/**
*/

'use strict';

angular.module('general-utilities-demo').controller('HomeCtrl', function ($scope, $timeout, $rootScope, generalUtilities, Upload) {
	$scope.networkInfo = generalUtilities.networkInfo;
	$scope.deviceInfo = generalUtilities.deviceInfo;

	$scope.$watch('files', function () {
		$scope.upload($scope.files);
	});
	$scope.upload = function (files) {
		if (files && files.length) {
			for (var i = 0; i < files.length; i++) {
				var file = files[i];
				if (!file.$error) {
					Upload.upload({
						url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
						data: {
							stuff: 'otherstuff',
							file: file
						}
					}).progress(function (evt) {
						var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
						$scope.log = 'progress: ' + progressPercentage + '% ' +
						evt.config.data.file.name + '\n' + $scope.log;
					}).success(function (data, status, headers, config) {
						$timeout(function () {
							$scope.log = 'file: ' + config.data.file.name + ', Response: ' + JSON.stringify(data) + '\n' + $scope.log;
						});
					});
				}
			}
		}
	}
});