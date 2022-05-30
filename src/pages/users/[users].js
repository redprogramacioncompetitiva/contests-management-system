import CompetitionItem from '../../components/users/CompetitionItem';
import TeamsItem from '../../components/users/TeamsItem';

function userIndex({data}){
  return(
    <div>
      Competencias
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
      Equipos
      <div>
        {this.state.items.map((e)=>
         <TeamsItem teamName={this.props.teamName} institution={this.props.institution} members={this.props.members}  />
        )}
      </div>

    </div>
  )
    
}

userIndex.getInitialProps = async (ctx) => {
    let config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      //EN EL BODY FALTA EL USERNAME DEL USUARIO
      body: ''}

      const testData = await fetch("http://localhost:3000/api/userIndex",config)
      const r = await testData.json()
      return {tests : r}
    
  }

export default userIndex