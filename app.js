/**
@toc
1. setup - whitelist, appPath, html5Mode
*/

'use strict';

angular.module('general-utilities-demo', [
'ngRoute', 'ngSanitize', 'ngTouch', 'ngCordova',		//additional angular modules
'cskiwi.general-utilities'
]).
config(function ($routeProvider, $locationProvider, $compileProvider) {
    /**
	setup - whitelist, appPath, html5Mode
	@toc 1.
	*/
    $locationProvider.html5Mode(false);		//can't use this with github pages / if don't have access to the server

    // var staticPath ='/';
    var staticPath;
    // staticPath ='/angular-services/general-utilities/';		//local
    // staticPath ='/';		//nodejs (local)
    staticPath = '/general-utilities/';		//gh-pages
    var appPathRoute = '/';
    var pagesPath = staticPath + 'pages/';


    $routeProvider.when(appPathRoute + 'home', { templateUrl: pagesPath + 'home/home.html' });

    $routeProvider.otherwise({ redirectTo: appPathRoute + 'home' });

});