import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body';

/* Episode 05 Let's get Hookd ------------------------------------------------------------------------------------------------------ 
 * There are 2 type of Export/Import
 *   1) Defalut Export/Import
 *        export default Component;
 *        import Component from 'path';

 *   2) Name Export/Import
 *        export const Component;
 *        import { Component } from 'path'; 
 
*/

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Vasu</strong>
      </p>
    </footer>
  );
};

const AppLayout = () => {
  console.log(<Body />);
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
