var app = angular.module("MyApp",[]);

app.controller("myCtr",function ($scope) {
	$scope.personnes=[{name:'Samar Tekaya', job:'licence informatique'},
					  {name:'Nadim Gouia' , job:'Developpeur android'},
					  {name:'Kods Cherif' , job:'Ingenieur informatique'}];
	
});