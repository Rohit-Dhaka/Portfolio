import { useEffect } from 'react';
import './App.css';
import Contant from './components/Contant';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Myexpertise from './components/Myexpertise';
import Myskills from './components/Myskills';
import Project from './components/Project';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Duration of the animation (in ms)
      once: true, // Whether animation should only occur once (default is false)
    });
  }, []);
  
  return (
    <>          
      
      <Hero />
      <Myskills />
      <Myexpertise />
      <Project />
      <Contant />
      <Footer />
    </>
  );
}

export default App;
