import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Badge } from "@mui/material";

export default function Persons(props) {
  return (
    <>
      <div className="person">
        <Card sx={{ width: "100%" }}>
          <CardHeader
            className="card-head"
            avatar={
              <Avatar
                src={props.image}
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
              ></Avatar>
            }
            action={
              <Badge
                color="secondary"
                badgeContent={99}
                sx={{ margin: "0px" }}
              />
            }
            title={props.name}
            subheader={props.message}
          />
        </Card>

        {/* <img src={props.image}></img>
        <h3>{props.name}</h3>
        <p>{props.message}</p> */}
      </div>
    </>
  );
}
