import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const projectList = [
    { title: "Portfolio Website", desc: "A high-performance personal portfolio showcasing modern web capabilities.", tech: ["React", "Tailwind", "Vite"], img: "/Screenshot (31).png" },
    { title: "Football Club Hub", desc: "A community platform for local sports management and fixture tracking.", tech: ["JavaScript", "HTML5", "CSS3"], img: "WhatsApp Image 2025-05-14 at 13.54.30_80a9a748.jpg" },
    { title: "Market-Magnet", desc: "A robust e-commerce solution focused on conversion and user experience.", tech: ["React", "Commerce.js"], img: "/Screenshot (782).png" },
    { title: "Innovation Week Portal", desc: "Event management website for Pwani Innovation Week.", tech: ["Vite", "React"], img: "/Screenshot (777).png" },
    { title: " Smart University Asset Tracker", desc: "Full-stack system for maintenance and tracking of institutional assets.", tech: ["Django", "React", "REST API"], img: "/Screenshot 15.png" },
    { title: "Smart learning system", desc: "a full stack website for e-learning.", tech: ["React", "Django"], img: "/Screenshot (778).png" },
    { title: "Smart Health Dashboard", desc: "Monitoring system for health metrics with real-time data visualization.", tech: ["TypeScript", "D3.js"], img: "/Screenshot (779).png" },
    { title: "To-do list app", desc: "a web app for things you wish to do.", tech: ["React", "css"], img: "/Screenshot (30).png" },
    { title: "Book tracker system", desc: "website for tracking books.", tech: ["Django framworks", "React", "Tailwind css"], img: "/Screenshot (34).png" },
    { title: "hospital management system", desc: "a management system for hospitals.", tech: ["Django", "HTml" ,"Tailwind"], img: "/Screenshot (779).png" },
  ];

  return (
    <section id="projects" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Featured Work</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
          <p className="mt-6 text-slate-600 max-w-2xl text-lg italic">
            A selection of projects that define my technical expertise and passion for engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="group flex flex-col bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                {project.img ? (
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300">
                    <Code2 size={48} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex gap-3">
                    <Github size={20} className="text-white cursor-pointer hover:text-blue-400" />
                    <ExternalLink size={20} className="text-white cursor-pointer hover:text-blue-400" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white border border-slate-200 text-slate-500 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;