import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="m-top-container">
      <div className="m-midde-container">
        <a
          target="_blank"
          data-aos="fade-up"
          href="https://www.facebook.com/durrafashion1/?mibextid=ZbWKwL"
          className="item"
        >
          <span>facebook</span>
        </a>
        <a
          target="_blank"
          data-aos="fade-up"
          href="https://instagram.com/durrafashion1?igshid=YmMyMTA2M2Y="
          className="item"
        >
          {" "}
          <span>instagram</span>
        </a>
        <a
          data-aos="fade-up"
          href="https://wa.me/+9647706669988"
          className="item"
        >
          {" "}
          <span>للطلب اونلاين</span>
        </a>
        <a
          data-aos="fade-up"
          href="https://wa.me/+9647727106456"
          className="item"
        >
          <span>ارقام الشكاوى</span>
        </a>
      </div>
    </div>
  );
};

export default MainPage;
