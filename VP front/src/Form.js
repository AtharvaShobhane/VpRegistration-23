/** @format */

import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
// import "./eventReg.css";
import axios from "axios";

function Form() {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post(
      "https://vishwapreneur-back.herokuapp.com/api/v1/payment/orders"
    );

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_BxJ3XS2sQdC47Y", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Vishwapreneur ",
      description: "Entry Fee",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "https://vishwapreneur-back.herokuapp.com/api/v1/payment/success",
          data
        );

        alert(result.data.msg);
      },
      prefill: {
        name: { firstName },
        email: { email },
        contact: { phoneNumber },
      },
      notes: {
        address: "Example Corporate Office",
      },
      theme: {
        color: "#1A0F5B",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className='main'>
      <div className='formBox'>
        <div className='leftContainer'>
          <div className='textInputField'>
            <TextField
              required
              id='outlined-basic'
              label='First Name'
              variant='outlined'
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            />
          </div>
          <div className='textInputField'>
            <TextField
              required
              id='outlined-basic'
              label='Last Name'
              variant='outlined'
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className='textInputField'>
            <TextField
              required
              id='outlined-basic'
              label='Email'
              variant='outlined'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className='textInputField'>
            <TextField
              required
              id='outlined-basic'
              label='Phone Number'
              variant='outlined'
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div className='textInputField'>
            <TextField
              required
              id='outlined-basic'
              label='College'
              variant='outlined'
              value={college}
              onChange={(e) => {
                setCollege(e.target.value);
              }}
            />
          </div>
          <div className='textInputField'>
            <TextField
              required
              id='outlined-basic'
              label='City'
              variant='outlined'
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <Button onClick={displayRazorpay}>Submit</Button>
        </div>
        <div className='rightContainer'>
          <h3>here goes images</h3>
        </div>
      </div>
    </div>
  );
}

export default Form;
