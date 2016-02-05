/*jshint -W003, -W098, -W117, -W026 */
(function () {
    'use strict';

    angular
        .module('ngAmrsApp')
        .directive('etlConnectivity', directive);

    function directive() {
        return {
            template: '<div class="offline-ui  offline-ui-up"></div>',
            restrict: 'EA',
            controller: Controller,
            bindToController: true
        }
    }

    Controller.$inject = ['$scope', 'EtlOfflineService'];

    function Controller($scope,  EtlOfflineService) {
        $scope.offline = false;
        // OfflineService.checkStatus();
        // console.log('offline checker', OfflineService.checkStatus());
        // setInterval(OfflineService.checkStatus(), 5000);
        $scope.$on('offline', function(ev, offline) {
          console.log('offline check', offline);
          $scope.offline = offline?'Offline': 'Online';
          if(!$scope.$$phase) {
            $scope.$digest();
          }
        });

    }
})();
