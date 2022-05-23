class Team {
    constructor(teamId, teamName, members){
        this.teamId = teamId;
        this.teamName = teamName;
        this.members = members;
    }
}

class CompetitionPreview{
    constructor(id, name, description, startInscription,endInscription,startDate, endDate, teamMemMax,teamMemMin,status,venues){
        this.id = id;
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

export default {Team, CompetitionPreview}