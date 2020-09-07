import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "@material-ui/core";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const { t } = useTranslation();

  let user = location.pathname.split("/").reverse()[0].split("-");

  return (
    <Container style={{ padding: "80px 0 50px 0" }}>
      <h3>{t("wip")}</h3>
      {user.map((item, index) => {
        return (
          <h1
            key={index}
            style={{
              display: "inline",
            }}
          >{`${item} `}</h1>
        );
      })}
    </Container>
  );
}
