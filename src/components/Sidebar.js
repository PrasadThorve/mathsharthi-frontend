import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
  Divider,
  Typography,
} from "@mui/material";
import tectsharthilogo from "../public/techsharthilogo.png";
import { FaSquarePlus } from "react-icons/fa6";
import { BsFillFolderFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import {
  MdHistory,
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { GoStack } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CgMenuRound } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewChat, setCurrentChat, setLoading } from "../store/store";
import { AiOutlineAppstore } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import PlanModel from "./PlanModel";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { AppContext } from "../context";
import { IoMdPricetags } from "react-icons/io";
import { ToggleButton } from "./ToggleButton";

const Sidebar = ({ isSidebarOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [previousChatOpen, setPreviousChatOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const { selectedItem, setSelectedItem } = useContext(AppContext);

  const onIconClick = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const chats = useSelector((state) => state.chat.chats);

  const currentChatIndex = useSelector((state) => state.chat.currentChatIndex);

  const handleChatSelection = (index) => {
    dispatch(setCurrentChat(index));
    navigate("/chats");
  };

  const onPlusClick = () => {
    dispatch(setLoading(false));
    dispatch(addNewChat());
    navigate("/chats");
  };

  const onClickHome = () => {
    navigate("/");
  };

  const onClickChatHistory = () => {
    setPreviousChatOpen(!previousChatOpen);
  };

  const onClickPdf = () => {
    navigate("/chatwithdoc");
  };

  const onClickLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/login"); // Redirect to login page
  };

  const onClickAiwriter = () => {
    navigate("/aiwriter");
  };

  const drawerWidth = isSidebarOpen ? 70 : 180;
  // const togglebtn = isSidebarOpen ? "32px" : "140px";

  const RenderListItems = () => {
    const listOptions = [
      {
        text: "Chat PDF",
        icon: <BsFillFolderFill />,
        click: onClickPdf,
      },
      {
        text: "AI Writer",
        icon: <BsPencilSquare />,
        click: onClickAiwriter,
      },
      {
        text: "Work Space",
        icon: <GoStack />,
        click: () => {},
      },
    ];

    const handleClick = (index, optionClick) => {
      console.log(selectedItem);
      setSelectedItem(index);
      if (optionClick) {
        optionClick(); // Execute the click function if it exists
      }
    };

    return (
      <List
        component="ul"
        style={{
          marginLeft: "10px",
          padding: "10px",
          cursor: "pointer",
          marginTop: isMobile && "80px",
          width: "100%",
          // display: isSidebarOpen &&  "flex",
          // flexDirection: isSidebarOpen &&  "column",
          // justifyContent: isSidebarOpen &&  "center"
        }}
      >
        <button
          onClick={onPlusClick}
          style={{
            width: isSidebarOpen ? "30px" : "60%",
            height: "30px",
            color: "#ffffff",
            margin: "10px 20px 20px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: isSidebarOpen ? "transparent" : "#3c38ff",
            outline: "none",
            // padding: "",
            borderWidth: "0px",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          <FaSquarePlus
            style={{
              fontSize: isSidebarOpen ? "15px" : "10px",
              backgroundColor: isSidebarOpen && "#3c38ff",
              padding: isSidebarOpen && "1px",
              marginRight: !isSidebarOpen && "5px",
            }}
          />
          {!isSidebarOpen && " New Chat"}
        </button>
        {listOptions.map((option, index) => (
          <ListItem
            button
            key={index}
            component="li"
            onClick={() => handleClick(index, option.click)}
            style={{
              padding: "5px",
              margin: "10px 10px 0px 0px",
              cursor: "pointer",
              backgroundColor:
                !isSidebarOpen && selectedItem === index && "#828282",
            }}
          >
            {React.cloneElement(option.icon, {
              style: {
                fontSize: isSidebarOpen ? "15px" : "15px",
                color:
                  isSidebarOpen && selectedItem === index
                    ? "#3c38ff"
                    : "#ffffff",
                margin: "0px 10px 5px 0px",
                // backgroundColor: option.isSelected ? "#B0B0B0" : "transparent", // Grey background for selected option
                "&:hover": {
                  color: "transparent", // Make text transparent to show gradient
                  background: "linear-gradient(90deg, #FF5722, #2196F3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              },
            })}
            {!isSidebarOpen && (
              <Typography
                sx={{
                  fontSize: "11px",
                  color: selectedItem === index ? "#ffffff" : "#bfbfbf",
                  fontWeight: 800,
                  backgroundColor: option.isSelected
                    ? "#B0B0B0"
                    : "transparent", // Grey background for selected option
                  "&:hover": {
                    color: "transparent", // Make text transparent to show gradient
                    background: "linear-gradient(90deg, #FF5722, #2196F3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  },
                }}
              >
                {option.text}
              </Typography>
            )}
          </ListItem>
        ))}
        {isModalOpen && (
          <div className="sidebar-item" onClick={onIconClick}>
            <AiOutlineAppstore
              size={30}
              onClick={toggleModal}
              style={{ cursor: "pointer" }}
            />
            {isSidebarOpen && <p className="sidebar-description">Plans</p>}
            {isModalOpen && (
              <PlanModel isOpen={isModalOpen} onClose={toggleModal} />
            )}
          </div>
        )}
        <Divider color="#202020" />

        <ListItem
          component="li"
          onClick={() => handleClick(3, onClickChatHistory)}
          style={{
            padding: "3px",
            margin: "2px 10px 0px 0px",
            display: "flex",
            cursor: "pointer",
            // backgroundColor: selectedItem === 3 && "#828282",
            backgroundColor: !isSidebarOpen && selectedItem === 3 && "#828282",
          }}
        >
          <MdHistory
            style={{
              fontSize: "20px",
              color:
                isSidebarOpen && selectedItem === 3 ? "#3c38ff" : "#ffffff",
              margin: "0px 5px 5px 0px",
              "&:hover": {
                color: "transparent", // Make text transparent to show gradient
                background: "linear-gradient(90deg, #FF5722, #2196F3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          />
          {!isSidebarOpen && (
            <>
              <Typography
                sx={{
                  fontSize: "11px",
                  color: selectedItem === 3 ? "#ffffff" : "#bfbfbf",
                  fontWeight: 800,
                  "&:hover": {
                    color: "transparent", // Make text transparent to show gradient
                    background: "linear-gradient(90deg, #FF5722, #2196F3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  },
                }}
              >
                Chat History
              </Typography>
              {previousChatOpen ? (
                <IoIosArrowDown
                  style={{ marginLeft: "10px", color: "#bfbfbf" }}
                />
              ) : (
                <IoIosArrowForward
                  style={{ marginLeft: "10px", color: "#bfbfbf" }}
                />
              )}
            </>
          )}
        </ListItem>
      </List>
    );
  };

  const ChatHistoryComponent = () => {
    console.log(chats);
    return (
      <Box
        variant="permanent"
        sx={{
          width: drawerWidth - 20,
          // margin: "0px 0px 100px auto",
          height: "250px",
          overflow: "auto",
          padding: "10px",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <div>
          {chats.map((chat, index) => {
            // console.log(chat)
            return (
              chat.messages.length > 1 && (
                <div
                  key={index}
                  style={{
                    cursor: "pointer",
                    fontWeight: currentChatIndex === index ? 800 : 500,
                    backgroundColor: currentChatIndex === index && "#331a00",
                    listStyleType: "none",
                    margin: "2px 0px 2px 14px",
                    color: "#ffffff",
                    fontSize: "10px",
                    fontFamily: "Roboto",
                    padding: "2px",
                    borderRadius: "2px",
                    //  textAlign: "center"
                  }}
                  onClick={() => handleChatSelection(index)}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      margin: "4px",
                    }}
                  >
                    <BsFillChatRightDotsFill
                      style={{
                        padding: "1px",
                        color: chat.messages[0].content[0].image_url
                          ? "red"
                          : "#ffffff",
                      }}
                    />
                    <span style={{ margin: "0px 0px 3px 3px" }}>
                      {chat.messages[0]?.content[0].text}
                    </span>
                  </Box>
                </div>
              )
            );
          })}
        </div>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexShrink: 0,
        width: drawerWidth,
        boxSizing: "border-box",
        backgroundColor: "#000000",
        overflow: "hidden",
        position: isMobile && "fixed",
        top: isMobile && 15,
        zIndex: isMobile && 1,
      }}
    >
      <Box sx={{ width: "100%", height: "80%" }}>
        {!isMobile && (
          <Box
            onClick={onClickHome}
            sx={{
              margin: "20px 0px 0px 20px",
              display: "flex",
              cursor: "pointer",
            }}
          >
            <img
              src={tectsharthilogo}
              alt="logo"
              style={{ height: "30px", width: "33px", marginTop: "10px" }}
            />
            {!isSidebarOpen && (
              <Typography sx={{ marginTop: "10px" }}>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginLeft: "5px",
                  }}
                >
                  Math
                </span>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    background: "linear-gradient(90deg, #2a91ff, #4557f3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Sharthi
                </span>
              </Typography>
            )}
          </Box>
        )}
        <RenderListItems />

        {previousChatOpen & !isSidebarOpen && <ChatHistoryComponent />}
      </Box>
      <Box
        sx={{
          margin: !isSidebarOpen && "auto 20px 30px 15px",
          marginTop: "auto",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          onClick={handleLogout}
          variant="contained"
          sx={{
            textTransform: "none",
            boxShadow: "none",
            width: isSidebarOpen ? "20px" : "100%",
            height: "35px",
            color: "#ffffff",
            marginBottom: isSidebarOpen && "10px",
            marginLeft: isSidebarOpen ? "5px" : "10px",
            textAlign: "center",
            // "&:hover": {
            //   color: "#202020",
            // },
          }}
        >
          {isSidebarOpen ? (
            <CgProfile
              style={{ height: "20px", width: "20px", marginTop: "0px" }}
            />
          ) : (
            "Logout"
          )}
        </Button>
        <Button
          onClick={toggleModal}
          variant={!isSidebarOpen && "outlined"}
          sx={{
            color: "#bfbfbf",
            width: isSidebarOpen ? "20px" : "100%",
            height: "35px",
            margin: "10px 0px 0px 10px",
            fontSize: "12px",
            "&:hover": {
              color: "#202020",
            },
          }}
        >
          {isSidebarOpen ? (
            <IoMdPricetags
              style={{ height: "20px", width: "20px", marginTop: "0px" }}
            />
          ) : (
            "Upgrade to pro"
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
