'use strict';
var app = angular.module('BlogApp', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'TimelineController',
            templateUrl: 'views/timeline.html'
        });
});