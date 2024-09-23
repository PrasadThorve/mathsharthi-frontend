import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import ReactLoading from "react-loading";
import { useSelector, useDispatch } from "react-redux";
import { clearError } from "../store/store";
import EqualizerText from "./AnimationText";
import { Alert } from "@mui/material"; // Using Material-UI Alert for displaying error

function ChatContainer({ renderMessageContent }) {
  const { chats, currentChatIndex, loading, error } = useSelector(
    (state) => state.chat
  );
  const dispatch = useDispatch();
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats[currentChatIndex]?.messages]);

  return (
    <Box
      style={{
        width: "100%",
      }}
    >
      <EqualizerText />
      {chats[currentChatIndex]?.messages.map((message, index) => (
        <Box
          key={index}
          sx={{
            fontSize: "14px",
            color: "#000000",
            fontWeight: 400,
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: message.role === "user" ? "flex-end" : "flex-start",
          }}
        >
          <Box
            sx={{
              width: "fit-content",
              maxWidth: "50%",
              height: "fit-content",
              maxHeight: "50%",
              padding: "10px",
              backgroundColor: message.role === "user" ? "#f0f4fa" : "#e0beed",
              borderRadius: "10px",
            }}
          >
            {renderMessageContent(message.content)}
          </Box>
        </Box>
      ))}
      {error && (
        <Alert
          severity="error"
          onClose={() => {
            dispatch(clearError());
          }}
        >
          {error}
        </Alert>
      )}{" "}
      {/* Error message */}
      {loading === true && (
        <Box className="message-assistant">
          <ReactLoading type="bubbles" color="#000" height={24} width={24} />
        </Box>
      )}
      <div ref={chatEndRef} />
    </Box>
  );
}

export default ChatContainer;
