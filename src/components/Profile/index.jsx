import React from 'react';
import './index.scss';

const Profile = () => {
  return (
    <>
      <div className="header__profile">
        <div className="header__profile--avatar">
          <img src="/utopier-portfolio/avatar.svg" width="90" height="90" />
        </div>
        <div className="header__profile--info">
          <ul>
            <li className="header__profile--info-title">
              Utopier | Javascript Developer
            </li>
            <li>React, Nextjs, TypeScript, Nodejs, CICD, AWS</li>
            <li>
              <img
                src="/utopier-portfolio/icons/message.svg"
                width="39"
                height="39"
              />{' '}
              <span>
                <p
                  style={{
                    color: 'yellow',
                  }}
                >
                  Kakao Talk ID
                </p>{' '}
                <p>&nbsp;:&nbsp;kklxxx1</p>
              </span>
            </li>
            <li>
              <img
                src="/utopier-portfolio/icons/email.svg"
                width="39"
                height="39"
              />{' '}
              <span>utopier2025@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
