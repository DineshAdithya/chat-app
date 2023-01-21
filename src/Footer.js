import React from "react";
import TextField from "@mui/material/TextField";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AttachmentIcon from "@mui/icons-material/Attachment";
import ChildCareIcon from "@mui/icons-material/ChildCare";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <AttachmentIcon />
        <TextField
          id="standard-basic"
          placeholder="Write a message"
          variant="standard"
          fullWidth
        />
        <AddAPhotoIcon />
        <ChildCareIcon />
      </div>
    </>
  );
}
