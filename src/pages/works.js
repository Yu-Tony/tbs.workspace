/*--------------------------IMPORTS--------------------- */
import { Component, React, useState } from "react";
import { Grid, CardContent, Divider, Chip, Link, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import { motion , AnimateSharedLayout, AnimatePresence } from "framer-motion"
import Image from 'mui-image'
import MainComputer from './HomeAssets/computerMain.png';


const preventDefault = (event) => event.preventDefault();

export default function Works() {
  return (
    <Grid container>
        
        <Grid item xs={12}>
          <Divider>
            <Chip variant="outlined" label="Mis trabajos" />
          </Divider>
        </Grid>

        <Grid sx={{ width: '100%', maxWidth: 700 ,  textAlign: 'center', paddingTop: '1%'}}>
        
        <Grid container sx={{ paddingTop: '5%'}} textAlign={"left"}>

          <Grid item xs={12} md={12} >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                typography: 'body1',
                '& > :not(style) + :not(style)': {
                  ml: 2,
                },
              }}
              onClick={preventDefault}
            >
              
              <Link href="#" underline="hover">
                {'Páginas web'}
              </Link>
              <Link href="#" underline="hover">
                {'Videojuegos'}
              </Link>
              <Link href="#" underline="hover">
                {'Realidad virtual'}
              </Link>
              <Link href="#" underline="hover">
                {'Aplicaciones Moviles'}
              </Link>
          
            </Box>
          </Grid>

          <header><h1> Paginas web</h1></header>
          <Grid item sm={12} md={12}>  <Typography variant="h3" gutterBottom component="div" ></Typography></Grid>

{/**------------------------------------------------------------------- 

<Grid item md={12}>
<div 
        className="flashcards"
        onMouseDown={handleMouseDown}
        onMouseUp={() => setDragStart(prev => ({ ...prev, isDragging: false }))}
        onMouseMove={handleMouseMove}
      >
        <div 
          className="flashcards__container" 
          ref={containerRef}
        >
          {cards.map((card, i) => (
            <motion.div 
              className="card" 
              key={card}
              ref={el => cardRefs.current.push(el)}
              onMouseUp={e => handleCardMouseUp(e, card.id)}
              variants={cardVariants}
              animate={selectedCard === card.id ? "selected" : "notSelected"}
              custom={selectedCard ? selectedCard - card.id : 0}
            >  
            
            <Typography variant="h5" gutterBottom component="div" > {card.title}  </Typography>
            <Image src={ProfilePic} duration={0} alt="Dibujo de una computadora con varios componentes alrededor" fit="cover"/>
            

            </motion.div>

           
          ))}
        </div>
      </div>
</Grid>*/}

        

          <Grid item sm={6} md={6}>
            <Typography variant="h6" gutterBottom component="div" >  Página web sobre una repostería que está enfocada en que el cliente tenga un rápido servicio. En nuestra página web puedes registrarte o iniciar sesión y realizar una reservación para ir a comer, o puedes ir directamente a las tiendas físicas. En las mesas de nuestra locación puedes encontrar códigos QR los cuales tienen el menú de Cream Dream. Y dentro de la página realizas tur ordenes.</Typography>
          </Grid>



          <Grid item sm={6} md={6}>
            <Typography variant="h6" gutterBottom component="div" > Videojuego online creado con three.js el cual cuenta con un registro en la pagina, un marcador de puntuacion y una manera de compartir tu puntuacion en FB. Es un juego scroller de zombies en el cual debes de mataer a los zombies y avanzar hasta llegar a la meta.</Typography>

          </Grid>

          
        </Grid>
              
        
        </Grid>
  </Grid>
  )
}



/*function createCard(card) {
  return (
    <Card
      key={card.id}
      id={card.id}
      normalCard={card.normalCard}
      classexpandedCard={card.classexpandedCard}
      classExpandedImg={card.classExpandedImg}
      info={card.info}
      expandedImg={card.expandedImg}
      imagesm={card.imagesm}
      titleh1={card.titleh1}
      expandedP={card.expandedP}
      expandedH2={card.expandedH2}
      anchor={card.anchor}
      anchorText={card.anchorText}
    />
  );
}

export default function Paginasweb() {
  return (


      <Grid container>
        
        {" "}
        <Grid item sm={6} className="card-container">
          {cards.map(createCard)}
        </Grid>
      </Grid>


 
  );
}
*/