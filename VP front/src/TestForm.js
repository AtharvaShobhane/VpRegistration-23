/** @format */

import React, { useState } from "react";
// import { useForm } from "react-hook-form"
// style
import { Button, Checkbox, TextField } from "@mui/material";
import "./TestForm.css";
// backend req handler
import axios from "axios";
// router
import { useNavigate } from "react-router-dom";
// import font
import "./assets/fonts/batmfa__.ttf";

export default function Form() {
  const bgImg =
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1648816348/Vishwapreneur/3Artboard_1-100_1_1_kh79sl.jpg";

  const [paymentSucceded, setPaymentSucceded] = useState(false);

  //   payment Methods
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
      "https://registration-back-k5iw.onrender.com/api/v1/payment/orders"
    );

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_GEczOA6jSaLJ1f", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Vishwapreneur ",
      description: "Entry Fee ₹300 + ₹6.30 Convenience Charges",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "https://registration-back-k5iw.onrender.com/api/v1/payment/success",
          data
        );

        alert(result.data.msg);
        setPaymentSucceded(true);
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [college, setCollege] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const baseURL =
    "https://registration-back-k5iw.onrender.com/api/v1/registerEvent";

  const participant = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    college: college,
    city: city,
  };
  let navigate = useNavigate();
  const submitNew = async () => {
    await axios
      .post(baseURL, participant)
      .then(navigate("/success", { replace: true }));
  };

  if (paymentSucceded) {
    submitNew();
  }
  return (
    <>
      <section className="MainContainer">
        <div className="register">
          <div className="col-2">
            <img src={bgImg} alt="Vishwapreneur" />
          </div>
          <div className="col-1">
            <h2>Book Your Seat Now!</h2>
            <span>Experience an eSummit like Never before</span>

            <form id="form" className="flex flex-col">
              <TextField
                required
                autoCapitalize="ON"
                autoComplete="OFF"
                id="outlined-basic"
                label="First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                variant="outlined"
              />
              <TextField
                required
                autoCapitalize="ON"
                autoComplete="OFF"
                id="outlined-basic"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                variant="outlined"
              />
              <TextField
                required
                autoCapitalize="ON"
                autoComplete="OFF"
                id="outlined-basic"
                label="Email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                variant="outlined"
              />
              <TextField
                required
                autoCapitalize="ON"
                autoComplete="OFF"
                id="outlined-basic"
                label="Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                variant="outlined"
              />
              <TextField
                autoCapitalize="ON"
                autoComplete="OFF"
                id="outlined-basic"
                label="Referral Code"
                name="code"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
                variant="outlined"
              />
              <TextField
                required
                autoCapitalize="ON"
                autoComplete="OFF"
                id="outlined-basic"
                label="College"
                name="college"
                value={college}
                onChange={(e) => {
                  setCollege(e.target.value);
                }}
                variant="outlined"
              />
              <TextField
                required
                autoCapitalize="ON"
                autoComplete="OFF"
                id="outlined-basic"
                label="City"
                name="city"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                variant="outlined"
              />
              {firstName &&
                lastName &&
                city &&
                college &&
                phoneNumber &&
                email && (
                  <Button onClick={displayRazorpay}>Proceed to payment</Button>
                )}
            </form>
            <div className="privacypolicy">
              <Checkbox />
              <p>
                {" "}
                I Agree to{" "}
                <a href="https://vishwapreneur.in/privacypolicy">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="https://vishwapreneur.in/termsAndConditions">
                  {" "}
                  Terms and Conditions
                </a>{" "}
                of Vishwapreneur
              </p>
            </div>
            <p> Need Any Assistance? </p>
            <p>
              Contact Us at :{" "}
              <a href="mailto:contact@vishwapreneur.in">
                contact@vishwapreneur.in
              </a>{" "}
              / <a href="telto:9011041122">+919011041122</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
