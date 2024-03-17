import React from "react";
import LottieView from "lottie-react-native";

function ErrorAnimation() {
  return <LottieView source={require("../../assets/loading.json")} style={{ width: "100%", height: "100%" }}
                     autoPlay
                     loop
  />;
}

export default ErrorAnimation;
