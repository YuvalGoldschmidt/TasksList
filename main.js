$(document).ready(function(){
	var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope, $timeout){
		$scope.tasks = [
			{
				name: 'Clean the room',
				star: false
			},
			{
				name: 'Run',
				star: false
			},
			{
				name: 'Make foods',
				star: false
			},
			{
				name: 'Clean the room',
				star: false
			},
			{
				name: 'Run',
				star: false
			},
			{
				name: 'Make foods',
				star: false
			},
			{
				name: 'Clean the room',
				star: false
			},
			{
				name: 'Run',
				star: false
			},
			{
				name: 'Make foods',
				star: false
			}
		];

		$scope.removeTask = function(index){
			$scope.tasks.splice(index, 1);
		};

		$scope.changeTask = function(index){
			if($scope.tasks[index].name == ""){
				$scope.tasks.splice(index, 1);
			}
		};

		$scope.addTask = function(){
			var newTask = {
				name: '',
				star: false
			};
			$scope.tasks.unshift(newTask);
			var stars = 0;
			for(var i = 0; i < $scope.tasks.length; i++){
				if($scope.tasks[i].star) stars++;
			};
			$timeout(function(){
				$('div#tasks').find('input.task-name:eq(' + stars + ')').focus();
			}, 1);
		}
	});
});