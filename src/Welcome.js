import logo from './images/logo.png';
import banner from './images/banner.jpg';
import './Welcome.css';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="Welcome">
      <header className="Welcome-header">
        <img src={banner} className="Welcome-banner" alt="Cocktail Companion"/>
        <img src={logo} className="Welcome-logo" alt="Tap & Tonic" />
        <div className="Welcome-intro">
          Welcome to the Cocktail Companion
        </div>
        <p>
          Let us help you find your perfect cocktail match, or select one of our staff picked recommendations.
        </p>
        <p>If you're feelnig adventurous, give our Wild Card a hit.</p>                
      </header>
      <div className="Welcome-body">      
          <Link to="/main-menu/"><button>Let's Go</button></Link>      
      </div>
      <div className="Welcome-footer">Created by Cygnus Productions</div>  
    </div>
  );
}

export default Welcome;
