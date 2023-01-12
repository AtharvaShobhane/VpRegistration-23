/** @format */
// import './assets/vp-logo.png';
import React, { useState } from "react";
// import { useForm } from "react-hook-form"
// style
import {
  Button,
  Checkbox,
  TextField,
} from "@mui/material";
import "./TestForm.css";
// backend req handler
import axios from "axios";
// router
import { useNavigate } from "react-router-dom";
// import font
import "./assets/fonts/batmfa__.ttf";
import { alpha, styled } from '@mui/material/styles';
import logo from "./assets/vp-logo.png";
export default function Form() {
  // const bgImg =
  //   "Vp-Coming-Soon/src/assets/vp-logo.png";

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
      "https://vishwapreneur-back.herokuapp.com/api/v1/payment/orders"
    );

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_live_PJeAjNSL4XrBIN", // Enter the Key ID generated from the Dashboard
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
          "https://vishwapreneur-back.herokuapp.com/api/v1/payment/success",
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
    "https://vishwapreneur-back.herokuapp.com/api/v1/registerEvent";

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
  const resetAll = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setCollege("");
    setCity("");
    setCode("")
  }
  // const CssTextField = styled(TextField)({
  //   '& label.Mui-focused': {
  //     color: '#ffab0f',
  //   },
  //   '& .MuiInput-underline:after': {
  //     borderBottomColor: 'green',
  //   },
  //   '& .MuiOutlinedInput-root': {
  //     '& fieldset': {
  //       borderColor: 'white',
  //     },
  //     '&:hover fieldset': {
  //       borderColor: '#ffab0f',
  //     },
  //     '&.Mui-focused fieldset': {
  //       borderColor: '#ffab0f',
  //     },
      
  //     multilineColor: {
  //       color: 'red'
  //     }
  //   },
  // });
  return (
    <>
      <section className='MainContainer'>
        <div className='register'>
          <div className='col-2'>
            <img src={logo} alt='Vishwapreneur' />
            Vishwapreneur'23
          </div>
          <div className='form-cnt'>
            <h2>Registration Form</h2>
            {/* <span>Experience an eSummit like Never before</span> */}

            <form id='form' className='flex flex-col'>
              <div className='row-1'>

                <TextField
                  // className='pd-r'
                  
                  autoCapitalize='ON'
                  autoComplete='OFF'
                  id='outlined-basic'
                  label='First Name'
                  name='firstName'
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    
                  }}
                  // margin="dense"
                  variant='outlined'
                  multiline
                  inputProps={{ style: { color: "#ffab0f" } }}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  
                />
                <TextField
                  
                  autoCapitalize='ON'
                  autoComplete='OFF'
                  id='outlined-basic'
                  label='Last Name'
                  name='lastName'
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  variant='outlined'
                  multiline
                  inputProps={{ style: { color: "#ffab0f" } }}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                />


                <TextField
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  autoCapitalize='ON'
                  autoComplete='OFF'
                  id='outlined-basic'
                  label='Email'
                  name='email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  variant='outlined'
                  multiline
                  inputProps={{ style: { color: "#ffab0f" } }}
                  
                />
              </div>
              <div className='row-2'>
                <TextField
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  autoCapitalize='ON'
                  autoComplete='OFF'
                  id='outlined-basic'
                  label='Phone Number'
                  name='phoneNumber'
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  variant='outlined'
                  multiline
                  inputProps={{ style: { color: "#ffab0f" } }}
                />

                <TextField
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  autoCapitalize='ON'
                  autoComplete='OFF'
                  id='outlined-basic'
                  label='Referral Code'
                  name='code'
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                  variant='outlined'
                  multiline
                  inputProps={{ style: { color: "#ffab0f" } }}
                />
              </div>
              <div className='row-3'>
                <TextField
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  autoCapitalize='ON'
                  autoComplete='OFF'
                  id='outlined-basic'
                  label='College'
                  name='college'
                  value={college}
                  onChange={(e) => {
                    setCollege(e.target.value);
                  }}
                  variant='outlined'
                  multiline
                  inputProps={{ style: { color: "#ffab0f" } }}
                />
                <TextField
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  autoCapitalize='ON'
                  autoComplete='OFF'
                  id='outlined-basic'
                  label='City'
                  name='city'
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  variant='outlined'
                  multiline
                  inputProps={{ style: { color: "#ffab0f" } }}
                />
              </div>
              {/* {(firstName &&
                lastName &&
                city &&
                college &&
                phoneNumber &&
                email) && (
                  <Button onClick={displayRazorpay}>Proceed to payment</Button>
                )} */}
            </form>
            <div className='privacypolicy'>

              <p>
                <Checkbox />
                {" "}
                I Agree to <a href='https://vishwapreneur.in/privacypolicy'>Privacy Policy</a> and{" "}
                <a href='https://vishwapreneur.in/termsAndConditions'> Terms and Conditions</a> of Vishwapreneur
              </p>
              <p> Need Any Assistance? </p>
              <p>Contact Us at : <a href="mailto:contact@vishwapreneur.in">contact@vishwapreneur.in</a> / <a href="telto:9923411116">+919923411116</a></p>
            </div>
            <div className="buttons">
              <div className="reset1">
                <Button onClick={resetAll}>Reset All</Button>
                {/* <div>< input type="reset" value="Reset All"/></div> */}
              </div>
              <div className="submit">
               <Button onClick={displayRazorpay} >Submit Form</Button>         
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
