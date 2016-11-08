'use strict';

describe('Controller: WhoamiCtrl', function () {

  // load the controller's module
  beforeEach(module('palaskaApp'));

  var WhoamiCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhoamiCtrl = $controller('WhoamiCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
