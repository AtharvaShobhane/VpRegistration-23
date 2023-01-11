/** @format */

import React from "react";
import * as rocket from "../assets/rocketLoading.json";
import * as success from "../assets/paymentSuccess.json";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: rocket.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function preLoader() {
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  return (
    <div>
      <h1>
          
      </h1>
    </div>
  );
}

export default preLoader;
