// import React from 'react'
import { useState, useContext } from "react";
import { CiSearch } from "react-icons/ci";
import useGithubApi from "../api/useGithubApi";
import DevProfile from "./DevProfile";
import { MagnifyingGlass } from "react-loader-spinner";
import { themeContext } from "../App";

const Search = () => {
  const { userData, isLoading, fetchUserData } = useGithubApi();
  // change username input state
  const [username, setUsername] = useState("");
  // use theme context
  const darkThemeBody = useContext(themeContext);

  function handleSearchBtnClick(e) {
    e.preventDefault();
    if (username === "") {
      alert("Please enter Github username");
    } else {
      // setUsername();
      fetchUserData(username);
      console.log(userData);
      setUsername("");
    }
  }

  return (
    <>
      <div
        className={`mx-auto flex justify-between w-[80%] mt-8 rounded-md lg:w-[38%] ${
          darkThemeBody.darkTheme ? "bg-[#25273c]" : "bg-white"
        } py-3 px-2`}
      >
        <div className="flex items-center gap-2">
          <CiSearch
            className={`w-7 h-7 ${
              darkThemeBody.darkTheme ? "text-[#393a4c]" : "text-blue-500"
            }`}
          />
          <input
            value={username}
            type="text"
            placeholder="Enter Github Userna.."
            className={`focus:outline-none font-lato ${
              darkThemeBody.darkTheme ? "bg-[#25273c]" : "bg-white"
            } ${darkThemeBody.darkTheme ? "text-slate-500" : "text-black"}`}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button
          className={`px-[0.7rem] py-[0.4rem] text-white rounded font-lato ${
            darkThemeBody.darkTheme ? "bg-[#393a4c]" : "bg-blue-500"
          } `}
          onClick={handleSearchBtnClick}
        >
          Search
        </button>
      </div>
      <MagnifyingGlass
        visible={isLoading && true}
        height="60"
        width="60"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass={`mx-auto my-5 `}
        glassColor={darkThemeBody.darkTheme ? "#393a4c" : "white"}
        color={darkThemeBody.darkTheme ? "white" : "#3b82f6" }
      />
      {userData && <DevProfile userData={userData} />}
    </>
  );
};

export default Search;
