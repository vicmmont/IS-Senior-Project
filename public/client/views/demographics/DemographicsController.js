"use strict";

(function() {
	angular
		.module("ISSeniorProject")
		.controller("DemographicsController", demographicsController);

	function demographicsController($location, $routeParams, ParticipantDataService) {
		var vm = this;
		vm.group;
		vm.age;
		vm.gender;
		vm.year;

		function init() {
			vm.group = $routeParams["group"];
		}

		init();

		vm.next = function() {
			var demographics = {};
			demographics["gender"] = vm.gender;
			demographics["age"] = vm.age;
			demographics["year"] = vm.year;

			ParticipantDataService.saveDemographics(demographics);
			
			$location.url("/interview1?group=" + vm.group);
		}
	}
})();