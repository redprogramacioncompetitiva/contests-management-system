import TeamsItem from '../../../components/users/TeamsItem';

function teamsIndex({data}){
    return(
        <div>
            Equipos
            <div>
             {this.state.items.map((e)=>
             <TeamsItem teamName={this.props.teamName} institution={this.props.institution} members={this.props.members}  />
             )}
            </div>
        </div>
    )
}

teamsIndex.getInitialProps = async (ctx) => {
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

export default teamsIndex