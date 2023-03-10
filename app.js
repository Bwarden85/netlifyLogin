const app = angular.module("netlifySite", ["ngRoute"]);
// const netlifyIdentity = ('netlify-identity-widget');*/


app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "test.html"
        })
        .when("/home", {
            templateUrl: "test.html"
        })
        .when("/landing", {
            templateUrl: "landing.html"
        });


});

// app.controller("netlifyCtrl", function ($scope) {
//     let initUser = netlifyIdentity.currentUser();

//     netlifyIdentity.on('init', () => {
//         initUser = netlifyIdentity.currentUser();
//     });

//     netlifyIdentity.on('login', () => {
//         // debugger;

//         // setTimeout(() => {

            
//         // }, 1000);

//         if (initUser == null) {
//             window.location.replace('#!landing')
//         }
//         netlifyIdentity.close();


//     });

//     netlifyIdentity.on('logout', () => {
//         netlifyIdentity.close();
//         window.location.replace('#!');
//     });

// });


app.controller('netlifyCtrl', function ($scope) {

    let initUser = netlifyIdentity.currentUser();
  
    netlifyIdentity.on('init', () => {
      initUser = netlifyIdentity.currentUser();
  
      console.log(initUser);
    });
  
  
    netlifyIdentity.on('login', () => {
      if (initUser == null) {
        window.location.replace('#!landing');
      }
      netlifyIdentity.close();
    });
  
    netlifyIdentity.on('logout', () => {
      netlifyIdentity.close();
      window.location.replace('/');
    });
  
  
  
  });