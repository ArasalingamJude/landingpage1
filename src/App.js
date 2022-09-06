import React from "react";
import Navbar from "./Components/Navbar";
import About from "./About";
import Members from "./Members";
import Login from "./Redux/Login";
import Profile from "./Redux/Profile";
import StateTutorial from "./hooks/StateTutorial";
// import wallpaper from "./wallpaper.jpg";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    // <>
    //   <Navbar />
    //   {/* <About />
    //   <Members /> */}

    //   <div className=" bg-cover">
    //     <img src={wallpaper} alt="background image"></img>
    //   </div>
    // </>
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Members" element={<Members />} />
      </Routes> */}

      {/* Redux */}
      <StateTutorial />
      <Profile />
      <Login />
    </>
  );
}

export default App;
