import React from 'react';
import {useEffect} from 'react';
import banner from './images/banner6.jpg';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
  //const [data, setData] = useState(null);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);  
 
  useEffect(() => {
    fetch('https://pixelninja.co.uk/cocktail/getTestOne.html')
    .then((response) => console.log(response));
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