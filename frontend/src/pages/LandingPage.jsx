//import React from "react";
import Navbar from "../../../frontend/src/components/navbar/Navbar";
import Home from "../../../frontend/src/components/home/Home";
import Main from "../../../frontend/src/components/main/Main";
import Sermons from "../../../frontend/src/components/sermons/Sermons";
import Header from "../components/header/Header";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Main />
      <Sermons />
      <Header />
    </div>
  );
}

export default App;
