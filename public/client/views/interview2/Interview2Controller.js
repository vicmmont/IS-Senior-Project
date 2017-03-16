"use strict";

(function() {
    angular
        .module("ISSeniorProject")
        .controller("Interview2Controller", interview2Controller);

    function interview2Controller($location, ParticipantDataService) {
    	var vm = this;
    	vm.group; 

    	function init() {
    		vm.group = $routeParams["group"];
    	}

    	init();

    	vm.next = function() {
    		$location.url("/quiz2?group=" + vm.group);
    	}

    }
})();