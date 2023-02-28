const app = angular.module("netlifySite", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'index.html'
        })
        .when("/home", {
            templateUrl: 'home.html'
        });


})

app.controller("netlifyCtrl", function ($scope) {

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