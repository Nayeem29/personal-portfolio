import React, { useState } from 'react';
import '../Projects/Projects.css';

const Card = ({ project }) => {
  const { title, img, liveLink, clientLink, serverLink, description, technology } = project;
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }

  return (
    <>
      <div className="box btn-shadow">
        <div className='img'>
          <img src={img} alt="" onClick={toggleModal} />
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{title}</h2>
          {/* <a href="#popup" className='arrow'>
            <i className='fa fa-arrow-right'></i>
          </a> */}
        </div>
        <button onClick={() => toggleModal()}
          className='btn_shadow'>
          View Project
          <i className='fa fa-chevron-right'></i>
        </button>
      </div>
      {
        modal && (
          <div className='modal'>
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content d_flex">
              <div className="modal-img left">
                <img src={img} alt="" />
              </div>
              <div className='modal-text right'>
                <span>Featured</span>
                <h1>{title}</h1>
                <a href={clientLink} >Client Link</a>
                <a href={serverLink} >Server Link</a>
                <p>{description}</p>
                <p>{technology}</p>
                <div className="button f_flex mtop">
                  <button className='btn_shadow'>
                    View Project
                    <i className='fa fa-chevron-right'></i>
                  </button>
                </div>
                <div className="close-modal btn_shadow" onClick={toggleModal}>
                  <i className='fa fa-times'></i>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Card;