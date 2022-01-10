import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_POINT}/post?limit=10`,
        { headers: { "app-id": "61db222fb4e3dc5a1d5e85c0" } }
      );
      setPosts(res.data.data);
      setIsLoading(true);
    };
    fetchPost();
  }, []);

  const values = {
    posts,
    isLoading
  };

  return (
    <ResultContext.Provider value={values}>{children}</ResultContext.Provider>
  );
};

export const useResult = () => useContext(ResultContext);