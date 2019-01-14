import React from "react";
import Header from "../common/template/Header";
import Sidebar from "../common/template/Sidebar";
import Footer from "../common/template/Footer";
import Messages from "../common/msg/Messages";
import Routes from "./Routes";

const App = props => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Routes />
      <Footer />
      <Messages />
    </div>
  );
};

export default App;
