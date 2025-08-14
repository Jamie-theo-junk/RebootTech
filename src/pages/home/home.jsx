import React, { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import axios from 'axios';
import './home.css';
import jamieImage from '../../assets/home_page_images/jamie_image.png';
import fiverrImage from '../../assets/home_page_images/fiverr_app_logo.png';
import githubImage from '../../assets/home_page_images/github-app-logo.png';
import linkinImage from '../../assets/home_page_images/linkin-app-logo.png';
import AdComponent from "../../components/AdComponent/adComponent"
import { motion } from "motion/react"

const home = () => {

  const [recentlistings, setRecentListings] = useState([]);
  const [topSellersList, setTopSellersList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/items/recent') 
      .then(response => {
        setRecentListings(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching listings:', error);
      });

  axios.get('http://localhost:3000/api/users/top-sellers')
      .then(response => {
        setTopSellersList(response.data);
      })
      .catch(error => {
        console.error('Error fetching top sellers:', error);
      });
  }, []);



  return (
    <div>
      <section className='new-list-section'>
      <h2>New Listings</h2>
     <div className="cards-container">
  {recentlistings.map((item) => (
    <div className="card" key={item._id}>
      <img src={item.item.imageFile} alt={item.item.name} className="card-image"/>
      <h3 className="card-title">{item.item.name}</h3>
      <p className="card-price">R{item.item.price}</p>
      <p className="card-user"><IoPerson /> {item.user.name}</p>
      <p className="card-location">
           <FaLocationDot /> {item.item.location.city}</p>
    </div>))}
</div>
      </section>
      <section className='top-seller-section'>
      <h2>Top Sellers</h2>
      <div className="card-section">
   {topSellersList.map((seller, index) => (
  <div className="top-seller-card" key={seller.name + index}>
    <h3 className="top-seller-author">{seller.name}</h3>
    <div className="top-seller-card-images">
      {seller.images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt={`${seller.name} item ${i + 1}`}
          className="top-seller-card-image"
        />
      ))}
    </div>
  </div>
))}

     </div>
      </section>
      <section className="about-me-section">
      <div className="image-half">
      <img src={jamieImage} alt="jamie image" style={{ width: '300px', height: '300px' }} />
      </div>
      <div className='text-half'>
      <h3>Hi :)</h3>
      <p>I'm Jamie Theo Junk, an aspiring programmer. I created this application on my own because I noticed there's no reliable place to buy and sell tech. While I know this platform isn't perfect yet, I strive to make it a one-stop shop for all things tech. As technology continues to advance, the need to buy brand-new devices will decrease—previous generations will remain just as capable. That’s why platforms like this will be essential.<br></br><br />Hope you enjoy happy scrolling</p>
      <div className='link-list'>
      <motion.button
      whileHover={{ scale: 1.1, rotate: 5 }} 
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        border: 'none',
        background: 'transparent',
        padding: 0,
        cursor: 'pointer',
      }}
    >
      <img 
        src={fiverrImage} 
        alt="Button Image"
        className='link-btns'
      />
    </motion.button>
          <motion.button
      whileHover={{ scale: 1.1, rotate: 5 }} 
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        border: 'none',
        background: 'transparent',
        padding: 0,
        cursor: 'pointer'
      }}
    >
      <img 
        src={githubImage} 
        alt="Button Image"
        className='link-btns'
      />
    </motion.button>
          <motion.button
      whileHover={{ scale: 1.1, rotate: 5 }} 
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        border: 'none',
        background: 'transparent',
        padding: 0,
        cursor: 'pointer'
      }}
    >
      <img 
        src={linkinImage} 
        alt="Button Image"
        className='link-btns'
      />
    </motion.button>
      </div>
      </div>
      </section>
    </div>
  )
}

export default home
