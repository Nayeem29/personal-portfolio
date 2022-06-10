import React from 'react';
import './Skillbar.css'

const Skillbar = () => {
  return (
    <>
      <h1>My Skill Set so Far</h1>
      <div className="container-bar" id='#skill'>
        <ul className='bar-ul'>
          <li className="html">HTML5</li>
          <li className="css">CSS3</li>
          <li className="react">REACT</li>
          <li className="node">NODE</li>
          <li className="express">EXPRESS</li>
          <li className="mongo">MONGO</li>
        </ul>
      </div>
    </>
  );
};

export default Skillbar;