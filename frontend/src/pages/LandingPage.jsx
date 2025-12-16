//import React from "react";
import Navbar from "../../../frontend/src/components/navbar/Navbar";
import Home from "../../../frontend/src/components/home/Home";
import Main from "../../../frontend/src/components/main/Main";
import Sermons from "../../../frontend/src/components/sermons/Sermons";
import Footer from "../../src/components/footer/Footer";



function LandingPage() {
  return (
    <div>
      
      <Navbar />
      <Home />
      <Main />
      <Sermons />
      <Footer />
    </div>
  );
}

export default LandingPage;
