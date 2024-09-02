import { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Sidebar from "./Sidebar";

export const ToggleButton = ({ isSidebarOpen, onClickSidebar }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <button
      onClick={onClickSidebar}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: "#000000",
        outline: "none",
        borderWidth: "0px",
        position: "relative",
        top: 270,
        left: "15%",
      }}
    >
      {isSidebarOpen ? (
        <MdOutlineArrowForwardIos
          style={{
            fontSize: "10px",
            backgroundColor: hover ? "#ffffff" : "#bfbfbf",
            padding: "5px",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            width: "10px",
            height: "20px",
          }}
        />
      ) : (
        <MdOutlineArrowBackIosNew
          style={{
            fontSize: "10px",
            backgroundColor: hover ? "#ffffff" : "#bfbfbf",
            padding: "5px",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            width: "10px",
            height: "20px",
          }}
        />
      )}
    </button>
  );
};
