(function() {
'use strict';

angular.module('gameStats')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addGame', {
        url: '/addGame',
        templateUrl: 'app/addGame/addGame.html',
        controller: 'AddGameCtrl',
        controllerAs: 'addGame'
      });
  });

})();