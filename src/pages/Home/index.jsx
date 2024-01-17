import React from 'react'
import ShopWithUs from '../../components/ShopWithUS'
import OurProducts from '../../components/OurProducts'
import { Helmet } from 'react-helmet-async'
import AboutUs from '../../components/AboutUs'
import LeaderShip from '../../components/LEaderShip'
import WeOfferServices from '../../components/WeOfferServices'

function Home() {
  return (
    <div>
        <Helmet>
        <title>Home</title>
      </Helmet>
        <ShopWithUs></ShopWithUs>
        <OurProducts></OurProducts>
        <AboutUs></AboutUs>
        <LeaderShip></LeaderShip>
        <WeOfferServices></WeOfferServices>
    </div>
  )
}

export default Home