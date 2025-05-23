import Navbar from './Navbar';
import Home from './Home';
import Projects from './projects';
import Skills from './skills';
import Education from './Education';
import Contact from './contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
       
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;


