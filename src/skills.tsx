import './Skills.css';

const Skills = () => (
  <section id="skills" className="skills">
    <h2>Skills</h2>
    <div className="skills-grid">
      <div className="skill-card">
        <span className="skill-icon">💻</span>
        <h3>Frontend Development</h3>
        <p>HTML, CSS, JavaScript, TypeScript</p>
      </div>
      <div className="skill-card">
        <span className="skill-icon">⚛️</span>
        <h3>Frameworks & Tools</h3>
        <p>React, Vite, Tailwind CSS</p>
      </div>
      <div className="skill-card">
        <span className="skill-icon">🛠</span>
        <h3>Development Tools</h3>
        <p>Git, GitHub, VS Code</p>
      </div>
      <div className="skill-card">
        <span className="skill-icon">🧠</span>
        <h3>Soft Skills</h3>
        <p>Problem-solving, Communication, Teamwork</p>
      </div>
    </div>
  </section>
);

export default Skills;
