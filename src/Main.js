import React, { useContext } from "react";
import Card from "@mui/material/Card";
import { DataContext } from "./Context/DataProvider";

export default function Main() {
  const { selectedData } = useContext(DataContext);

  // const useStyles = makeStyles({
  //   leftText: {
  //     textAlign: "left",
  //   },
  // });
  // const classes = useStyles();

  return (
    <div className="main">
      <Card>{selectedData.message}</Card>
    </div>
  );
}
