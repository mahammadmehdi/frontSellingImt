import React, { useContext, useEffect, useState } from "react";
import "./index.scss"
import { NavLink } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";

function OurProducts() {
  const [product, setProduct] = useState([]);
  const [sortedproperty, setSortedproperty] = useState(null)
  const {AddBasket} = useContext(BasketContext)
  const {isWishlist} = useContext(WishlistContext)
  const {addWishlist} = useContext(WishlistContext)

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="ourProducts">
      <div className="ourProductsAll">
        <div className="popular">POPULAR PRODUCTS</div>
        <h3 className="head">Our Products</h3>
        <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>

        <div className="sort">
            <button onClick={()=>setSortedproperty({property:"name", asc:true})}>A-Z</button>
            <button onClick={()=>setSortedproperty({property:"name", asc:false})}>Z-A</button>
            <button onClick={()=>setSortedproperty(null)}>Default</button>

        </div>
        <div className="cards">
          {[...product]
          .sort((a,b) => {
            if (sortedproperty && sortedproperty.asc) {
                return (a[sortedproperty.property] > b[sortedproperty.property]) ? 1 : ((b[sortedproperty.property] > a[sortedproperty.property]) ? -1 : 0)
            }else if (sortedproperty && sortedproperty.asc === false) {
                return (a[sortedproperty.property] < b[sortedproperty.property]) ? 1 : ((b[sortedproperty.property] < a[sortedproperty.property]) ? -1 : 0)
            }else {
                return 0
            }
          })
          .map((x) => (
            <ul key={x._id} className="pages">
              <li className="image"><img src={x.image}  /></li>
              <li className="name">{x.name}</li>
              <div className="icons">
                <div className="star">
                <i class="fa-solid fa-star"></i>
                <span>5.0</span>
                </div>
                <div onClick={()=>addWishlist(x)} className="heart">
                <i  className={`fa-solid fa-heart ${isWishlist(x) ?"red" : ""}`}></i>
                <span>29</span>
                </div>
              </div>
              <li className="desc">{x.desc}</li>
              <div className="btn"><button onClick={()=>AddBasket(x)} className="cart">CART</button>
              <button className="view"><NavLink to={"/detail/"+x._id}>VIEW</NavLink></button></div>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
