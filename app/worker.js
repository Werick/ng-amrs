(function(global) {
  'use strict';

  //replace array with pre-fetch-list surrounded by {} and run 'grunt pre-fetch' to regenerate array
  var preFetchList = ['/bahmni/images/spinner.gif', '/scripts/formentry/formentry.module.js', '/scripts/formentry/controllers/formentry.controller.js', '/bahmni/home/index.html', '/scripts/formentry/services/formentry.service.js', '/bahmni/home/views/login.html', '/scripts/formentry/servicessearch-data.service.js', '/scripts/formentry/services/formsmetadata.service.js', '/scripts/formentry/services/form-validator.service.js', '/scripts/formentry/services/current-loaded-form.service.js', '/scripts/formentry/directives/error-summary-directive.js', '/scripts/formentry/directives/openmrs-forms.directive.js', '/scripts/openmrs-rest-services/concept.service.js', '/scripts/openmrs-rest-services/drug.service.js', '/scripts/openmrs-rest-services/encounter.service.js', '/scripts/openmrs-rest-services/location.service.js', '/scripts/openmrs-rest-services/obs.service.js', '/scripts/openmrs-rest-services/openmrs-form.service.js', '/scripts/openmrs-rest-services/identifier.service.js', '/scripts/openmrs-rest-services/openmrs-patient.service.js', '/scripts/openmrs-rest-services/openmrs-rest-services.module.js', '/scripts/openmrs-rest-services/openmrs-rest.service.js', '/scripts/openmrs-rest-services/openmrs-settings.service.js', '/scripts/openmrs-rest-services/person-attribute.service.js', '/scripts/openmrs-rest-services/provider.service.js', '/scripts/openmrs-rest-services/session.service.js', '/scripts/openmrs-rest-services/user.service.js', '/scripts/openmrs-rest-services/visit.service.js', '/scripts/openmrs-rest-services/user-default-properties.service.js'];

  var configs = [
        '/bahmni_config/openmrs/apps/customDisplayControl/js/customControl.js',
        '/bahmni_config/openmrs/apps/home/app.json',
        '/bahmni_config/openmrs/apps/home/extension.json',
        '/bahmni_config/openmrs/i18n/home/locale_en.json',
        '/bahmni_config/openmrs/apps/registration/app.json',
        '/bahmni_config/openmrs/apps/registration/extension.json',
        '/bahmni_config/openmrs/i18n/registration/locale_en.json',
        '/bahmni_config/openmrs/apps/registration/fieldValidation.js'
        ],
        styles = [
        '/bahmni/styles/fonts/opensans-regular-webfont.ttf',
        '/bahmni/styles/fonts/fontawesome-webfont.woff2?v=4.3.0',
        '/bahmni/styles/fonts/opensans-bold-webfont.ttf',
        '/bahmni/styles/home.css',
        '/bahmni/styles/registration.css'
        ],
        modules = [
        '/home',
        '/bahmni/home',
        '/bahmni/registration/'
        ],
        globalProperty = [
            '/openmrs/ws/rest/v1/bahmnicore/sql/globalproperty?property=locale.allowed.list',
            '/openmrs/ws/rest/v1/bahmnicore/sql/globalproperty?property=mrs.genders',
            '/openmrs/ws/rest/v1/bahmnicore/sql/globalproperty?property=bahmni.relationshipTypeMap',
            '/openmrs/ws/rest/v1/bahmnicore/sql/globalproperty?property=concept.reasonForDeath'
        ],
        rest = [
        '/openmrs/ws/rest/v1/location?q=Login+Location&s=byTags&v=default',
        '/openmrs/ws/rest/v1/bahmnicore/config/bahmniencounter?callerContext=REGISTRATION_CONCEPTS',
        '/openmrs/ws/rest/v1/personattributetype?v=custom:(uuid,name,sortWeight,description,format,concept)',
        '/openmrs/ws/rest/v1/idgen/identifiersources',
        '/openmrs/module/addresshierarchy/ajax/getOrderedAddressHierarchyLevels.form',
        '/openmrs/ws/rest/v1/relationshiptype?v=custom:(aIsToB,bIsToA,uuid)'
        ],
        others = //home page
        [
            '/bahmni/components/select2/select2.css',
            '/bahmni/components/jquery/jquery.min.js',
            '/bahmni/components/lodash/dist/lodash.min.js',
            '/bahmni/components/jquery.cookie/jquery.cookie.js',
            '/bahmni/components/angular/angular.min.js',
            '/bahmni/components/angular-ui-router/release/angular-ui-router.min.js',
            '/bahmni/components/ngInfiniteScroll/build/ng-infinite-scroll.min.js',
            '/bahmni/components/stacktrace-js/dist/stacktrace.min.js',
            '/bahmni/components/ng-clip/dest/ng-clip.min.js',
            '/bahmni/components/zeroclipboard/dist/ZeroClipboard.min.js',
            '/bahmni/components/angular-translate/angular-translate.min.js',
            '/bahmni/components/angular-cookies/angular-cookies.min.js',
            '/bahmni/components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
            '/bahmni/components/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js',
            '/bahmni/components/angular-translate-storage-local/angular-translate-storage-local.min.js',
            '/bahmni/components/angular-translate-handler-log/angular-translate-handler-log.min.js',
            '/bahmni/common/constants.js',
            '/bahmni/common/route-errorhandler/init.js',
            '/bahmni/common/util/init.js',
            '/bahmni/common/util/httpErrorInterceptor.js',
            '/bahmni/common/util/arrayUtil.js',
            '/bahmni/common/auth/init.js',
            '/bahmni/common/auth/user.js',
            '/bahmni/common/auth/userService.js',
            '/bahmni/common/auth/authentication.js',
            '/bahmni/common/config/init.js',
            '/bahmni/common/config/services/configurations.js',
            '/bahmni/common/domain/init.js',
            '/bahmni/common/domain/services/locationService.js',
            '/bahmni/common/domain/services/localeService.js',
            '/bahmni/common/domain/services/configurationService.js',
            '/bahmni/common/domain/mappers/observationValueMapper.js',
            '/bahmni/common/app-framework/init.js',
            '/bahmni/common/app-framework/models/appDescriptor.js',
            '/bahmni/common/app-framework/services/appService.js',
            '/bahmni/common/app-framework/services/mergeService.js',
            '/bahmni/common/ui-helper/init.js',
            '/bahmni/common/ui-helper/spinner.js',
            '/bahmni/common/ui-helper/directives.js',
            '/bahmni/common/ui-helper/controllers/messageController.js',
            '/bahmni/common/ui-helper/services/messagingService.js',
            '/bahmni/common/logging/init.js',
            '/bahmni/common/logging/exceptionHandler.js',
            '/bahmni/common/i18n/init.js',
            '/bahmni/common/i18n/bahmni-translate.js',
            '/bahmni/common/i18n/services/mergeLocaleFilesService.js',
            '/bahmni/common/ui-helper/controllers/dashboardController.js',
            '/bahmni/common/ui-helper/messages.html',
            '/bahmni/common/ui-helper/views/dashboard.html',
            // end of login page
            //Start of home dashboard
            //start of registration
            '/bahmni/components/ngDialog/css/ngDialog.min.css',
            '/bahmni/components/ngDialog/css/ngDialog-theme-default.min.css',
            '/bahmni/components/ngDialog/css/ngDialog-theme-plain.min.css',
            '/bahmni/components/angular-sanitize/angular-sanitize.min.js',
            '/bahmni/components/angular-recursion/angular-recursion.min.js',
            '/bahmni/components/moment/min/moment.min.js',
            '/bahmni/components/angular-bindonce/bindonce.min.js',
            '/bahmni/components/select2/select2.min.js',
            '/bahmni/components/angular-ui-select2/src/select2.js',
            '/bahmni/components/ngDialog/js/ngDialog.min.js',
            '/bahmni/components/angular-elastic/elastic.js',
            '/bahmni/common/util/dateUtil.js',
            '/bahmni/common/util/validationUtil.js',
            '/bahmni/common/util/dynamicResourceLoader.js',
            '/bahmni/common/util/arrayUtil.js',
            '/bahmni/common/util/httpErrorInterceptor.js',
            '/bahmni/common/models/visitControl.js',
            '/bahmni/common/config/services/configurations.js',
            '/bahmni/common/domain/observationFilter.js',
            '/bahmni/common/domain/mappers/conceptMapper.js',
            '/bahmni/common/domain/services/visitService.js',
            '/bahmni/common/domain/services/encounterService.js',
            '/bahmni/common/domain/services/observationsService.js',
            '/bahmni/common/domain/services/providerService.js',
            '/bahmni/common/domain/encounterConfig.js',
            '/bahmni/common/domain/mappers/observationValueMapper.js',
            '/bahmni/common/ui-helper/directives/toggle.js',
            '/bahmni/common/ui-helper/directives/popOver.js',
            '/bahmni/common/ui-helper/directives/splitButton.js',
            '/bahmni/common/ui-helper/directives/focusOn.js',
            '/bahmni/common/ui-helper/directives/conceptAutocomplete.js',
            '/bahmni/common/ui-helper/directives/focusMe.js',
            '/bahmni/common/ui-helper/directives/bahmniAutocomplete.js',
            '/bahmni/common/ui-helper/services/contextChangeHandler.js',
            '/bahmni/common/ui-helper/controllers/messageController.js',
            '/bahmni/common/ui-helper/printer.js',
            '/bahmni/common/ui-helper/directives/ngConfirmClick.js',
            '/bahmni/common/ui-helper/directives/bmShow.js',
            '/bahmni/common/photo-capture/init.js',
            '/bahmni/common/photo-capture/directives/capturePhoto.js',
            '/bahmni/common/patient/init.js',
            '/bahmni/common/patient/filters/age.js',
            '/bahmni/common/concept-set/init.js',
            '/bahmni/common/concept-set/directives/conceptSetGroup.js',
            '/bahmni/common/concept-set/directives/conceptSet.js',
            '/bahmni/common/concept-set/directives/concept.js',
            '/bahmni/common/concept-set/directives/buttonSelect.js',
            '/bahmni/common/concept-set/directives/stepper.js',
            '/bahmni/common/concept-set/directives/obsConstraints.js',
            '/bahmni/common/concept-set/directives/duration.js',
            '/bahmni/common/concept-set/directives/integer.js',
            '/bahmni/common/concept-set/directives/latestObs.js',
            '/bahmni/common/concept-set/models/conceptSetGroupValidationHandler.js',
            '/bahmni/common/concept-set/models/conceptSetObservation.js',
            '/bahmni/common/concept-set/models/booleanObservation.js',
            '/bahmni/common/concept-set/models/observationNode.js',
            '/bahmni/common/concept-set/models/tabularObservations.js',
            '/bahmni/common/concept-set/models/multiSelectObservations.js',
            '/bahmni/common/concept-set/models/customRepresentationBuilder.js',
            '/bahmni/common/concept-set/models/conceptSetSection.js',
            '/bahmni/common/concept-set/mappers/observationMapper.js',
            '/bahmni/common/concept-set/services/conceptSetServices.js',
            '/bahmni/common/concept-set/services/conceptSetUiConfigService.js',
            '/bahmni/common/ui-helper/filters/thumbnail.js',
            '/bahmni/common/ui-helper/filters/dateFilters.js',
            '/bahmni/common/displaycontrols/init.js',
            '/bahmni/common/displaycontrols/observation/init.js',
            '/bahmni/common/displaycontrols/observation/helpers/groupingFunctions.js',
            '/bahmni/common/displaycontrols/observation/directives/bahmniObservation.js',
            '/bahmni/common/displaycontrols/pivottable/init.js',
            '/bahmni/common/displaycontrols/pivottable/directives/pivotTable.js',
            '/bahmni/common/displaycontrols/pivottable/services/pivotTableService.js',
            '/bahmni/common/displaycontrols/custom/init.js',
            '/bahmni/common/displaycontrols/custom/directives/customDisplayControl.js',
            '/bahmni/common/obs/init.js',
            '/bahmni/common/obs/models/observation.js',
            '/bahmni/common/obs/mappers/observationMapper.js',
            '/bahmni/common/obs/directives/showObservation.js',
            '/bahmni/common/obs/util/observationUtil.js',
            '/bahmni/common/patient-search/constants.js',
            '/bahmni/common/patient-search/models/search.js',
            '/bahmni/common/patient-search/init.js',
            '/bahmni/common/patient-search/controllers/patientsListController.js',
            '/bahmni/common/photo-capture/views/photo.html',

            // end of registration cache
        ],
        preFetchCompleteList = styles.concat(preFetchList.concat(configs.concat(modules.concat(globalProperty.concat(others.concat(rest))))));

  importScripts('bower_components/sw-toolbox/sw-toolbox.js'); // Update path to match your own setup

  var updateCache = function(items) {
    for (var i in items) {
      global.toolbox.uncache(items[i]);
      global.toolbox.cache(items[i]);
    }
  };

  //configuration
  global.toolbox.router.default = global.toolbox.networkFirst;
  global.toolbox.options.debug = false;
  global.toolbox.options.cache = {
    name: 'ng-amrs-home-cache-v-1',
    maxAgeSeconds: null,
    maxEntries: null
  };

  //this should be before any https calls
  global.toolbox.precache(preFetchCompleteList);

  //listeners for life cycle
  global.addEventListener('install', function() {
    console.log('Service worker installed.');
  });

  global.addEventListener('activate', function() {
    console.log('Service worker activated.');
  });

  //routing
  global.toolbox.router.get('/ng-amrs/(.*)', global.toolbox.networkFirst);
  global.toolbox.router.get('/ng-amrs_config/(.*)', global.toolbox.networkOnly);
  global.toolbox.router.get('/(.*)', global.toolbox.networkFirst);

  //update caches
  updateCache(configs);

})(self);
