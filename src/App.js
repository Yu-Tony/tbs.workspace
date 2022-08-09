import './App.css';
import AboutMe from "./pages/aboutme";
import Home from './pages/home';
import Works from './pages/works';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
}  from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './components/navbar';


import React ,  { useEffect, Fragment} from 'react';
import { useLocation } from "react-router-dom";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import "./pages/HomeAssets/styles.scss"


function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const canControlScrollRestoration = 'scrollRestoration' in window.history
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, [pathname]);
  
  return children;
}



function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
}, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar/>
        <ScrollToTop />
        {/*--------------------------------------------------------------------------------- */}
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 60,
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#ffffff",
                  animation: {
                    enable: true,
                    speed: 0,
                    sync: true
                  }
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  },
                  polygon: {
                    nb_sides: 5
                  },
                  image: {
                    src: "https://cdn.matteobruni.it/images/particles/github.svg",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 20,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 100,
                  color: "random",
                  opacity: 0.4,
                  width: 1,
                  triangles: {
                    enable: true,
                    color: "#ffffff",
                    opacity: 0.1
                  }
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  },
                  onclick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true,
              background: {
                color: "#000000",
                image: "",
                position: "50% 50%",
                repeat: "no-repeat",
                size: "cover"
              }
            }}
        />
        {/**-------------------------------------------------------------------------------- */}
        <Routes>
    
          <Route path="/" element={<Home />}></Route>
          <Route path="/AboutMe" element={<AboutMe />}></Route>
          <Route path="/Works" element={<Works />}></Route>
         
        </Routes>
      </BrowserRouter>
    </ThemeProvider>


  );
}

export default App;
