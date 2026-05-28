import { Menu } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200 px-6 py-3">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src="IMG_20230430_163442_689.jpg" alt="Profile" className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover" />
        <span className="text-xl font-bold tracking-tighter text-slate-900 uppercase">Benjamin.M</span>
      </div>
      
      <ul className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
        <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
        <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
        <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a></li>
        <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
      </ul>
      <button className="md:hidden"><Menu size={24} /></button>
    </div>
  </nav>
);

export default Navbar;
