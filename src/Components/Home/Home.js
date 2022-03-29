import React from 'react'
import { Head, HomeStylediv, Image } from './HomeStyling'
import adopt from './HomeImages/adopt.png'


const Home = () => {
  return (
    <HomeStylediv>
      <Head> Welcome to Ado-Pet </Head>
      <Image src={adopt}/>
    </HomeStylediv>
  )
}

export default Home