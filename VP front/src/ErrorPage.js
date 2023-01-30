import React from 'react'
import "./TestForm.css";
import { Button, TextField } from "@mui/material";
export default function Error() {
 
    return (
        <>
        <div className="mainContainer2">
          <div className="boxContainer2">
            <div className="rocket2">
              <img
                src="https://res.cloudinary.com/da5mmxnn3/image/upload/v1674991383/VP-23/77334-error-warning-alert_phu3ge.gif"
                alt="success!"
              ></img>
            </div>
            <div className="SuccessText2 h2" style={{fontFamily:"Poppins",fontWeight:"600"}}>An Error Occured</div>
            <div className="VishwapreneurName2 h2">Vishwapreneur'23</div>
          </div>
          <div className="InfoContainer2">
            {/* <h5>You'll Receive a Mail Containing<br></br>All instructions<br></br>Check the Spam/Junk/Promotion<br></br>folder for the registration Email</h5> */}
          </div>
        </div>
        <div className="mainContainer">
          <div className="boxContainer">
            <div className="rocket">
              <img
                src="https://res.cloudinary.com/da5mmxnn3/image/upload/v1674991383/VP-23/77334-error-warning-alert_phu3ge.gif"
                alt="success!"
              ></img>
            </div>
            <div className="SuccessText h2" style={{fontFamily:"Poppins",fontWeight:"600"}}>An Error Occured</div>
            <div className="VishwapreneurName h2"> Vishwapreneur'23</div>
          </div>
          <div className="error-button">
          {/* <h5>You'll Receive a Mail Containing<br></br>All instructions<br></br>Check the Spam/Junk/Promotion<br></br>folder for the registration Email</h5> */}
          <Button style={{color:"white",fontWeight:"600",
  fontFamily: "Poppins"}}  href='https://register.vishwapreneur.in/'>
                        Try Again
                      </Button>
          </div>
        </div>
      </>
    
  )
}
