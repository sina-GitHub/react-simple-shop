import React from "react";
// import {useTranslation} from "react-i18next";

export default function Home() {
  //   const {t} = useTranslation();

  return (
    <div
      style={{
        backgroundImage: `url(${require("../assets/images/404.jpg")})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "600px",
      }}
    ></div>
  );
}
