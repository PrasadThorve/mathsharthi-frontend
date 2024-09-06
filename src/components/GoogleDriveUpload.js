import React, { useState } from "react";
import useDrivePicker from "react-google-drive-picker";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { handleFileChange } from "../services/chatHandlers";
import GoogleDrivelogo from "../public/GoogleDrivelogo.png";

// Replace these keys with your own Google API credentials
const CLIENT_ID =
  "424884035722-obhv2nos0k46gvvf39n5ih085meia9vm.apps.googleusercontent.com";
const DEVELOPER_KEY = "AIzaSyBm1AMf_-dMk3EpCYpxiAf-MU6D8qwUoII";

const GoogleDriveUpload = ({ fileInputRef }) => {
  // State to keep track of the selected files from Google Drive
  const [selectedFiles, setSelectedFiles] = useState([]);
  
  // Hook to open Google Drive Picker
  const [openPicker, authResponse] = useDrivePicker();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { chats, currentChatIndex } = useSelector((state) => state.chat);

  // Function to handle the Google Drive Picker opening
  const handleOpenPicker = () => {
    openPicker({
      clientId: CLIENT_ID,
      developerKey: DEVELOPER_KEY,
      viewId: "DOCS",
      multiselect: true, // Allow multiple file selection
      navHidden: true,
      authImmediate: false,
      mimeTypes: ["application/pdf", "image/png"], // Specify allowed file types
      callbackFunction: (data) => {
        if (data.action === "picked") {
          setSelectedFiles(data.docs); // Set selected files in state
          console.log("Files chosen:", data.docs);
          
          // Handle file selection logic and update state in Redux store
          handleFileChange(data.docs, dispatch, chats, currentChatIndex, true); 
          
          // Navigate to the 'chats' route if on specific pages
          if (location.pathname === "/" || location.pathname === "/chatwithdoc") {
            navigate("/chats");
          }
        }
      },
      cancelCallback: () => {
        console.log("Picker cancelled"); // Log when the picker is cancelled
      },
    });
  };

  return (
    <form style={{ width: "38%", alignSelf: "flex-end", textAlign: "right" }}>
      <button
        type="button"
        onClick={handleOpenPicker} // Trigger picker on click
        style={{
          borderWidth: "0px",
          outline: "none",
          backgroundColor: "transparent", // Transparent background for button
        }}
      >
        <img
          src={GoogleDrivelogo}
          alt="drive"
          style={{ height: "30px", width: "50px" }}
        />
        <br />
        <span style={{ marginBottom: "30px" }}>Upload from Drive</span>
      </button>
    </form>
  );
};

export default GoogleDriveUpload;
