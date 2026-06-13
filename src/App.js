import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="background-gradient"></div>

      <Navbar />

      <main>
        <Hero />
        <About /> 
        <Experience />
        <Research />
        <Certifications />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;