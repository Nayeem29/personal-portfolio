import React from 'react';
import '../Projects/Projects.css';
// import './Card.css';

const Card = ({ project }) => {
  const { title, img, liveLink, clientLink, serverLink, description, technology } = project;

  return (
    <>
      <div className="box btn-shadow">
        <div className='img'>
          <img src={img} alt="" />
        </div>
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className='project-links'>
          <a href={liveLink} target='_blank' rel='noreferrer'>
            <button
              className='btn_shadow'>
              View Project
              <i className='fa fa-chevron-right'></i>
            </button>
          </a>
          <a href={clientLink} target='_blank' rel='noreferrer'>
            <button
              className='btn_shadow'>
              Client Link
              <i className='fa fa-chevron-right'></i>
            </button>
          </a>
          {serverLink &&
            <a href={serverLink} target='_blank' rel='noreferrer'>
              <button
                className='btn_shadow'>
                Server Link
                <i className='fa fa-chevron-right'></i>
              </button>
            </a>}
        </div>
      </div>
    </>
  );
};

export default Card;