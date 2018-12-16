import "../common/template/dependencies";
import React from "react";
import { connect } from "react-redux";
import Header from "../common/template/Header";
import Sidebar from "../common/template/Sidebar";
import Footer from "../common/template/Footer";
import Messages from "../common/msg/Messages";
import Routes from "./Routes";

const App = ({ skin }) => {
  return (
    <body className={`${skin.selected} fixed sidebar-mini`}>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <Routes />
        </div>
        <Footer />
        <Messages />
      </div>
    </body>
  );
};

const mapStateToProps = state => ({ skin: state.skin });
export default connect(mapStateToProps)(App);
