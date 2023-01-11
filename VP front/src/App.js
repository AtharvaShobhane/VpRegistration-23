/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import PaymentSuccess from "./PaymentSuccess";
import TestForm from "./TestForm";
// import CampusAmbForm from "./CampusAmbForm";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import RegClosed from "./RegClosed";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/success" element={<PaymentSuccess />} />
        {/* <Route path="/registerasamb" element={<CampusAmbForm />} /> */}
        <Route path="registerforvp" element={<TestForm />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/closed" element={<RegClosed />} />
        <Route path="/" element={<TestForm />} />
      </Routes>
    </div>
  );
}

export default App;
