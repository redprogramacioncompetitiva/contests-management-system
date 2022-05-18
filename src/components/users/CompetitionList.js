import { Component } from "react";
import CompetitionItem from "./CompetitionItem";

export default class CompetitionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <div>
        <div>
          {this.state.items.map((e) => (
            <CompetitionItem
              competitionName= {this.props.competitionName}
              description= {this.props.description}
              competitionStartDate= {this.props.competitionStartDate}
              competitionEndDate= {this.props.competitionEndDate}
              competitionEnrollStartDate= {this.props.competitionEnrollStartDate}
              competitionEnrollEndDate= {this.props.competitionEnrollEndDate}
            />
          ))}
        </div>
      </div>
    );
  }
}
