import React from 'react';
import {useState, useEffect} from 'react';
import banner from './images/banner6.jpg';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  
 
  useEffect(() => {
    fetch('http://pixelninja.co.uk/cocktail')
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => console.log(actualData))
    .catch((err) => {
      console.log(err.message);
    });
}, []);
    
  
  return (
    <div className="main-menu">
        <header className='header'>
            <img src={banner} className="banner" alt="Cocktail Companion" />
            <img src={logo} className="logo" alt="Tap and Tonic" />
        </header>
        <div className="menu-body" >
            <Link to="/question-one" style={{ textDecoration: 'none' }}><button>Companion</button></Link>
            <button>Staff Picks</button>
            <button>Wild Card</button>
        </div>
    </div>
  )
}

export default MainMenu