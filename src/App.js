import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";
import Projects from "./pages/Projects";
import Particles from "react-tsparticles";



function App() {
  return (
    <Router>
      
      {/* PARTICLES MUST BE FIRST */}
      <Particles
        options={{
          fullScreen: { enable: true, zIndex: -1 },

          particles: {
          
  color: { value: "#888" },
  links: { color: "#aaa" },

            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 1 },
            opacity: { value: 0.3 },
          },
        }}
      />

      {/* Your app content */}
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    </Router>
  );
}

export default App;