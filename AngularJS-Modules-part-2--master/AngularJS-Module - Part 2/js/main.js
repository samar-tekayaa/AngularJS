var app = angular.module("MyApp",[]);

app.controller("myCtr",function ($scope) {
	$scope.personnes=[{name:'samar', age:'21 ans'},
					  {name:'azza' , age:'24 ans'}];
	
});