"use strict";

(function(){
    angular
        .module("ISSeniorProject")
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "./client/views/homepage/homepage.html",
                controller: "HomepageController",
                controllerAs: "model"
            })
            .when("/demographics", {
                templateUrl: "./client/views/demographics/demographics.html",
                controller: "DemographicsController",
                controllerAs: "model"
            })
            .when("/interview1", {
                templateUrl: "./client/views/interview1/interview1.html",
                controller: "Interview1Controller",
                controllerAs: "model"
            })
            .when("/quiz1", {
                templateUrl: "./client/views/quiz1/quiz1.html",
                controller: "Quiz1Controller",
                controllerAs: "model"
            }) 
            .when("/survey", {
                templateUrl: "./client/views/survey/survey.html",
                controller: "SurveyController",
                controllerAs: "model"
            })   
            .when("/interview2", {
                templateUrl: "./client/views/interview2/interview2.html",
                controller: "Interview2Controller",
                controllerAs: "model"
            })
            .when("/quiz2", {
                templateUrl: "./client/views/quiz2/quiz2.html",
                controller: "Quiz2Controller",
                controllerAs: "model"
            })
            .when("/goodbye", {
                templateUrl: "./client/views/goodbye/goodbye.html",
                controller: "GoodbyeController",
                controllerAs: "model"
            })            
            .otherwise({
                redirectTo: "/home"
            });
    }
})();