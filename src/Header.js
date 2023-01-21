import React from "react";
import { ReactDOM } from "react";
import BoyIcon from "@mui/icons-material/Boy";
import CallIcon from "@mui/icons-material/Call";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

export default function Header() {
  return (
    <div className="header">
      <BoyIcon />
      <CallIcon />
      <FlutterDashIcon />
      <FolderOpenIcon />
    </div>
  );
}
