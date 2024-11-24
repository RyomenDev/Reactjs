// import React from "react";

// const currYear = new Date().getFullYear();

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Vatsh</strong>
      </p>
    </footer>
  );
};

export default Footer;
