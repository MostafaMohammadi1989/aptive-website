import React from "react";
import "./Hero.css";
import {
  FaDatabase,
  FaAsterisk,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaAccusoft,
} from "react-icons/fa";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="col-1">
            <h1>Data to enrich yourt</h1>
            <h1>
              <span className="primary-color">Online Business</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              deserunt tenetur sunt ipsum, id culpa vero at animi quidem sint.
            </p>
            <div className="used-by">
              <p>Used BY</p>
              <div className="icons">
                <i>
                  <FaDatabase /> Staks
                </i>
                <i>
                  <FaAsterisk /> Srat AI
                </i>
                <i>
                  <FaAccusoft /> Accusoft
                </i>
              </div>
            </div>
          </div>
          <div className="clo-2">
            <div className="form-layout">
              <div className="form-container">
                <p className="sign-in-txt">sign in with</p>
                <div className="social-login">
                  <i>
                    <FaFacebook size={20} />
                  </i>
                  <i>
                    <FaTwitter size={20} />
                  </i>
                  <i>
                    <FaGithub size={20} />
                  </i>
                </div>
                <div className="divider">
                  <p>
                    <span>Or</span>
                  </p>
                </div>
                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button>Create your acount</button>
                </form>
              </div>

              <div className="form-footer">
                <p>
                  By signing UP, you agree to our
                  <span className="primary-color">Terms, Data Policy</span>
                  <span className="primary-color">Cookies Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
