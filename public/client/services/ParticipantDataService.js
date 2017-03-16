"use strict";
(function() {
    angular
        .module("ISSeniorProject")
        .service("ParticipantDataService", participantDataService);

    function participantDataService() {
        var data = {};

        this.setParticipantId = function(participantId) {
            data["participantId"] = participantId;
        }

        this.setGroup = function(group) {
            data["group"] = group
        }
    }
})();