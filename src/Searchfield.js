import * as React from "react";
import TextField from "@mui/material/TextField";

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
