import React from "react";
import { ReactDOM } from "react";
import BoyIcon from "@mui/icons-material/Boy";
import CallIcon from "@mui/icons-material/Call";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { IconButton } from "@mui/material";

export default function Header() {
  return (
    <div className="header">
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
  );
}
