import CompetitionItem from '../../components/users/CompetitionItem';


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
      return {data : r}
    
  }

export default userIndex