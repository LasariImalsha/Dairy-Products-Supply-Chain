import React from 'react';
import Login from '../Login/Login';
import WelcomeCard from '../../Components/WelcomeCard';


function Home() {
  return (
   <>
   <WelcomeCard comp={<Login />}/>
   </>
  )
}

export default Home