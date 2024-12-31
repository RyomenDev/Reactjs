import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/components/Header";
import Main from "./src/components/Main";
import Footer from "./src/components/Footer";

const App = () => {
  //   const ResList = [];
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
