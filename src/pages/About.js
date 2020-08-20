import React, {Suspense} from "react";
import {useTranslation} from "react-i18next";
import {Container} from "@material-ui/core";

export default function Home() {
  const {t} = useTranslation();

  return (
    <Suspense fallback="loading">
      <Container style={{padding: "80px 0 50px 0"}}>
        <h1>{t("wip")}</h1>
      </Container>
    </Suspense>
  );
}
