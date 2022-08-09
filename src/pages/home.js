import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform  } from 'framer-motion';
import {Grid,  CardContent, Divider, Chip, Typography, Link} from "@mui/material"

//import { Link } from 'react-router-dom'

import "../pages/HomeAssets/styles.scss"
import "../pages/HomeAssets/animation.css"

import AnimatedText from "../components/animatedtext.js";

import Image from 'mui-image'
import Computer from './HomeAssets/computer.png';

import AboutMe from './HomeAssets/aboutme.png';
import MyWorks from './HomeAssets/works.png';
import Skills from './HomeAssets/skills.png';
import Contact from './HomeAssets/contact.png';


import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';



export default function Home(){

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();

      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
  }



      // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading4", text: " Buenos días / tardes / noches" },
    {type: "heading1", text: "Soy Nahomi Soto"},
    { type: "heading2", text: " Soy programador full stack" },
    { type: "heading3", text: "Puedo realizar paginas web, aplicaciones móviles y videojuegos. Así como también edición básica de imágenes, video y dibujos." },
    { type: "heading3", text: "" },
   
  ];

  const otherText=[{type: 'heading2', text: "Da click en una de estas"}]

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };
 
  return (
    <Grid container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
      sx={{ color:'text.primary'}}  >
     
        <Grid item xs={12} md={12}  sx={{ width: '100%', maxWidth: 700 ,  textAlign: 'center'}}>
  
          <div class="screen">
                <h1>CARGANDO...</h1>
          </div>

          <section>

            <motion.div
                className="App"
                initial="hidden"
                animate="visible"
                
                variants={container}
                >
                <div className="container">
                    {placeholderText.map((item, index) => {
                    return <AnimatedText {...item} key={index} />;
                    })}
                </div>
    
            </motion.div>


<Link href="/#options" underline="hover" >
              <span>Si quieres saber más sobre mí da click aquí o da scroll hacia abajo</span>
              </Link>


                    

            <Grid container sx={{ paddingBottom: "2%"}}>

                  <Grid item sm={0} md={4}>
                  </Grid>

                  <Grid item sm={12} md={4} sx={{ padding: "2%"}}>
                    
                    <motion.div
                      style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          placeItems: "center",
                          placeContent: "center",
                          borderRadius: 30,
                  
                          perspective: 400
                      }}
                      onMouseMove={handleMouse}
                    >
                      <motion.div
                          style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: 30,
                        
                              rotateX: rotateX,
                              rotateY: rotateY
                          }}
                      >
                        <Image src={Computer} duration={0} alt="Dibujo de una computadora con varios componentes alrededor" fit="cover"/>

                      </motion.div>
                    </motion.div>  

                  
                  </Grid>

            </Grid>  

          <Grid sx={{ paddingTop: "15%"}} id="options">



            <motion.div
                className="App"
                initial="hidden"
                animate="visible"
                variants={container}
                >
          
                <div className="container">
                    {otherText.map((item, index) => {
                    return <AnimatedText {...item} key={index} />;
                    })}
                </div>
                <ArrowDropDownCircleIcon color="primary" />
    
            </motion.div>
                    
      

            <Link  href="./AboutMe">
              
                    <div className="example-container">     
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >  <Image src={AboutMe} duration={0} alt="Dibujo de una computadora con varios componentes alrededor" fit="cover"/> </motion.div>
                    <Typography variant="h3" gutterBottom >Sobre mí</Typography>   
                    </div>
            </Link>

           
            <Link  href="./Works">
                    <div className="example-container">
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >  <Image src={MyWorks} duration={0} alt="Dibujo de una computadora con varios componentes alrededor" fit="cover"/> </motion.div>
                    <Typography variant="h3" gutterBottom >Mis trabajos</Typography>   
                    </div>
            </Link>

              <Link  href="./Skills">
                     <div className="example-container">                  
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >  <Image src={Skills} duration={0} alt="Dibujo de una computadora con varios componentes alrededor" fit="cover"/> </motion.div>
                    <Typography variant="h3" gutterBottom >Mis habilidades</Typography>   
                    </div>
            </Link>

            <Link  href="./Contact">
                    <div className="example-container">
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >  <Image src={Contact} duration={0} alt="Dibujo de una computadora con varios componentes alrededor" fit="cover"/> </motion.div>
                    <Typography variant="h3" gutterBottom >Contacto</Typography>   
                    </div>
            </Link> *
            </Grid>

          </section>        


        </Grid>
        
        </Grid>
    

   
  ) 
}


//<a href="https://storyset.com/work">Work illustrations by Storyset</a>
//<a href="https://storyset.com/online">Online illustrations by Storyset</a>
//<a href="https://storyset.com/business">Business illustrations by Storyset</a>
//<a href="https://storyset.com/people">People illustrations by Storyset</a>
//<a href="https://storyset.com/work">Work illustrations by Storyset</a>