// import React from 'react'
import { useContext } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsBuildingFill, BsLink45Deg, BsTwitter } from "react-icons/bs";
import { format, parseISO } from "date-fns";
import { themeContext } from "../App";
// import useGithubApi from "../api/useGithubApi";

const DevProfile = ({ userData }) => {
  // const {userData} = useGithubApi();
  // console.log(userData);
  // use theme context
  const darkThemeBody = useContext(themeContext);
  const dateJoined = format(parseISO(userData?.created_at), "dd MMM yyyy");
  return (
    <div
      className={`flex flex-col w-[80%] mx-auto mt-6 rounded-md p-3 lg:w-[38%] font-lato ${
        darkThemeBody.darkTheme ? "bg-[#25273c]" : "bg-white"
      } ${darkThemeBody.darkTheme ? "text-white" : "text-black"}`}
    >
      {/* Bio */}
      <div className="flex gap-5 items-center">
        {/* <span className="border-1 rounded width-[80px] h-[60px] border-slate-200 border-solid"> */}
        {userData?.avatar_url ? (
          <img
            src={userData?.avatar_url}
            alt="Dev profile image"
            className="rounded-full border-solid border-4px border-slate-500 w-20 h-20"
          />
        ) : (
          "Avatar"
        )}
        {/* </span> */}
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div>
            <p className="font-bold pb-1">
              {userData?.name ? userData?.name : "No github name"}
            </p>
            <p className="text-xs pb-1">
              {userData?.login ? userData?.login : "Github user name"}
            </p>
          </div>
         <div>
           <p className="text-xs pb-1">
            Joined on  {dateJoined ? dateJoined : "Joined in"}
          </p>
         </div>
        </div>
      </div>

      {/* Repos, Followers, Following */}
      <div className="mt-4 lg:ml-20">
        <p>{userData?.bio ? userData?.bio : "No bio"}</p>
        <div
          className={`rounded py-3 px-6 mt-4 flex gap-4 justify-between ${
            darkThemeBody.darkTheme ? "bg-[#393a4c]" : "bg-slate-100"
          }`}
        >
          <div>
            <p>Repos</p>
            <p className="font-bold">
              {userData?.public_repos ? userData?.public_repos : "0"}
            </p>
          </div>
          <div>
            <p>Followers</p>
            <p className="font-bold">
              {userData?.followers ? userData?.followers : "0"}
            </p>
          </div>
          <div>
            <p>Following</p>
            <p className="font-bold">
              {userData?.following ? userData?.following : "0"}
            </p>
          </div>
        </div>
      </div>
      {/* Personal Info */}
      <div className="mt-3 lg:flex gap-7 lg:ml-20">
        <div>
          <div className="flex items-center gap-2 pb-2">
            <FaMapMarkerAlt />
            <p>{userData?.location ? userData?.location : "No location"}</p>
          </div>
          <div className="flex items-center gap-2 pb-2">
            <BsTwitter />
            <p>
              {userData?.twitter_username
                ? userData?.twitter_username
                : "No Twitter user name"}
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 pb-2">
            <BsLink45Deg />
            <a href={userData?.blog}>
              <p>{userData?.blog ? userData?.blog : "No website"}</p>
            </a>
          </div>
          <div className="flex items-center gap-2 pb-2">
            <BsBuildingFill />
            <p>@{userData?.login ? userData?.login : "Github user name"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevProfile;
