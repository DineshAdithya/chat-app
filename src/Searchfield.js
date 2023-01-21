import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ToggleButton from "./ToggleButton";

export default function BasicTextFields() {
  return (
    <>
      <TextField
        size="small"
        sx={{ margin: "4.2px" }}
        id="outlined-basic"
        label="search"
        variant="outlined"
        fullWidth
      />
    </>
  );
}
