/** @format */
// import './assets/vp-logo.png';
import React, { useState } from "react";
// import { useForm } from "react-hook-form"
// style
import { Button, TextField } from "@mui/material";
import "./TestForm.css";
// backend req handler
// import axios from "axios";
// router
import { useNavigate } from "react-router-dom";
// import font
import "./assets/fonts/batmfa__.ttf";
// import { alpha, styled } from "@mui/material/styles";
import logo from "./assets/vp-LOGO 1.png";
export default function Form() {
  // const bgImg =
  //   "Vp-Coming-Soon/src/assets/vp-logo.png";

//   const [paymentSucceded, setPaymentSucceded] = useState(false);
  // const [registered, setRegistered] = useState(false);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   payment Methods
//   function loadScript(src) {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         resolve(false);
//       };
//       document.body.appendChild(script);
//     });
//   }

  // async function displayRazorpay() {
  //   const res = await loadScript(
  //     "https://checkout.razorpay.com/v1/checkout.js"
  //   );

  //   if (!res) {
  //     alert("Razorpay SDK failed to load. Are you online?");
  //     return;
  //   }

  //   const result = await axios.post(
  //     "https://registration-back-k5iw.onrender.com/api/v1/payment/orders"
  //   );

  //   if (!result) {
  //     alert("Server error. Are you online?");
  //     return;
  //   }

  //   const { amount, id: order_id, currency } = result.data;

  //   const options = {
  //     key: "rzp_test_V1g5UswCDJjeD1", // Enter the Key ID generated from the Dashboard
  //     amount: amount.toString(),
  //     currency: currency,
  //     name: "Vishwapreneur ",
  //     description: "Entry Fee ₹300 + ₹6.30 Convenience Charges",
  //     order_id: order_id,
  //     handler: async function (response) {
  //       const data = {
  //         orderCreationId: order_id,
  //         razorpayPaymentId: response.razorpay_payment_id,
  //         razorpayOrderId: response.razorpay_order_id,
  //         razorpaySignature: response.razorpay_signature,
  //       };

  //       const result = await axios.post(
  //         "https://registration-back-k5iw.onrender.com/api/v1/payment/success",
  //         data
  //       );

  //       alert(result.data.msg);
  //       setPaymentSucceded(true);
  //     },
  //     notes: {
  //       address: "Example Corporate Office",
  //     },
  //     theme: {
  //       color: "#1A0F5B",
  //     },
  //   };

  //   const paymentObject = new window.Razorpay(options);
  //   paymentObject.open();
  // }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [college, setCollege] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const baseURL =
    "https://registration-back-k5iw.onrender.com/api/v1/registerEvent";
    const [errors, setErrors] = useState({});

    //------------------------------------------------------------
    /*
  const registrationSuccess = async () => {
    
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
      .then(setRegistered(true));
  };
};
// navigate("/success", { replace: true })
  // if (paymentSucceded) {
  //   submitNew();
  // }
  if (registered) {
    // submitNew();
    navigate("/success", { replace: true })
  }
  */
//------------------------------------------------------------------
//-----------------------------------------------------------------
const handleSubmit = async (e) => {
  e.preventDefault();

   // Validate form fields
   let formErrors = {};
   if (!firstName) {
     formErrors.name = '*Name is required';
   }
   if (!email) {
     formErrors.email = '*Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      formErrors.email = '*Invalid email address';
    }
   
   if (!phoneNumber) {
     formErrors.phoneNumber = '*Phone number is required';
   }else if (!/^\d{10}$/.test(phoneNumber)) {
    formErrors.phoneNumber = '*Phone number must be 10 digits';
  }

    // If there are errors, update the state and return
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

  setLoading(true);
  try {
    const formData = { firstName: firstName.toLowerCase(), lastName: lastName.toLowerCase(), phoneNumber,
      email, code, college, city }
      console.log(formData);
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.status === 200) {
      navigate('/success');
    } else {
      setError(await response.text());
      console.log(response)
    }
    setLoading(false);
    // console.log(await response.text());
  } catch (error) {
    setError(error.message);
    console.error(error);
  }
  setLoading(false);
};


  const resetAll = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setCollege("");
    setCity("");
    setCode("");
  };
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
    {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
      
      <section className="MainContainer">
        <div className="register">
          <div className="col-2">
            <img id="logo" src={logo} alt="Vishwapreneur" />
            <div className="title-cnt">
              <p id="title">Vishwapreneur'23</p>
            </div>
          </div>
          <div className="form-cnt">
            <h2>Registration Form</h2>
            {/* <span>Experience an eSummit like Never before</span> */}

            <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
              <div className="row-1">
                <TextField
                  required
                  sx={{ border: "outset #ffab0f 1px" }}
                  // className='pd-r'

                  autoCapitalize="ON"
                  autoComplete="OFF"
                  id="outlined-basic"
                  label="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  // margin="dense"
                  variant="filled"
                  multiline
                  inputProps={{ style: { color: "#ffab0f" } }}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  color="warning"
                />
                {errors.firstName && <span>{errors.firstName}</span>}
                <span></span>
                <br></br>
                <TextField
                  required
                  sx={{ border: "outset #ffab0f 1px" }}
                  autoCapitalize="ON"
                  autoComplete="OFF"
                  id="outlined-basic"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  variant="filled"
                  multiline
                  inputProps={{ style: { color: "#ffab0f" } }}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  color="warning"
                />
                <br></br>

                <span></span>
                <TextField
                  required
                  sx={{ border: "outset #ffab0f 1px" }}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  autoCapitalize="ON"
                  autoComplete="OFF"
                  id="outlined-basic"
                  label="Phone Number"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  variant="filled"
                  multiline
                  inputProps={{ style: { color: "#ffab0f" } }}
                  color="warning"
                />
                  

              </div>
              {errors.phoneNumber && <span className="m-span" style={{width:'15rem', fontFamily:'Poppins',fontSize:'0.8rem',color:'#ff0033'}}>{errors.phoneNumber} </span>}
              <div className="row-2">
                <TextField
                  required
                  sx={{ border: "outset #ffab0f 1px" , width:"100%"}}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  autoCapitalize="ON"
                  autoComplete="OFF"
                  id="outlined-basic"
                  label="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="filled"
                  multiline
                  inputProps={{ style: { color: "#ffab0f" } }}
                  color="warning"
                  />
                
              </div>
              {errors.email && <span style={{width:'11rem', fontFamily:'Poppins',fontSize:'0.8rem',color:'#ff0033'}}>{errors.email} </span>}

              <div className="row-3">
                <TextField
                  required
                  sx={{ border: "outset #ffab0f 1px" }}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  autoCapitalize="ON"
                  autoComplete="OFF"
                  id="outlined-basic"
                  label="College"
                  name="college"
                  value={college}
                  onChange={(e) => {
                    setCollege(e.target.value);
                  }}
                  variant="filled"
                  multiline
                  inputProps={{ style: { color: "#ffab0f" } }}
                  color="warning"
                />
                <span></span>
                <br></br>

                <TextField
                  required
                  sx={{ border: "outset #ffab0f 1px" }}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  autoCapitalize="ON"
                  autoComplete="OFF"
                  id="outlined-basic"
                  label="City"
                  name="city"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  variant="filled"
                  multiline
                  inputProps={{ style: { color: "#ffab0f" } }}
                  color="warning"
                />
                <span></span>
                <br></br>
                <TextField
                  sx={{ border: "outset #ffab0f 1px" }}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  autoCapitalize="ON"
                  autoComplete="OFF"
                  id="outlined-basic"
                  label="Referral Code"
                  name="code"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                  variant="filled"
                  multiline
                  inputProps={{ style: { color: "#ffab0f" } }}
                  color="warning"
                />
                <span></span>
                
              </div>
              {firstName &&
                lastName &&
                city &&
                college &&
                phoneNumber &&
                email && (
                  <div className="buttons">
                    <div className="reset1">
                      <Button onClick={resetAll}>Reset All</Button>
                      {/* <div>< input type="reset" value="Reset All"/></div> */}
                    </div>
                    <div className="submit">
                      <Button type = "submit">
                        Regsiter Now!
                      </Button>
                    </div>
                  </div>
                )}
            </form>
            <div className="privacypolicy">
              <p id="contactUs"> Need Any Assistance? </p>
              <p id="mail">
                Contact Us:{" "}
                <a href="mailto:contact@vishwapreneur.in">
                  contact@vishwapreneur.in
                </a>
              </p>
              <p id="phone">
                <a href="tel:9923411116">+919923411116</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      )}
  {error && (
   navigate('/error')
  )}

    </>
  );
}