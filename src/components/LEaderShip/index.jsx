import React from 'react'
import "./index.scss"
import LeaderShipCards from '../leaderShipCards'
import "./index.scss"

function LeaderShip() {
  return (
    <div className='leaderShip'>
        <div className="leaderShipAll">
            <div className="team">TEAM</div>
            <h2 className='header'>Leadership</h2>
            <div className="cards">
                <LeaderShipCards image={"https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp"} name={"John Rooster"} job={"CO-FOUNDER, PRESIDENT"}></LeaderShipCards>
                <LeaderShipCards image ={"https://preview.colorlib.com/theme/selling/images/person_3.jpg.webp"} name={"Tom Sharp"} job={"CO-FOUNDER, COO"}></LeaderShipCards>
                <LeaderShipCards image={"https://preview.colorlib.com/theme/selling/images/person_4.jpg.webp"} name={"Winston Hodson"} job={"MARKETING"}></LeaderShipCards>

            </div>
        </div>
    </div>
  )
}

export default LeaderShip