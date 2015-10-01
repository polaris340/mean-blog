/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />

'use strict';
var app = angular.module('BlogApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('main', {
            url: '/',
            controller: 'MainController',
            templateUrl: 'templates/main.html'
        });
    $urlRouterProvider.otherwise('/');
});