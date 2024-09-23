import {
  setMessages,
  setUserInput,
  setLoading,
  setFileSelected,
  setError,
  clearError,
  setApiDialog,
} from "../store/store";
import { sendMessageToApi, uploadFileToApi } from "../services/serviceApi";

export const handleSendMessage = async (chats, currentChatIndex, dispatch) => {
  if (chats[currentChatIndex].userInput.trim()) {
    const newMessage = {
      role: "user",
      content: [{ type: "text", text: chats[currentChatIndex].userInput }],
    };
    const updatedMessages = [...chats[currentChatIndex].messages, newMessage];
    dispatch(
      setMessages({ chatIndex: currentChatIndex, messages: updatedMessages })
    );
    dispatch(setUserInput({ chatIndex: currentChatIndex, userInput: "" }));

    try {
      dispatch(setLoading(true));
      dispatch(clearError());
      const response = await sendMessageToApi(updatedMessages);

      if (response.messages) {
        const assistantMessageContent = response.messages
          .map((msg) => msg.content.map((c) => c.text || "").join(" "))
          .join("\n\n");

        const assistantMessage = {
          role: "assistant",
          content: [{ type: "text", text: assistantMessageContent }],
        };
        dispatch(
          setMessages({
            chatIndex: currentChatIndex,
            messages: [...updatedMessages, assistantMessage],
          })
        );
      }
    } catch (error) {
      console.error("Error sending message:", error);
      dispatch(setError("Failed to send message. Please try again."));
    } finally {
      dispatch(setLoading(false));
    }
  }
};

export const handleFileChange = async (
  event,
  dispatch,
  chats,
  currentChatIndex,
  isGoogleDrive = false
) => {
  dispatch(setFileSelected(true));

  if (isGoogleDrive) {
    try {
      dispatch(setLoading(true));
      dispatch(clearError());
      console.log("url as event", event);
      for (const file of event) {
        const fileUrl = file.url; // Get the Google Drive file URL

        console.log("drive url as", fileUrl);

        const newImageMessage = {
          role: "user",
          content: [
            { type: "image_url", text: file.name, image_url: { url: fileUrl } },
          ],
        };
        dispatch(
          setMessages({
            chatIndex: currentChatIndex,
            messages: [...chats[currentChatIndex].messages, newImageMessage],
          })
        );
      }
    } catch (error) {
      console.error("Error processing Google Drive file:", error);
      dispatch(setError("Failed to upload file. Please try again."));
    } finally {
      dispatch(setLoading(false));
    }
  } else {
    const file = event.target.files[0];

    console.log(file);
    if (file) {
      console.log("hello from file", file);

      try {
        dispatch(setLoading(true));
        dispatch(clearError());
        const response = await uploadFileToApi(file);

        if (response.image_url) {
          const newImageMessage = {
            role: "user",
            content: [
              {
                type: "image_url",
                text: file?.name,
                image_url: { url: response.image_url },
              },
            ],
          };
          dispatch(
            setMessages({
              chatIndex: currentChatIndex,
              messages: [...chats[currentChatIndex].messages, newImageMessage],
            })
          );
        } else if (response.image_urls) {
          const newImageMessages = response.image_urls.map((url) => ({
            role: "user",
            content: [
              { type: "image_url", text: file?.name, image_url: { url } },
            ],
          }));
          dispatch(
            setMessages({
              chatIndex: currentChatIndex,
              messages: [
                ...chats[currentChatIndex].messages,
                ...newImageMessages,
              ],
            })
          );
        }
      } catch (error) {
        if (error.response.status === 403) {
          dispatch(setApiDialog(true));
        } else {
          console.error("Error uploading file:", error);
          dispatch(setError(error.response?.data?.msg));
        }
      } finally {
        dispatch(setLoading(false));
      }
    }
  }
};

export const handleSendImageAsPDF = async (
  pdfBlob,
  dispatch,
  chats,
  currentChatIndex
) => {
  console.log("pdf", pdfBlob);
  try {
    dispatch(setLoading(true));
    dispatch(clearError());
    const response = await uploadFileToApi(new File([pdfBlob], "image.pdf"));
    if (response.image_url) {
      const newImageMessage = {
        role: "user",
        content: [
          { type: "image_url", image_url: { url: response.image_url } },
        ],
      };
      dispatch(
        setMessages({
          chatIndex: currentChatIndex,
          messages: [...chats[currentChatIndex].messages, newImageMessage],
        })
      );
    }
  } catch (error) {
    if (error.response.status === 403) {
      dispatch(setApiDialog(true));
    } else {
      console.error("Error uploading PDF:", error);
      dispatch(setError("Failed to send message. Please try again."));
    }
  } finally {
    dispatch(setLoading(false));
  }
};

export const handleCapture = async (
  imageSrc,
  dispatch,
  chats,
  currentChatIndex
) => {
  try {
    dispatch(setLoading(true));
    dispatch(clearError());
    const response = await fetch(imageSrc);
    const blob = await response.blob();

    const file = new File([blob], "captured-image.jpg", { type: "image/jpeg" });
    const uploadResponse = await uploadFileToApi(file);

    if (uploadResponse.image_url) {
      const newImageMessage = {
        role: "user",
        content: [
          { type: "image_url", image_url: { url: uploadResponse.image_url } },
        ],
      };
      dispatch(
        setMessages({
          chatIndex: currentChatIndex,
          messages: [...chats[currentChatIndex].messages, newImageMessage],
        })
      );
    } else if (response.image_urls) {
      const newImageMessages = uploadResponse.image_urls.map((url) => ({
        role: "user",
        content: [{ type: "image_url", image_url: { url } }],
      }));
      dispatch(
        setMessages({
          chatIndex: currentChatIndex,
          messages: [...chats[currentChatIndex].messages, newImageMessages],
        })
      );
    }
  } catch (error) {
    if (error.response.status === 403) {
      dispatch(setApiDialog(true));
    } else {
      console.error("Error capturing and uploading image:", error);
      dispatch(setError("Failed to upload picture. Please try again."));
    }
  } finally {
    dispatch(setLoading(false));
  }
};
