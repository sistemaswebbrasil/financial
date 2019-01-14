import React from "react";
import Header from "../common/template/Header";
import Sidebar from "../common/template/Sidebar";
import Footer from "../common/template/Footer";
import Messages from "../common/msg/Messages";
import Routes from "./Routes";
import { HashRouter } from "react-router-dom";

const App = props => {
  return (
    <HashRouter>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <Routes />
        </div>
        <Footer />
        <Messages />
      </div>
    </HashRouter>
  );
};

export default App;
