import React, { useContext } from 'react'
import { WishlistContext } from '../../context/wishlistContext'
import "./index.scss"

function Wishlist() {
    const {wishlist} = useContext(WishlistContext)
  return (
    <div className='wishlistPage'>
        <div className="card">
            {wishlist.map((x)=><ul className='pages'>
                <li className='image'><img src={x.image}  /></li>
                <li className='name'>{x.name}</li>
                <li className='desc'>{x.desc}</li>
            </ul>)}
        </div>
    </div>
  )
}

export default Wishlist