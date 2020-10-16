import React from "react";
import "./styles.css";
import iconUp from "../../Images/icon-up.svg";
import iconFacebook from "../../Images/icon-facebook.svg";
import iconTwitter from "../../Images/icon-twitter.svg";
import iconInstagram from "../../Images/icon-instagram.svg";
import iconYoutube from "../../Images/icon-youtube.svg";

function Overview() {
  return (
    <div className="overview-container">
      <h2>Overview - Today</h2>
      <div className="overview-container-data">
        {/* FACEBOOK PAGE VIEWS */}
        <div className="overview-card">
          <div className="overview-title-card">
            <span>Page Views</span>
            <img src={iconFacebook} alt="facebook" />
          </div>
          <div className="overview-data-card">
            <span className="overview-card-number">87</span>
            <span className="overview-card-statistic">
              <img src={iconUp} alt="up" />
              3%
            </span>
          </div>
        </div>

        {/* FACEBOOK LIKES */}
        <div className="overview-card">
          <div className="overview-title-card">
            <span>Likes</span>
            <img src={iconFacebook} alt="facebook" />
          </div>
          <div className="overview-data-card">
            <span className="overview-card-number">52</span>
            <span className="overview-card-statistic">
              <img src={iconUp} alt="up" />
              2%
            </span>
          </div>
        </div>

        {/* INSTAGRAM LIKES */}
        <div className="overview-card">
          <div className="overview-title-card">
            <span>Likes</span>
            <img src={iconInstagram} alt="instagram" />
          </div>
          <div className="overview-data-card">
            <span className="overview-card-number">5350</span>
            <span className="overview-card-statistic">
              <img src={iconUp} alt="up" />
              234%
            </span>
          </div>
        </div>

        {/* INSTAGRAM PROFILE VIEWS */}
        <div className="overview-card">
          <div className="overview-title-card">
            <span>Profile Views</span>
            <img src={iconInstagram} alt="instagram" />
          </div>
          <div className="overview-data-card">
            <span className="overview-card-number">13542</span>
            <span className="overview-card-statistic">
              <img src={iconUp} alt="up" />
              28%
            </span>
          </div>
        </div>

        {/* TWITTER RETWEETS */}
        <div className="overview-card">
          <div className="overview-title-card">
            <span>Retweets</span>
            <img src={iconTwitter} alt="twitter" />
          </div>
          <div className="overview-data-card">
            <span className="overview-card-number">133</span>
            <span className="overview-card-statistic">
              <img src={iconUp} alt="up" />
              4%
            </span>
          </div>
        </div>

        {/* TWITTER LIKES */}
        <div className="overview-card">
          <div className="overview-title-card">
            <span>Likes</span>
            <img src={iconTwitter} alt="twitter" />
          </div>
          <div className="overview-data-card">
            <span className="overview-card-number">1533</span>
            <span className="overview-card-statistic">
              <img src={iconUp} alt="up" />
              9%
            </span>
          </div>
        </div>

        {/* YOUTUBE LIKES */}
        <div className="overview-card">
          <div className="overview-title-card">
            <span>Likes</span>
            <img src={iconYoutube} alt="youtube" />
          </div>
          <div className="overview-data-card">
            <span className="overview-card-number">34233</span>
            <span className="overview-card-statistic">
              <img src={iconUp} alt="up" />
              43%
            </span>
          </div>
        </div>

        {/* YOUTUBE TOTAL VIEWS */}
        <div className="overview-card">
          <div className="overview-title-card">
            <span>Total Views</span>
            <img src={iconYoutube} alt="youtube" />
          </div>
          <div className="overview-data-card">
            <span className="overview-card-number">75233</span>
            <span className="overview-card-statistic">
              <img src={iconUp} alt="up" />
              103%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
