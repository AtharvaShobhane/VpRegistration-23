/** @format */

import React from "react";
import "./PaymentSuccess.css";

// import Lottie from "react-lottie";
// import * as rocket2 from "./assets/94021-startup.json";
// import font
import "./assets/fonts/batmfa__.ttf";
// const defaultOptions1 = {
//   loop: true,
//   autoplay: true,
//   animationData: rocket2.default,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };

function PaymentSuccess() {
  return (
    <>
      <div className="mainContainer2">
        <div className="boxContainer2">
          <div className="rocket2">
            <img
              src="https://res.cloudinary.com/da5mmxnn3/image/upload/v1674642431/Vishwapreneur/45722-rocket-loader_ovlgbf.gif"
              alt="success!"
            ></img>
          </div>
          <div className="SuccessText2 h2">Successfully Registered for</div>
          <div className="VishwapreneurName2 h2"> Vishwapreneur'23</div>
        </div>
        <div className="InfoContainer2">
          <h5>You'll Receive a Mail Containing<br></br>All instructions<br></br>Check the Spam/Junk/Promotion<br></br>folder for the registration Email</h5>
        </div>
      </div>
      <div className="mainContainer">
        <div className="boxContainer">
          <div className="rocket">
            <img
              src="https://res.cloudinary.com/da5mmxnn3/image/upload/v1674642431/Vishwapreneur/45722-rocket-loader_ovlgbf.gif"
              alt="success!"
            ></img>
          </div>
          <div className="SuccessText h2">Successfully Registered for</div>
          <div className="VishwapreneurName h2"> Vishwapreneur'23</div>
        </div>
        <div className="InfoContainer">
        <h5>You'll Receive a Mail Containing<br></br>All instructions<br></br>Check the Spam/Junk/Promotion<br></br>folder for the registration Email</h5>
        </div>
      </div>
    </>
  );
}

export default PaymentSuccess;