import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="m-top-container">
      <div className="m-midde-container">
        <a
          href="https://www.facebook.com/durrafashion1/?mibextid=ZbWKwL"
          className="item"
        >
          facebook
        </a>
        <a
          href="https://instagram.com/durrafashion1?igshid=YmMyMTA2M2Y="
          className="item"
        >
          {" "}
          instagram
        </a>
        <a href="https://wa.me/+9647706669988" className="item">
          {" "}
          للطلب اونلاين
        </a>
        <a href="https://wa.me/+9647727106456" className="item">
          ارقام الشكاوى
        </a>
      </div>
    </div>
  );
};

export default MainPage;
