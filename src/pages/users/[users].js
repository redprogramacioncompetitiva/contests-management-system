import { useSession,signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import CompetitionItem from '../../components/users/CompetitionItem';
import { Redirect } from "react-router-dom";



function userIndex({data}){
  
  const router = useRouter()
  const { data: session } = useSession()
  /* state = {

  } */
  if(session && session.username == router.query.users){
    console.log('Amogus')
    return(
      <div>
        Competencias
        <div>
        {data.competitions.map((e) => (
        <CompetitionItem
          competitionName= {e.name}
          description= {e.description}
          competitionStartDate= {e.startDate}
          competitionEndDate= {this.props.competitionEndDate}
          competitionEnrollStartDate= {this.props.competitionEnrollStartDate}
          competitionEnrollEndDate= {this.props.competitionEnrollEndDate}
          />
          ))}
        </div>
        
  
      </div>
    )
  }else{
    //return <Redirect to='/'/>;
    return(
      <div>
        <h1>You shall not pass!</h1>
      </div>
    )
  }
 
}

/* export async function getServerSideProps(context) {
  let config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: {user : context.params.users}}
    console.log(config.body)
    const testData = await fetch("http://localhost:3000/api/userIndex",config)
    //console.log(testData)
    const r = await testData.json()

  return {
    props: {data : r}, 
  }
} */

userIndex.getInitialProps = async (ctx) => {

     let config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:{user: ctx.query.users}}
      console.log(config.body)

      const testData = await fetch("http://localhost:3000/api/userIndex")
      const r = await testData.json()
      return {data : r}
    
  }

export default userIndex