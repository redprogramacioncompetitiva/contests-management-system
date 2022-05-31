import db from "../../util/database";
import { Team, Competition } from "../../model/classes";

export default async function handler(req, res) {
  const { method, body } = req;
  const teamsIds = await db.query(
    "SELECT * FROM TEAM WHERE ID_TEAM IN (SELECT ID_TEAM FROM USER_TEAM_COMPETITION WHERE USERNAME = $1)",
    [body.user]
  );
  var teams = [];
  for (let index = 0; index < teamsIds.rows.length; index++) {
    var members = await db.query(
      "SELECT USERNAME FROM USER_TEAM_COMPETITION WHERE ID_TEAM = $1",
      [teamsIds.rows[index].id_team]
    );
    var institution = await db.query(
      "SELECT NAME FROM INSTITUTION WHERE ID_INSTITUION = $1",
      [teamsIds.rows[index].id_institution]
    );

    /* var team = new Team(teamsIds.rows[index].id_team, institution.rows[0] ,teamsIds.rows[index].team_name,members.rows) */

    var newTeam = {
      id: teamsIds.rows[index].id_team,
      intitution: institution.rows[0],
      name: teamsIds.rows[index].team_nam,
      members: membersData,
    };
    teams.push(newTeam);
  }

  var competitionsEnabled = [];
  //Search competitions that accepts enrollment
  const compsEnabled = await db.query(
    "SELECT * FROM COMPETITION WHERE ID_STATUS = '6'"
  );
  for (let index = 0; index < compsEnabled.rows.length; index++) {
    var venues = await db.query(
      "SELECT VENUE_NAME FROM VENUE WHERE ID_VENUE IN(SELECT ID_VENUE FROM VENUE_COMPETITION WHERE ID_COMPETITION = $1)",
      [compsEnabled.rows[index].id_competition]
    );

    var status = await db.query(
      "SELECT STATUS_NAME FROM STATUS WHERE ID_STATUS = $1",
      [compsEnabled.rows[index].id_status]
    );

    var newComp = {
      id: compsEnabled.rows[index].id_competition,
      name: compsEnabled.rows[index].name,
      description: compsEnabled.rows[index].description,
      startInscription: compsEnabled.rows[index].start_inscription,
      endInscription: compsEnabled.rows[index].end_inscription,
      startDate: compsEnabled.rows[index].start_date,
      endDate: compsEnabled.rows[index].end_date,
      teamMax: compsEnabled.rows[index].team_members_max,
      teamMin: compsEnabled.rows[index].team_members_min,
      status: status.rows[0],
      venues: venues.rows,
    };

    competitionsEnabled.push(newComp);
  }

  var competitionsDisabled = [];
  //Search competitions that don't accept enrollment
  const compsDisabled = await db.query(
    "SELECT * FROM COMPETITION WHERE ID_STATUS <> '6'"
  );
  for (let index = 0; index < compsDisabled.rows.length; index++) {
    var venues = await db.query(
      "SELECT VENUE_NAME FROM VENUE WHERE ID_VENUE IN(SELECT ID_VENUE FROM VENUE_COMPETITION WHERE ID_COMPETITION = $1)",
      [compsDisabled.rows[index].id_competition]
    );

    var status = await db.query(
      "SELECT STATUS_NAME FROM STATUS WHERE ID_STATUS = $1",
      [compsDisabled.rows[index].id_status]
    );

    var newComp = {
      id: compsDisabled.rows[index].id_competition,
      name: compsDisabled.rows[index].name,
      description: compsDisabled.rows[index].description,
      startInscription: compsDisabled.rows[index].start_inscription,
      endInscription: compsDisabled.rows[index].end_inscription,
      startDate: compsDisabled.rows[index].start_date,
      endDate: compsDisabled.rows[index].end_date,
      teamMax: compsDisabled.rows[index].team_members_max,
      teamMin: compsDisabled.rows[index].team_members_min,
      status: status.rows[0],
      venues: venues.rows,
    };

    competitionsDisabled.push(newComp);
  }

  const data = {
    teams: teams,
    competitionsEnabled: competitionsEnabled,
    competitionsDisabled: competitionsDisabled,
  };

  res.status(200).json(data);
}
