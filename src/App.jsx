import Header from "./Components/Header";
import Search from "./Components/Search";
// import DevProfile from "./Components/DevProfile";
// import useGithubApi from "./api/useGithubApi";
import { createContext, useState } from "react";

// create theme context
export const themeContext = createContext();

function App() {
  // Dark theme state management
  const [darkTheme, setDarkTheme] = useState(false);
  //  destructure userData from useGithubApi custom API
  // const { userData, isLoading } = useGithubApi();
  // console.log(userData);
  // console.log("Is loading?",isLoading)
  return (
    <themeContext.Provider
      value={{ darkTheme: darkTheme, setDarkTheme: setDarkTheme }}
    >
      <div
        className={`h-screen ${darkTheme ? "bg-[#161722]" : "bg-slate-100"}`}
      >
        <Header />
        <Search />
      </div>
    </themeContext.Provider>
  );
}

export default App;
