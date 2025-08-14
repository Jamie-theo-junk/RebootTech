  import { useSearchParams } from 'react-router-dom';
  import React, { useEffect, useState } from 'react';
  import { FaLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
  import './searchCategory.css'
  import axios from 'axios';

function SearchCategory(){

  const [SearchParams, setSearchParams] = useSearchParams();
  const [categoryResults, setCategoryResults] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

  const handleChangeDropDown = (event) => {
    setSelectedOption(event.target.value);
  };
const searchValue = SearchParams.get("search");
  useEffect(() => {
    axios.get(`http://localhost:3000/api/items/category/${searchValue}`)
    .then(response=>{
      setCategoryResults(response.data)
      console.log(response.data)
    })
    .catch( error =>{
      console.error(error)
    })
  });

  
  return (
    <div className='search-category'>
      <section className='search-category_top-section'>
  <div className="search-category_left">
    <h2 className='seach-category_search-value'>{searchValue}</h2>
    <p className='search-category_results'>({categoryResults.length} Results)</p>
  </div>
       <div>
          <select value={selectedOption} onChange={handleChangeDropDown} className='search-category_dropdown'>
           <option value="Lowest">Lowest Prices</option>
           <option value="Highest">Highest Prices</option>
           <option value="Recent">Recent Arrivals</option>
          </select>
      </div>
        </section>
        <section className='search-category_middle-section'>
          {categoryResults.map((item) => (
              <div className="card" key={item._id}>
                <img src={item.item.imageFile} alt={item.item.name} className="card-image"/>
                <h3 className="card-title">{item.item.name}</h3>
                <p className="card-price">R{item.item.price}</p>
                <p className="card-user"><IoPerson /> {item.user.name}</p>
                <p className="card-location">
                     <FaLocationDot /> {item.item.location.city}</p>
              </div>))}
        </section>
        <section className='search-category_bottom-section'>
            
        </section>
    </div>
  )
}

export default SearchCategory