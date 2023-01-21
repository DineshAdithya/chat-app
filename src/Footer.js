import React from "react";
import TextField from "@mui/material/TextField";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AttachmentIcon from "@mui/icons-material/Attachment";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <IconButton>
          <AttachmentIcon />
        </IconButton>

        <TextField
          id="standard-basic"
          placeholder="Write a message"
          variant="standard"
          fullWidth
        />
        <IconButton>
          <SendIcon />
        </IconButton>
        <IconButton>
          <AddAPhotoIcon />
        </IconButton>
        <IconButton>
          <ChildCareIcon />
        </IconButton>
      </div>
    </>
  );
}
