import TeamsItem from '../../../../components/users/TeamsItem';

function teamsIndex({data}){
  if(session && session.username == router.query.users){
    return(
      <div>
          Equipos
          <div>
           {data.teams.map((e)=>
           <TeamsItem teamName={this.props.teamName} institution={this.props.institution} members={this.props.members}  />
           )}
          </div>
      </div>
  )
  }else{
    return(
      <div>
        <h1>You shall not pass!</h1>
      </div>
    )
  }

    
}

teamsIndex.getInitialProps = async (ctx) => {
  const testData = await fetch("http://localhost:3000/api/userIndex")
  const r = await testData.json()
  return {data : r}
  }

export default teamsIndex