import React from "react";
import { Typography } from "@material-ui/core";

function Footer() {
  return (
    <footer style={{ height: "4rem", backgroundColor: "#000" }}>
      <Typography align="center" style={{ color: "#ffffff", padding: "1rem" }}>
        Copyright &copy; {new Date().getFullYear()} EBEYONDS All rights reserved
      </Typography>
    </footer>
  );
}

export default Footer;
