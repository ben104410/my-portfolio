import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './projects';
import { 
  Send, 
  GraduationCap, 
  CheckCircle2, 
  Linkedin, 
  Github, 
  Twitter, 
  Facebook, 
  Instagram 
} from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Home />
      <Projects />

      {/* About Section - Placeholder */}
      <section id="about" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 mb-4">About Me</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Hello! I'm Benjamin Mwasya, a passionate Full Stack Developer with a knack for building
            dynamic and user-friendly web applications. My journey in tech began with a curiosity
            for how things work, evolving into a dedication to crafting efficient and elegant solutions.
            I thrive on learning new technologies and solving complex problems, always aiming to deliver
            high-quality code and exceptional user experiences.
          </p>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mt-4">
            Outside of coding, I enjoy exploring new hiking trails, experimenting with photography,
            and diving into a good book. I believe in continuous growth, both professionally and personally.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 mb-4">My Skills</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-8"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['React', 'Node.js', 'Python', 'Django', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Git', 'AWS Basics'].map((skill, index) => (
              <div key={index} className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 text-lg font-medium text-slate-700 hover:border-blue-200 transition-colors">
                <CheckCircle2 className="text-blue-500" size={20} />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-slate-50 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Education</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-12"></div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-4">B.Sc. in Computer Science</h3>
              <p className="text-blue-600 font-bold mb-4">Pwani University | 2022 — Present</p>
              <p className="text-slate-600 leading-relaxed italic">Specializing in Software Engineering & UI/UX development with a focus on building scalable systems.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-4">KCSE (Grade B Plain)</h3>
              <p className="text-blue-600 font-bold mb-4">Kitondo School | 2018 — 2022</p>
              <p className="text-slate-600 leading-relaxed italic">Active leader in the Computer Club and lead volunteer for community development initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">Get In Touch</h2>
          <p className="text-slate-600 mb-8 text-lg leading-relaxed">
            I'm currently looking for new opportunities and collaborations. Whether you have a question,
            a project idea, or just want to say hi, feel free to reach out!
          </p>
          <a
            href="mailto:titusben64@gmail.com" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            Say Hello <Send size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 text-center bg-slate-50 px-6 flex flex-col items-center gap-6">
        <div className="flex gap-6 text-slate-500">
          <a href="https://linkedin.com/in/ben titus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
          <a href="https://github.com/benjah104410" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors"><Github size={20} /></a>
          <a href="https://twitter.com/ben_titus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
          <a href="https://www.facebook.com/ben.titus.5" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors"><Facebook size={20} /></a>
          <a href="https://www.instagram.com/ben_titus/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors"><Instagram size={20} /></a>
        </div>
        <p className="text-sm text-slate-500 font-medium">
          © {new Date().getFullYear()} Benjamin Mwasya. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;