"use strict";

(function() {
	angular
		.module("ISSeniorProject")
		.controller("GoodbyeController", goodbyeController);

	function goodbyeController($location, ParticipantDataService) {
		var vm = this;
		vm.dataList;
		
		function init() {
			vm.dataList = ParticipantDataService.getData();
		}

		init();
	}
})();