import React, { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import axios from 'axios';
import './home.css'
import AdComponent from "../../components/AdComponent/adComponent"

const home = () => {

  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/items/recent') 
      .then(response => {
        setListings(response.data);
      })
      .catch(error => {
        console.error('Error fetching listings:', error);
      });
  }, []);
  return (
    <div>
      <section className='new-list-section'>
      <h2>New Listings</h2>
     <div className="cards-container">
  {listings.map((item) => (
    <div className="card" key={item._id}>
      <img src={item.imageFile} alt={item.name} className="card-image"/>
      <h3 className="card-title">{item.name}</h3>
      <p className="card-price">R{item.price}</p>
      <p className="card-user"><IoPerson /> {item.author}</p>
      <p className="card-location"><FaLocationDot />{item.location.Town}, {item.location.City}</p>
    </div>
  ))}
</div>
      </section>
      <section className='top-seller-section'>
      <h2>Top Sellers</h2>
      {listings.map((item) => (
    <div className="top-seller-card" key={item._id}>
      <img src={item.imageFile} alt={item.name} className="top-seller-card-image"/>
      <img src={item.imageFile} alt={item.name} className="top-seller-card-image"/>
      <img src={item.imageFile} alt={item.name} className="top-seller-card-image"/>
      <img src={item.imageFile} alt={item.name} className="top-seller-card-image"/>
    </div>
  ))}
      </section>
    </div>
  )
}

export default home
