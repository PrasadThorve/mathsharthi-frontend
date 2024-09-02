// export default GoogleDriveUpload;
import React, { useState } from "react";
import useDrivePicker from "react-google-drive-picker";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { handleFileChange } from "../services/chatHandlers";
import GoogleDrivelogo from "../public/GoogleDrivelogo.png";

const CLIENT_ID =
  "424884035722-obhv2nos0k46gvvf39n5ih085meia9vm.apps.googleusercontent.com";
const DEVELOPER_KEY = "AIzaSyBm1AMf_-dMk3EpCYpxiAf-MU6D8qwUoII";

const GoogleDriveUpload = ({ fileInputRef }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [openPicker, authResponse] = useDrivePicker();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { chats, currentChatIndex } = useSelector((state) => state.chat);

  const handleOpenPicker = () => {
    openPicker({
      clientId: CLIENT_ID,
      developerKey: DEVELOPER_KEY,
      viewId: "DOCS",
      multiselect: true,
      navHidden: true,
      authImmediate: false,
      mimeTypes: ["application/pdf", "image/png"],
      callbackFunction: (data) => {
        if (data.action === "picked") {
          setSelectedFiles(data.docs);
          console.log("Files chosen:", data.docs);
          handleFileChange(data.docs, dispatch, chats, currentChatIndex, true); // true indicates Google Drive files
          if (
            location.pathname === "/" ||
            location.pathname === "/chatwithdoc"
          ) {
            navigate("/chats");
          }
        }
      },
      cancelCallback: () => {
        console.log("Picker cancelled");
      },
    });
  };

  return (
    <form style={{ width: "38%", alignSelf: "flex-end", textAlign: "right" }}>
      <button
        type="button"
        onClick={handleOpenPicker}
        style={{
          borderWidth: "0px",
          outline: "none",
          backgroundColor: "transparent",
        }}
      >
        <img
          src={GoogleDrivelogo}
          alt="drive"
          style={{ height: "30px", width: "50px" }}
        />
        <br />
        <span style={{ marginBottom: "30px" }}>upload from drive</span>
      </button>
    </form>
  );
};

export default GoogleDriveUpload;
