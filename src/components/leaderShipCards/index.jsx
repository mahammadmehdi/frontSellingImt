import React from 'react'
import "./index.scss"

function LeaderShipCards({image,name,job}) {
  return (
    <div className='leaderShipCards'>
        <img className='image' src={image} />
        <div className="name">{name}</div>
        <div className="job">{job}</div>
        <div className="about">Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</div>
        <div className="icon">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-instagram"></i>
        </div>
    </div>
  )
}

export default LeaderShipCards