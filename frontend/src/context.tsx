import React, { useContext, useEffect, useState } from "react";
import { fetchAPI } from "./utils/apis/fetch";


export type AppContextType = {
  isLoading:boolean,
  user:Object | null,
  logoutUser:() => void;
}

export interface AppProviderProps{
  children:React.ReactNode
}

const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider:React.FC<AppProviderProps> = ( props ) => {
  const { children } = props;
  const [ isLoading, setIsLoading ] = useState(true);
  const [ user, setUser ] = useState(null);

  // 获取用户信息
  const fetchUser = async () => {
    const { data } = await fetchAPI("/", 'POST', {});
    if(!!data){
      setUser(data);
    }

    setIsLoading(false);
  }

  const logoutUser = async () => {

  }

  useEffect(()=>{
    fetchUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        user,
        logoutUser
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export const userGlobalContext = () => {
  return useContext(AppContext);
}

export { AppProvider };
