import React from 'react'
import { HomeStylediv,Image } from './HomeStyling'
import adopt from './HomeImages/adopt.png'


const Home = () => {
  return (
    <HomeStylediv>
      <h1> Welcome to Ado-Pet </h1>
      <Image src={adopt}/>
    </HomeStylediv>
  )
}

export default Home