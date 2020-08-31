import React from "react";
import {AppBar} from "@material-ui/core";

import CustomAppBar from "./CustomAppBar";

export default function Navbar() {
  return (
    <div>
      <AppBar>
        <CustomAppBar></CustomAppBar>
      </AppBar>
    </div>
  );
}
