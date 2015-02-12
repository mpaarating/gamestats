(function(){
'use strict';

function NavbarCtrl ($scope, $location, Auth) {
  this.$scope = $scope;
  this.$location = $location;
  this.Auth = Auth;

  this.menu = [
        {
          'title': 'All Games',
          'link': '/all-games',
          'show': 'nav.isLoggedIn() && !nav.isAdmin()'
        },
        {
          'title': 'Add Game',
          'link': '/add-game',
          'show': 'nav.isLoggedIn() && !nav.isAdmin()'
        },
        {
          'title': 'Admin',
          'link': '/admin',
          'show': 'nav.isAdmin()'
        }
      ];

      this.isCollapsed = true;
}
NavbarCtrl.prototype.logout = function() {
  this.Auth.logout();
  this.$location.path('/login');
};

NavbarCtrl.prototype.isActive = function(route) {
  return route === this.$location.path();
};

NavbarCtrl.prototype.isLoggedIn = function() {
  return this.Auth.isLoggedIn();
};

NavbarCtrl.prototype.isAdmin = function() {
  return this.Auth.isAdmin();
};

NavbarCtrl.prototype.getCurrentUser = function() {
  return this.Auth.getCurrentUser();
};

angular.module('gameStats')
.controller('NavbarCtrl', ['$scope', '$location', 'Auth', NavbarCtrl]);
  
})();