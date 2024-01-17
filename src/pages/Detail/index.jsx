import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./index.scss"
import { Helmet } from 'react-helmet-async';

function Detail() {
    const [detail, setDetail] = useState([])
const {id} = useParams()
    useEffect(() => {
        fetch("http://localhost:3000/"+id)
        .then((res) => res.json())
        .then((data) => setDetail(data));
    }, [])
    
  return (
    <div className='detailPage'>
        <Helmet>
        <title>Detail</title>
      </Helmet>
        <div className="card">
            <div className='image'><img src={detail.image}  /></div>
            <div className="name">{detail.name}</div>
            <div className="desc">{detail.desc}</div>
        </div>
    </div>
  )
}

export default Detail