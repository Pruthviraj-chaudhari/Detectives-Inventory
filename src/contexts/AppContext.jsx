/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { toast } from "sonner";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  
  const [userData, setUserData] = useState({});

  const getProfiles = async () => {
    try {
      const url = import.meta.env.VITE_API_DATA;
      const response = await fetch(url);
      const data = await response.json();
      setProfiles(data.data);
    } catch (error) {
      // toast.error("Error fetching profiles");
      console.error("Error fetching profiles:", error);
    }
    setLoading(false);
  };

  // const getUser = async (userId) => {
  //   try {
  //     const url = import.meta.env.VITE_API_USER_DATA;
  //     const response = await fetch(`${url}?id=${userId}`);
  //     const data = await response.json();
  //     setProfiles(data.data);
  //   } catch (error) {
  //     toast.error("Error fetching profiles");
  //     console.error("Error fetching profiles:", error);
  //   }
  //   setLoading(false);
  // }

  const value = {
    profiles,
    setProfiles,
    loading,
    setLoading,
    isLogin,
    setIsLogin,
    getProfiles,
    userData,
    setUserData
  };

  return (
  <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>);
}

export default AppContextProvider;
