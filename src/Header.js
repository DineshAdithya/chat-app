import React, { useContext, useState } from "react";
import BoyIcon from "@mui/icons-material/Boy";
import CallIcon from "@mui/icons-material/Call";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DataContext } from "./Context/DataProvider";

// import { makeStyles } from "@mui/material";

export default function Header() {
  // const [message] = useState(null);
  const { selectedData } = useContext(DataContext);

  // const useStyles = makeStyles({
  //   leftText: {
  //     align: "left",
  //   },
  // });
  // const classes = useStyles();
  return (
    <div className="header">
      <Typography variant="h5" style={{ color: "#051121" }}>
        {selectedData.name}
      </Typography>
      {/* style={{ marginRight: "0px" }} */}
      <div>
        <IconButton>
          <BoyIcon />
        </IconButton>
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton>
          <FlutterDashIcon />
        </IconButton>
        <IconButton>
          <FolderOpenIcon />
        </IconButton>
      </div>
    </div>
  );
}
