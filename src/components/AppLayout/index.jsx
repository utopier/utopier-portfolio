import React, { useEffect, useState } from 'react';
import './index.scss';
import { Link, withRouter } from 'react-router-dom';

import Profile from '../Profile';

const AppLayout = ({ children, location }) => {
  console.log(location.pathname.slice(1));
  const [pathname, setPathname] = useState(location.pathname.slice(1));

  const addActiveClass = () => {
    const aHTMLElements = document.getElementsByTagName('a');
    const aElements = Array.from(aHTMLElements);
    aElements.map((v) => {
      console.log(v);
      if (v.innerText.toLowerCase() === pathname) {
        v.className = 'clicked';
      } else if (v.innerText.toLowerCase() === 'home' && pathname === '') {
        v.className = 'clicked';
      } else {
        v.classList.remove('clicked');
      }
    });
  };

  useEffect(() => {
    console.log('useEffect');
    setPathname(location.pathname.slice(1));
    addActiveClass();
  });
  return (
    <>
      <header>
        <Profile />
        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/documents">Documents</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        {children}
      </header>
    </>
  );
};

export default withRouter(AppLayout);
