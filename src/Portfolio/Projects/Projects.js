import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Projects.css';

const Projects = () => {
  const [projectName, setProjectName] = useState([]);
  useEffect(() => {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => setProjectName(data))
  }, []);
  return (
    <div id='#project'>
      <section className='portfolio top' id='portfolio'>
        <div className="container">
          <div className="heading text-center">
            <h4>CHECK MY WEBSITES AND GIVE YOUR FEEDBACK</h4>
            <h1>MY PROJECTS</h1>
          </div>
          <div className="content grid">
            {
              projectName.map(project => <Card key={project.id}
                project={project}
              />)
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;