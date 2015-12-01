/*
jshint -W098, -W117, -W030
*/
(function() {
  'use strict';
  describe('Controller: FormentryCtrl ', function() {
      var controller;
      var scope;
      var encService;
      var translate;
      var dialog;
      var location;
      var stateParams;
      var state;
      var formentryService;
      var openmrsRestService;
      var timeout;
      var formsMetaData;
      var mockData;
      var currentLoadedFormService;
      var utilService;
      var loading;
      var personAttributesRestService;
      var anchorScroll;

      beforeEach(function() {
        module('ngAmrsApp');
        module('app.openmrsRestServices');
        module('app.formentry');
        module('mock.data');

      });

      beforeEach(inject(function($controller, $injector, $rootScope) {
        scope = $rootScope.$new();
        translate = $injector.get('$translate');
        dialog = $injector.get('dialogs');
        location = $injector.get('$location');
        stateParams = $injector.get('$stateParams');
        state = $injector.get('$state');
        timeout = $injector.get('$timeout');
        formentryService = $injector.get('FormentryService');
        formsMetaData = $injector.get('FormsMetaData');
        currentLoadedFormService = $injector.get('CurrentLoadedFormService');
        openmrsRestService = $injector.get('OpenmrsRestService');
        mockData = $injector.get('mockData');
        utilService = $injector.get('UtilService');
        loading = $injector.get('$loading');
        personAttributesRestService = $injector.get('PersonAttributesRestService');
        anchorScroll = $injector.get('$anchorScroll');

        controller = $controller('FormentryCtrl', {
          $translate:translate,
          dialogs:dialog,
          $location:location,
          $rootScope:scope,
          $stateParams:stateParams,
          $state:state,
          $scope:scope,
          FormentryService:formentryService,
          OpenmrsRestService:openmrsRestService,
          $timeout:timeout,
          FormsMetaData:formsMetaData,
          CurrentLoadedFormService: currentLoadedFormService,
          UtilService:utilService,
          $loading:loading,
          PersonAttributesRestService:personAttributesRestService,
          $anchorScroll:anchorScroll,
        });

      }));

      describe('Formetry controller unit tests', function() {
        it('should test if tabs test working', function() {
          expect('testing tabs ctr').to.equal('testing tabs ctr');
        });

        it('should test if vm exists', function() {
          expect(scope.vm).to.exist;
          expect(scope.vm).to.be.an('object');
        });

        it('vm.model should exist an object', function() {
          expect(scope.vm.model).to.exist;
          expect(scope.vm.model).to.be.an('object');
        });

        it('vm.submitLabel should exist as a string', function() {
          expect(scope.vm.submitLabel).to.exist;
          expect(scope.vm.submitLabel).to.be.an('string');
        });

        it('vm.tabs should exist as an array object', function() {
          expect(scope.vm.tabs).to.exist;
          expect(scope.vm.tabs).to.be.an('array');
        });

        it('Patient Should exist and be a property of the scope', function() {
          expect(scope.vm).to.have.property('patient');
        });

        it('Should have submit and cancel methods within the controller',
        function() {
          expect(scope.vm.submit).to.exist;
          expect(scope.vm.submit).to.be.an('function');
          expect(scope.vm).to.have.property('submit');
          expect(scope.vm.cancel).to.exist;
          expect(scope.vm.cancel).to.be.an('function');
          expect(scope.vm).to.have.property('cancel');
        });
      });

    });

})();
