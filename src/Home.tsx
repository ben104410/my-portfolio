const Home = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white">
    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-100 rounded-full">
      Available for hire
    </div>
    <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight mb-6">
      Benjamin <span className="text-blue-600 tracking-tighter">Mwasya</span>
    </h1>
    <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mb-10 leading-relaxed">
      Building <span className="text-slate-900 underline decoration-blue-500 underline-offset-4">accessible</span> and performant digital experiences with modern web technologies.
    </p>
      
    <div className="flex flex-col sm:flex-row gap-4">
      <a href="#projects" className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
        View My Work
      </a>
      <a href="/assets/Benjamin_Resume.pdf" download className="px-10 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all">
        Download Resume
      </a>
    </div>
  </section>
);

export default Home;
