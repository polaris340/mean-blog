/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
'use strict';
var app = angular.module('BlogApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
        url: '/',
        controller: 'MainController',
        templateUrl: 'templates/main.html'
    });
    $urlRouterProvider.otherwise('/');
});
app.controller('MainController', ['$scope', function ($scope) {
        $scope.name = "gg";
    }]);
var searchButtonTemplate = "\n<button class=\"menu-button\">\n    <i class=\"icon ion-navicon\"></i>\n</button>\n";
app.directive('menuButton', function () {
    return {
        replace: true,
        restrict: 'E',
        template: searchButtonTemplate
    };
});
var profileButtonTemplate = "\n    <div>\n        <div class=\"image\" style=\"background-image: url('https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10264287_10203579459670010_339350077709153286_n.jpg?oh=8175f2e3ecff41a3239dc147a2763474&oe=56A71752&__gda__=1452010349_8958113b44eb697e456ed4421d0be3a3');\"></div>\n    </div>\n";
app.directive('profileButton', function () {
    return {
        restrict: 'E',
        template: profileButtonTemplate,
        controller: function ($scope, $element, $attrs) {
        }
    };
});
var searchBoxTemplate = "\n    <div>\n        <div class=\"input-box\">\n            <i class=\"icon ion-search\"></i><input type=\"search\" placeholder=\"{{ placeholder }}\" />\n        </div>\n    </div>\n";
app.directive('searchBox', function () {
    return {
        restrict: 'E',
        template: searchBoxTemplate,
        controller: function ($scope, $attrs) {
            $scope.placeholder = $attrs.placeholder;
        }
    };
});
