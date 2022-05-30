class Team {
    constructor(teamId, insitution,teamName, members, competitions){
        this.teamId = teamId;
        this.insitution = insitution;
        this.teamName = teamName;
        this.members = members;
        this.competitions = competitions;
    }
}

class Competition{
    constructor(id, name, description, startInscription, endInscription, startDate, endDate, teamMemMax, teamMemMin, status, venues){
        this.id = id;
        this.name = name;
        this.description = description;
        this.startInscription = startInscription;
        this.endInscription = endInscription;
        this.startDate = startDate;
        this.endDate = endDate;
        this.teamMemMax = teamMemMax;
        this.teamMemMin = teamMemMin;
        this.status = status;
        this.venues = venues;
    }
}

export default {Team, Competition}