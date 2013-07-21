'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ui.bootstrap']).
  controller('MyCtrl1', ['$scope','$http', 'Residence' ,function($scope, $http, Residence) {
	/**$http({method: 'GET', url: '/Inhabitant/0'}).
	success(function(data, status, headers, config) {
		$scope.inhabitant = data;
	});*/
   $scope.residence = Residence.get({residenceId:0}, function(residence){
    residence.prototype.addTask = function(task){
      this.tasks.push(task);
      this.save();
    };
   });


  }])
  .controller('MyCtrl2', [function() {
  }])
  .controller('CollapseDemoCtrl', ['$scope',function($scope){
	$scope.isCollapsed = true;
  }]);