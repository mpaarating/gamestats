'use strict';

describe('Controller: AddGameCtrl', function () {

  // load the controller's module
  beforeEach(module('gameStats'));

  var AddGameCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddGameCtrl = $controller('AddGameCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
