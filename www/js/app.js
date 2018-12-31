// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngMaterial'])
  .config(['$compileProvider', function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|sms|tel|navto):/);
  }])
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs).
      // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
      // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
      // useful especially with forms, though we would prefer giving the user a little more room
      // to interact with the app.
      if (window.cordova && window.Keyboard) {
        // window.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        // Set the statusbar to use the default style, tweak this to
        // remove the status bar on iOS or change it to use white instead of dark colors.
        StatusBar.styleDefault();
        StatusBar.overlaysWebView(false);
        StatusBar.styleLightContent();
        StatusBar.backgroundColorByHexString('#2c1a92'); //Status Bar Background Color
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.views.swipeBackEnabled(false);
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })
      /* Community Tab */
      .state('tab.community', {
        url: '/community',
        views: {
          'tab-community': {
            templateUrl: 'templates/tab-community.html',
            controller: 'CommunityCtrl'
          }
        }
      })
      /* Grower Enquiry */
      .state('growerEnquiry', {
        url: '/growerEnquiry',
        templateUrl: 'templates/grower-enquiry.html',
        controller: 'growerEnquiryCtrl'
      })
      /* Retailer Enquiry Screen */
      .state('retailerEnquiry', {
        url: '/retailerEnquiry',
        templateUrl: 'templates/retailer-enquiry.html',
        controller: 'retailerEnquiryCtrl'
      })

      /* Library Tab */
      .state('tab.library', {
        url: '/library',
        views: {
          'tab-library': {
            templateUrl: 'templates/tab-library.html',
            controller: 'LibraryCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })
      /* Registration Screen */
      .state('registration', {
        url: '/registration',
        templateUrl: 'templates/registration.html',
        controller: 'RegistrationCtrl'
      })
      /* Profile Screen */
      .state('profile', {
        url: '/profile',
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      })
      /* Settings Screen */
      .state('settings', {
        url: '/settings',
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      })

      .state('detailsPage', {
        url: '/detailsPage',
        templateUrl: 'templates/detailsPage.html'
      });

    // if none of the above states are matched, use this as the fallback Dashboard (tab-dash.html)
    $urlRouterProvider.otherwise('/tab/dash');

  });
