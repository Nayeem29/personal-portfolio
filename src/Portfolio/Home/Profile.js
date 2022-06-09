import React from 'react';
import './Profile.css';
import Typical from 'react-typical';

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href="https://www.facebook.com/nayeemkop29/">
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href="#">
                <i className='fa fa-google-plus-square'></i>
              </a>
              <a href="https://www.linkedin.com/in/nayeem-hasan-khan-4a0618100/">
                <i className='fa fa-linkedin-square'></i>
              </a>
              <a href="#">
                <i className='fa fa-twitter'></i>
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              {" "}
              Hello, I'M <span className='highlighted-text'>Nayeem Hasan</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={
                    [
                      "Enthusiastic Dev",
                      5000,
                      "MERN Stack Developer",
                      5000,
                    ]
                  }
                />
              </h1>
              <span className='profile-role-tagline'>
                building frontend and backend application
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'>
              {""}
              Hire Me{" "}
            </button>
            <a href="Resume_NayeemHasan_WebDeveloper.pdf" download='Nayeem_Hasan Resume_NayeemHasan.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;