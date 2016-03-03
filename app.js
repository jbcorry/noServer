angular.module('noServer', ['ui.router', 'firebase'])
.constant('fb', {
  url: 'https://sizzling-fire-8780.firebaseio.com/'
})
.config(function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/views/home.html',
    controller: 'mainCtrl'
  })

  .state('portfolio', {
    url: '/portfolio',
    templateUrl: '/views/portfolio.html',
    controller: 'portCtrl'
  })

  .state('about', {
    url: '/about-me',
    templateUrl: '/views/about-me.html',
    controller: 'aboutCtrl'
  })

  .state('resume', {
    url: '/resume',
    templateUrl: '/views/resume.html',
    controller: 'resumeCtrl'
  })

  .state('contact', {
    url: '/contact-info',
    templateUrl: '/views/contact.html',
    controller: 'contactCtrl'
  })

  .state('connect4', {
    url: '/connect4',
    templateUrl: '/views/connect4.html',
    controller: 'connect4Ctrl',

  })

  // .state('players', {
  //   url: '/connect4',
  //   templateUrl: '/views/players.html',
  //   controller: 'nameCtrl',
  //   resolve: {
  //     namesRef: function(nameSvc) {
  //       return nameSvc.getNames();
  //   },
  // }
  // })
})
