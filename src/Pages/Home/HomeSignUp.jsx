import React from 'react'
import Signup from '../Signup/Signup';
import WelcomeCard from '../../Components/WelcomeCard';

function HomeSignUp() {
  return (
    <WelcomeCard comp={<Signup />}/>
  )
}

export default HomeSignUp



