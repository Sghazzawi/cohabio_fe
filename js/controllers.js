'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope','$http',function($scope, $http) {
	$http({method: 'GET', url: '/Inhabitant/0'}).
	success(function(data, status, headers, config) {
		$scope.inhabitant = data;
	});

  }])
  .controller('MyCtrl2', [function() {
  }])
  .controller('CollapseDemoCtrl', ['$scope',function($scope){
	$scope.isCollapsed = true;
  }]);