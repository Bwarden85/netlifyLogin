const app = angular.module('netlifysite', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'index.html'
        })
        .when("/home", {
            templateUrl: 'home.html'
        })
        .when("/contact", {
            templateUrl: 'contact.html'
        });

})

app.controller("netlifyCtrl", function ($scope) {

    netlifyIdentity.on('init', () => {
        initUser = netlifyIdentity.currentUser();
    });
    netlifyIdentity.on('login', () => {
        if (initUser == null) {
            window.location.replace('#!home')
        }
        netlifyIdentity.close();
    });
    netlifyIdentity.on('logout', () => {
        netlifyIdentity.close();
        window.location.replace('#!');
    });
    
});