"use strict";

(function() {
    angular
        .module("ISSeniorProject")
        .controller("HomepageController", homepageController);

    function homepageController($location, ParticipantDataService) {
    	var vm = this;
        vm.participantId;

    	vm.onStartExperimentClick = function() {
    		var group = Math.floor((Math.random() * 2) + 1);

            ParticipantDataService
                .setParticipantId(vm.participantId);

            ParticipantDataService
                .setGroup(group);

            $location.url("/demographics?group=" + group);
    	}
    }
})();