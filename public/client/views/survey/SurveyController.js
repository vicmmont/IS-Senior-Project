"use strict";

(function() {
    angular
        .module("ISSeniorProject")
        .controller("SurveyController", surveyController);

    function surveyController($location, $routeParams, ParticipantDataService) {
    	var vm = this;
    	vm.group;
        vm.interview;
        vm.infoMedia = {};

        vm.question1;
        vm.question2;
        vm.question3;
        vm.question4;
        vm.question5;
        vm.question6;
        vm.question7;
        vm.question8;

        function init() {
            vm.infoMedia['1'] = [null, 'video', 'text'];
            vm.infoMedia['2'] = [null, 'text', 'video'];
            vm.group = $routeParams["group"];
            vm.interview = $routeParams["interview"];
        }

        init();

    	vm.submit = function() {
            var surveyAnswers = {};
            surveyAnswers["Question1"] = vm.question1;
            surveyAnswers["Question2"] = vm.question2;
            surveyAnswers["Question3"] = vm.question3;
            surveyAnswers["Question4"] = vm.question4;
            surveyAnswers["Question5"] = vm.question5;
            surveyAnswers["Question6"] = vm.question6;
            surveyAnswers["Question7"] = vm.question7;
            surveyAnswers["Question8"] = vm.question8;

            var medium = vm.infoMedia[vm.group][parseInt(vm.interview)];
    		console.log(ParticipantDataService.setSurveyAnswers(medium, surveyAnswers));
            
            if (parseInt(vm.interview) === 1) {
                $location.url("/interview2?group=" + vm.group);
            } else {
                $location.url("/goodbye");
            }

    	}

    }
})();