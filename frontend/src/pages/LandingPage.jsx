//import React from "react";
//import Navbar from "../../../frontend/src/components/navbar/Navbar";
import Home from "../../../frontend/src/components/home/Home";
import Main from "../../../frontend/src/components/main/Main";
import Sermons from "../../../frontend/src/components/sermons/Sermons";
//import Header from "../../../frontend/src/components/header/Header";
import TopPage from "../../src/pages/TopPage";

function LandingPage() {
  return (
    <div>
      
      <TopPage />
      <Home />
      <Main />
      <Sermons />
    </div>
  );
}

export default LandingPage;
