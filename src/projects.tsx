
import './projects.css';

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <p>Here are some of the projects I’ve worked on recently.</p>

    <div className="project-list">
      {/* Project Card: My Portfolio */}
      <div className="project-card">
        <img src="whatsapp image.png" alt="project 2" />
        <h3>My Portfolio Website</h3>
        <p>This is a personal portfolio website to showcase my skills, projects, and contact information.</p>
        <p><strong>Languages/Technologies:</strong> React, Vite, HTML, CSS, JavaScript</p>
      </div>

      {/* Example Project Card 2 */}
      <div className="project-card">
        <img src="WhatsApp Image 2025-05-14 at 13.54.30_80a9a748.jpg" alt="Project 2" />
        <h3>Project Two</h3>
        <p>A website for my local football club with the names of palyers and match fixtures.</p>
        <p><strong>Languages/Technologies:</strong> HTML, CSS, JavaScript</p>
      </div>
      <div className="project-card">
        <img src="" alt="Project 3" />
        <h3>Project three</h3>
        <p>A e-commerce website called market-magnet.</p>
        <p><strong>Languages/Technologies:</strong> HTML, CSS, JavaScript</p>
      </div>
      <div className="project-card">
        <img src="Screenshot (777).png" alt="Project 4" />
        <h3>Project four</h3>
        <p>A  website for pwani innovation week.</p>
      <p><strong>Languages/Technologies:</strong> React, Vite, HTML, CSS, JavaScript</p>
      </div>

      
    </div>
  </section>
);

export default Projects;