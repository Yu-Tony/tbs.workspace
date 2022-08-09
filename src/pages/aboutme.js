  /*--------------------------IMPORTS--------------------- */
import { Component, React ,useRef, useEffect, useState } from "react";
import {Grid,  CardContent, Divider, Chip, Link, Button} from "@mui/material"
import LinearProgress from '@mui/material/LinearProgress';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import { motion, useMotionValue, useTransform  } from 'framer-motion';


import move from "lodash-move";
import "../pages/HomeAssets/styles.scss"


import Image from 'mui-image'
import Profile from './HomeAssets/profile.png';
import { borderRadius } from "@mui/system";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const cards = [
  // this only change in the first render
  { id: 1, title: "Cream Dream", category: "Fantasy", published: "2001" },
  { id: 2, title: "zOMG", category: "Fantasy", published: "2002" },
  { id: 3, title: "Nuestra tecnologia", category: "Action", published: "2013" },
  { id: 4, title: "ACodemia", category: "Action", published: "2013" },
  { id: 5, title: "ACodemia", category: "Action", published: "2013" },
  { id: 6, title: "ACodemia", category: "Action", published: "2013" },
  { id: 7, title: "ACodemia", category: "Action", published: "2013" },
  { id: 8, title: "ACodemia", category: "Action", published: "2013" },
  { id: 9, title: "ACodemia", category: "Action", published: "2013" },
  { id: 10, title: "ACodemia", category: "Action", published: "2013" }
];
const cardVariants = {
  selected: {
    rotateY: 0,
    scale: 1.1,
    transition: { duration: .35 },
    zIndex: 10,
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
  },
  notSelected: i => ({
    rotateY: i * 5,
    scale: 1 - Math.abs(i * 0.15),
    x: i ? i * 50 : 0,
    opacity: 1 - Math.abs(i * .15),
    zIndex: 10 - Math.abs(i),
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
    transition: { duration: .35 }
  })
}


const preventDefault = (event) => event.preventDefault();
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
  


    return(

      <Grid container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
      sx={{ color:'text.primary', padding:'2%'}}  >
     
 


        
          <Grid container textAlign={"left"} sx={{ width: '100%', maxWidth: "50%" }}>


            <Grid item xs={12} sx={{paddingBottom: "2%"}}>
              <Divider>
                <Chip variant="outlined" label="Creador de esta pagina" />
              </Divider>

            </Grid>

            <Grid item xs={12} md={6} >
              <Typography variant="h6" gutterBottom component="div" >
                Soy un desarrollador full stack. Desarrollo tanto front end como back end en las aplicaciones.
                <br/>
                <br/>
                Estudié la licenciatura de Multimedia y Animación Digital, con especialidad en programacón, en la Universidad Autónoma de Nuevo León.
                <br/>
                <br/>
                Me gusta utilizar la programación para facilitar trabajos de una manera estética y funcional.
                <br/>
                <br/>
                Si me tuviera que describir en 3 palabras sería una persona creativa, paciente y enfocada.
                <br/>
                <br/>
                Mi objetivo es innovar, mejorar y ganar experiencia. De esta manera puedo traer mejor resultados y ayudar de una manera más fácil a quienes colaboren conmigo.
                <br/>
                <br/>
                Estoy abierto a cualquier tipo de oportunidades en las que pueda participar. Si crees tener alguna que encaje con mis 
                <Link href="./Skills" underline="hover"> habilidades </Link> 
                no dudes en 
                <Link href="./Contact" underline="hover"> contactarme </Link>.
               
                <br/>
                <br/>

             
           <Button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.open('https://drive.google.com/file/d/1a_s5yln2QSXJzubrB-qr4gTc8IC7Ddvj/view?usp=sharing', '_blank');
      }}
> Mi Currículum </Button>


     
                <br/>
                <br/>
                <br/>

              </Typography>
            </Grid>

            <Grid item sm={0} md={6} sx={{paddingLeft: "4%"}}>

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
                              width: "75%",
                              height: "75%",
                              borderRadius: 30,
                        
                              rotateX: rotateX,
                              rotateY: rotateY
                          }}
                      >
                        <Image src={Profile} duration={0} alt="Dibujo de una computadora con varios componentes alrededor" fit="cover"/>

                      </motion.div>
                    </motion.div>  
                    

            </Grid>

            
          </Grid>
                
          
 

      
      </Grid>

    );
  }
  //<a href="https://storyset.com/computer">Computer illustrations by Storyset</a>