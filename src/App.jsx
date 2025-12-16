import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Leetcode from "./components/Leetcode/Leetcode";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Leetcode/>
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
