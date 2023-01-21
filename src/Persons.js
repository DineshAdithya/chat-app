import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Badge } from "@mui/material";

export default function Persons(props) {
  return (
    <>
      <div
        className={`person ${
          props.selectedIndex === props.index && "person-selected"
        }`}
        onClick={props.onSelect}
      >
        <Card sx={{ width: "99%" }}>
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
                sx={{ margin: "8px" }}
              />
            }
            title={props.name}
            subheader={props.message}
          />
        </Card>
      </div>
    </>
  );
}
