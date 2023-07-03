// import React from 'react'
import { useState, } from "react";
import axios from "axios";

const useGithubApi = () => {
  // loading stage
  const [isLoading, setIsLoading] = useState(false);
  // data available and returned
  const [userData, setUserData] = useState(null);
  // an error occured
  const [isError, setIsError] = useState(null);

  // TODO: Func to fetch user data
  const fetchUserData = async (username) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const data = response.data;
      console.log(data);
      setUserData(data);
      setIsLoading(false);
    } catch (error) {
      setIsError("Ooops!! an error occured", error);
    }
  };


  return { isLoading, isError,userData, fetchUserData };
};

export default useGithubApi;
