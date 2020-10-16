import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import iconUp from "../../Images/icon-up.svg";
import iconFacebook from "../../Images/icon-facebook.svg";
import iconTwitter from "../../Images/icon-twitter.svg";
import iconInstagram from "../../Images/icon-instagram.svg";
import iconYoutube from "../../Images/icon-youtube.svg";

function Dash() {
  const [instagramData, setInstagramData] = useState({
    edge_followed_by: {
      count: 0
    }
  });
  const [instagramUser, setInstagramUser] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.instagram.com/${instagramUser}/?__a=1`)
      .then((res) => {
        if (res.data.graphql !== undefined) {
          setInstagramData(res.data.graphql.user);
        } else {
          setInstagramData({
            edge_followed_by: {
              count: 0
            }
          });
        }
      })
      .catch(Error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instagramUser]);

  return (
    <div className="dash-container">
      {/* FACEBOOK */}
      <div
        className="card-dash-container"
        style={{ borderTop: "3px solid hsl(208, 92%, 53%)" }}
      >
        <div className="user-container">
          <img src={iconFacebook} alt="facebook" />
          <span>@</span>
        </div>
        <div className="number-followers-container">
          <span className="number-followers">0</span>
          <span className="followers-name">FOLLOWERS</span>
        </div>
        <span className="statics-container">
          <img src={iconUp} alt="Up" />
          123 Today
        </span>
        <input type="url" placeholder="Type your url" />
      </div>

      {/* TWITTER */}
      <div
        className="card-dash-container"
        style={{ borderTop: "3px solid hsl(203, 89%, 53%)" }}
      >
        <div className="user-container">
          <img src={iconTwitter} alt="twitter" />
          <span>@userface</span>
        </div>
        <div className="number-followers-container">
          <span className="number-followers">1934</span>
          <span className="followers-name">FOLLOWERS</span>
        </div>
        <span className="statics-container">
          <img src={iconUp} alt="Up" />
          123 Today
        </span>
        <input type="url" placeholder="Type your url" />
      </div>

      {/* INSTAGRAM */}
      <div
        className="card-dash-container"
        style={{ borderTop: "3px solid hsl(329, 70%, 58%)" }}
      >
        <div className="user-container">
          <img src={iconInstagram} alt="instagram" />
          <span>@{instagramUser}</span>
        </div>
        <div className="number-followers-container">
          <span className="number-followers">
            {instagramData["edge_followed_by"].count}
          </span>
          <span className="followers-name">FOLLOWERS</span>
        </div>
        <span className="statics-container">
          <img src={iconUp} alt="Up" />
          123 Today
        </span>
        <input
          type="url"
          placeholder="Type your @"
          value={instagramUser}
          onChange={(e) => setInstagramUser(e.target.value)}
        />
      </div>

      {/* YOUTUBE */}
      <div
        className="card-dash-container"
        style={{ borderTop: "3px solid hsl(348, 97%, 39%)" }}
      >
        <div className="user-container">
          <img src={iconYoutube} alt="facebook" />
          <span>@userface</span>
        </div>
        <div className="number-followers-container">
          <span className="number-followers">1934</span>
          <span className="followers-name">FOLLOWERS</span>
        </div>
        <span className="statics-container">
          <img src={iconUp} alt="Up" />
          123 Today
        </span>
        <input type="url" placeholder="Type your url" />
      </div>
    </div>
  );
}

export default Dash;
