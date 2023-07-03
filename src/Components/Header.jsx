// import React from 'react'
import { BsMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { useContext } from "react";
import { themeContext } from "../App";
const Header = () => {
  const darkThemeBody = useContext(themeContext);
  // console.log("dark theme context", darkThemeBody);
  // TODO: Func to change theme
  function changeTheme() {
    darkThemeBody.setDarkTheme(!darkThemeBody.darkTheme);
    // console.log("New dark theme", darkThemeBody.darkTheme);
  }
  return (
    <div className="flex justify-between mx-auto w-[80%] pt-20 lg:w-[38%]">
      <div>
        <h1
          className={`font-spacemono text-[1.5em] font-bold ${
            darkThemeBody.darkTheme ? "text-white" : "text-black"
          }`}
        >
          devfinder
        </h1>
      </div>
      <div className="flex gap-2 items-center" onClick={changeTheme}>
        {darkThemeBody.darkTheme ? (
          <span className="font-spacemono text-white">LIGHT</span>
        ) : (
          <span className="font-spacemono">DARK</span>
        )}
        {/* <p>icon</p> */}
        {/* <BsMoonFill/> */}
        {darkThemeBody.darkTheme ? (
          <BsSunFill className="text-white" />
        ) : (
          <BsMoonFill />
        )}
      </div>
    </div>
  );
};

export default Header;
