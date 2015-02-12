'use strict';

angular.module('gameStats')
  .config(function ($stateProvider) {
    $stateProvider
      .state('all-games', {
        url: '/all-games',
        templateUrl: 'app/allGames/allGames.html',
        controller: 'AllGamesCtrl',
        controllerAs: 'allGames'
      });
  });