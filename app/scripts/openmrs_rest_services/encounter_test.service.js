/*jshint -W003, -W098, -W117, -W026 */
(function() {
    'use strict';

    angular
        .module('OpenmrsRestServices')
        .factory('EncounterService', EncounterService);

    EncounterService.$inject = ['$resource', 'OpenmrsSettings'];

    function EncounterService($resource, settings) {
        var service = {
            postEncounter: postEncounter,
            getEncounter: getEncounter,
            getPatientEncounter: getPatientEncounter
        };

        return service;

        function getResource() {
          var v = 'custom:(uuid,encounterDatetime,patient:(uuid,uuid),form:(uuid,name),location:ref';
              v += ',encounterType:ref,provider:ref,obs:(uuid,concept:ref,value:ref,groupMembers))';

              var r = $resource(settings.getCurrentRestUrlBase() + 'encounter/:uuid',
                    {uuid: '@uuid', v: v},
                    {query: {method: 'GET', isArray: false}});
              return r;

            }

        function getPatientEncounter(params, callback)
        {
          var v = 'custom:(uuid,encounterDatetime,patient:(uuid,uuid),form:(uuid,name),location:ref';
              v += ',encounterType:ref,provider:ref)';

          params.v = v;
          var EncounterRes = getResource();
          EncounterRes.query(params, false, function(data) {
            console.log('List of patient Encounters');
            var results=data.results;
            //sort encounters in dessending order
            var sortedList = _.sortBy(results, function(item){
              return - item.encounterDatetime;
            })
            console.log(sortedList);
            callback(sortedList);
          });

        }

        function getEncounter(params, callback) {
          // body...
          var EncounterRes = getResource();

          EncounterRes.get(params,
            function (data) {
              //var d = new Patient(data);
              callback(data);
            }
          );
        }

        function postEncounter(encounter, callback) {
          getResource().save(encounter,function(data){
                  callback(data);
                  console.log(data);
                  });
        }
    }
})();