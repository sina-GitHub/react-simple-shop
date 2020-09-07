import React from "react";
export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${require("../assets/images/404.jpg")})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        position: "relative",
        top: "0",
      }}
    ></div>
  );
}
