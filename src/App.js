import './App.css';
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="container">
          <ul className="nav-list">
            <li className="list">Book</li>
            <li className="list">Videos</li>
            <li className="list">Shop</li>
            <li className="list">Contact</li>
          </ul>
        </div>
      </nav>

      <header className="header">
        <div className="container">
          <div>
          <h1>hello</h1>
          {/* <p>lorem ipsum ridiculous text writing in the code experimenting and learning flexbocx css froom Traversy on yoputube. it is so muc  fun to be doing this
          </p> */}
          </div>
        </div>
      </header>

      <footer className="l_footer">
              <div className="l_region">
                <nav className="social_footer">
                  <ul>
                    <li><a href="#"><TiSocialInstagram /></a></li>
                    <li><a href="#"><TiSocialFacebook /></a></li>
                    <li><a href="#"><TiSocialYoutube /></a></li>
                    <li><a href="#"><TiSocialTwitter /></a></li>
                  </ul>
                </nav>
              </div>
          </footer>
    </div>
  );
}

export default App;
