import "../common/template/dependencies";
import React from "react";
import Header from "../common/template/Header";
import Sidebar from "../common/template/Sidebar";
import Footer from "../common/template/Footer";
import Messages from "../common/msg/Messages";
import Routes from "./Routes";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <Routes />
      </div>
      <Footer />
      <Messages />
    </div>
  );
};

export default App;
