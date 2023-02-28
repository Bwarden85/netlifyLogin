const app = angular.module("netlifySite", ["ngRoute"]);
const netlifyIdentity = require('netlify-identity-widget');

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "index.html"
        })
        .when("/home", {
            templateUrl: "home.html"
        });


})

app.controller("netlifyCtrl", function ($scope) {
    initUser = netlifyIdentity.currentUser();
    $scope.netlifyIdentity.on('init', () => {
        initUser = netlifyIdentity.currentUser();
    });
    $scope.netlifyIdentity.on('login', () => {
        if (initUser == null) {
            window.location.replace('#!home')
        }
        netlifyIdentity.close();
    });
    $scope.netlifyIdentity.on('logout', () => {
        netlifyIdentity.close();
        window.location.replace('/');
    });
    
});