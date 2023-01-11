/** @format */

import React from "react";
import "./PaymentSuccess.css";

import Lottie from "react-lottie";
import * as rocket2 from "./assets/94021-startup.json";
// import font
import "./assets/fonts/batmfa__.ttf";

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: rocket2.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: rocket2.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function PaymentSuccess() {
  return (
    <>
      <div
        className='mainContainer'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div className='boxContainer'>
          <div className='rocket'>
            <Lottie options={defaultOptions2} height='40%' width='40%' />
          </div>
          <h2 className='SuccessText'>Successfully Registered for</h2>
          <h2 className='VishwapreneurName'> Vishwapreneur'22</h2>
        </div>
        <div className='InfoContainer'>
          <h2>You'll Receive a Mail with All instructions</h2>
          <h2>
            Check the Spam/Junk/Promotion folder for the registration Email
          </h2>
        </div>
      </div>

      <div
        className='mainContainer2'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div className='boxContainer2'>
          <div className='rocket2'>
            <Lottie options={defaultOptions1} height={150} width={150} />
          </div>
          <h2 className='SuccessText2'>Successfully Registered for</h2>
          <h2 className='VishwapreneurName2'> Vishwapreneur'22</h2>
        </div>
        <div className='InfoContainer2'>
          <h3>You'll Receive a Mail Containing</h3>
          <h3> All instructions</h3>
          <h3>Check the Spam/Junk/Promotion </h3>
          <h3> folder for the registration Email</h3>
        </div>
      </div>
    </>
  );
}

export default PaymentSuccess;
