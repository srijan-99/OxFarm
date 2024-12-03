

import React from "react";
import "./Card.css"; // Include your CSS file for styling

const Card = () => {
  return (
    <div className="card1">
      <div className="card-body">
        <div className="image_Heading">
          <div className="card_icon">
            <img
              className="w-100 h-100"
              src="../images/homePage2/iconpage2.svg"
              alt="Card Icon"
            />
          </div>
          <div className="Small_Card_Heading">
            Pendle{" "}
            <span className="firicon">
              <img
                className="w-100 h-100"
                src="../images/homepage/fairicon.svg"
                alt="Fair Icon"
              />
            </span>
          </div>
        </div>
        <ul className="SmallCardlistButton">
          <li>yield</li>
          <li>yield-trading</li>
          <li>fixed-rate</li>
        </ul>
        <div className="stats mt-3">
          <div className="tvf-stats">
            <div className="buttontextGroup">
              <span className="icon">
                <i className="fa-solid fa-dollar-sign text-black fw-bold"></i>
              </span>
              $426.1k
              <span className="lasttext">TVL</span>
            </div>
            <div className="buttontextGroup">
              <span className="icon">
                <i className="fa-solid fa-arrow-right-arrow-left text-black fw-bold"></i>
              </span>
              $160.3k
              <span className="lasttext">24h volume</span>
            </div>
          </div>
        </div>
        <div className="button_image_Box">
          <ul className="imagelist mb-0">
            <li>
              <img
                className="w-100 h-100"
                src="../images/homepage/iconlogo.svg"
                alt="Logo 1"
              />
            </li>
            <li>
              <img
                className="w-100 h-100"
                src="../images/homepage/iconlogo.svg"
                alt="Logo 2"
              />
            </li>
            <li>
              <img
                className="w-100 h-100"
                src="../images/homepage/iconlogo.svg"
                alt="Logo 3"
              />
            </li>
          </ul>
          <button className="btn viewbtn">
            View <span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
