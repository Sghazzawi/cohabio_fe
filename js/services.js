'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
  factory('Residence',function($resource){
	var residence = $resource('/Residence/:residenceId');
	residence.prototype.addChore = function(chore){
		var Task = $resource('/Residence/:residenceId/Chores/:taskId');
    var task = new Task(chore);
    task.save();
  };
	return residence;
  }).
  value('version', '0.1');
