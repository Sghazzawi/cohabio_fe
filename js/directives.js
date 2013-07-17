'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('inhabitantEl', function(){
    return {
      restrict: 'C',
      replace: false,
      templateUrl: '/app/partials/inhabitantView.html',
     //template:'<div class="header">{{inhabitant.name}}</div>',
      scope: {
        inhabitant: '=inhabitant'
      }
    };
  })
  .
  directive('taskEl', function() {
    return {
      restrict: 'C',
      replace: false,
      templateUrl: '/app/partials/taskView.html',
      scope: {
        task: '=task'
      }
    };
  }).
  directive('expenseEl', function() {
    return {
      restrict: 'C',
      replace: false,
      templateUrl: '/app/partials/expenseView.html',
      scope: {
        expense: '=expense'
      }
    };
  }).
  directive('residenceEl', function() {
    return {
      restrict: 'C',
      replace: false,
      templateUrl: '/app/partials/residenceView.html',
      scope: {
        residence: '=residence'
      }
    };
  }).
  directive('inhabitantListEl', function(){
    return {
      restrict: 'C',
      replace: false,
      templateUrl: '/app/partials/inhabitantListView.html',
      scope: {
        inhabitantList: '=inhabitantList'
      }
    };
  }).
  directive('taskListEl', function(){
    return {
      restrict: 'C',
      replace: false,
      templateUrl: '/app/partials/taskListView.html',
      scope: {
        taskList: '=taskList'
      }
    };
  }).
  directive('expenseListEl', function(){
    return {
      restrict: 'C',
      replace: false,
      templateUrl: '/app/partials/expenseListView.html',
      scope: {
        expenseList: '=expenseList'
      }
    };
  })
  .directive('residenceListEl',function(){
    return{
      restrict: 'C',
      replace: false,
      templateUrl: '/app/partials/residenceListView.html',
      scope: {
        residenceList: '=residenceList'
      }
    };
  });
