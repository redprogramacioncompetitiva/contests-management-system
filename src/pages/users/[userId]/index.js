import { useSession,signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import CompetitionItem from '../../../components/users/CompetitionItem';
import { Redirect } from "react-router-dom";



function userIndex({data}){
  
  const router = useRouter()
  const { data: session } = useSession()
  
  if(session && session.username == router.query.userId){
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
          competitionEndDate= {e.competitionEndDate}
          competitionEnrollStartDate= {e.competitionEnrollStartDate}
          competitionEnrollEndDate= {e.competitionEnrollEndDate}
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

userIndex.getInitialProps = async (ctx) => {
      const testData = await fetch("http://localhost:3000/api/userIndex")
      const r = await testData.json()
      return {data : r}
  }

export default userIndex