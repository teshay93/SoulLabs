import './App.css';
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import pic from './assets/party.jpg'

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="container">
          <ul className="nav-list">
            <li className="list"><a href="#">Book</a></li>
            <li className="list"><a href="#">Videos</a></li>
            <li className="list"><a href="#">Shop</a></li>
            <li className="list"><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="header">
        <div className="container">
          <div className="card">
            <img src={pic}/>
            <h1>John Ode</h1>
            <p className="title"> jkdloflg rdg</p>
          </div>
        </div>
      </section>

      <div className="l_footer">
        <div className="social_footer">
          <ul>
            <li><a href="#"><TiSocialInstagram /></a></li>
            <li><a href="#"><TiSocialFacebook /></a></li>
            <li><a href="#"><TiSocialYoutube /></a></li>
            <li><a href="#"><TiSocialTwitter /></a></li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default App;
