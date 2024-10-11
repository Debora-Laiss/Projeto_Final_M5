import React, { useState } from "react";
import { Box, Grid, Typography, Button } from '@mui/material';
import './home.css';


const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };
  return (  
   
   <section className="home"> 
   <div className="home-img">
    
   </div>
   <div className="home-container">
      <Box className="box-titulo" sx={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h1" component="h1" gutterBottom className="title-font">
          AUTISMO
        </Typography>
        {showMore && (
          <Typography variant="body1" className="body-font" sx={{ marginTop: '20px' }}>
            O autismo, também conhecido como Transtorno do Espectro Autista (TEA), é uma condição relacionada 
            ao desenvolvimento do cérebro que modifica a forma como indivíduos que estão no espectro veem e compreendem o mundo, 
            e até a forma como se relacionam com as outras pessoas.Existe ainda uma diferença dentro do próprio espectro.
           Cada indivíduo com autismo apresenta desafios únicos ou seja,
            enquanto alguns conseguem realizar a maioria das atividades de vida diária sem apoio, 
            outros, por exemplo,  precisam de ajuda até em tarefas consideradas simples.

. 
          </Typography>
        )}
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleToggleMore}
          className="custom-button"
        >
          {showMore ? "Mostrar menos" : "Saiba mais"}
        </Button>
        
      </Box>
    </div>
   </section>
  );
} 

export default Home;
