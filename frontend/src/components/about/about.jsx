import  React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './about.css'; 


function About() {
    const [mostreMais, setmostreMais] = React.useState(false);
  
    const handleToggleDetails = () => {
        setmostreMais(!mostreMais);
    };

    return(
        <Container className='about-container'>
            <Box textAlign={'center'} mt={5}>
                <Typography className='about-us' variant='h2'>
                    SOBRE NÓS
                </Typography>
                    
                <Typography className='about-body' variant='body2'>
                    Na nossa empresa, nos dedicamos a ajudar crianças e pais a compreenderem o autismo de maneira acessível e eficaz.
                    Oferecemos funcionalidades práticas e intuitivas que promovem uma abordagem leve, respeitosa e inclusiva.
                    Nosso compromisso é fornecer ferramentas que auxiliem no aprendizado e no desenvolvimento, oferecendo suporte a famílias que buscam entender melhor o espectro autista. 
                    Trabalhamos com sensibilidade e dedicação, garantindo que cada interação seja um passo em direção a uma compreensão mais profunda e compassiva do autismo.
                </Typography>

            {mostreMais && (
                 <Typography className='about-body2' variant='body3'>
                    Nossa equipe se dedica de forma incansável para garantir que cada funcionalidade, recurso e conteúdo que desenvolvemos reflita o nosso compromisso com a causa autista. 
                    Sabemos que ajudar famílias a entenderem o autismo exige muito mais do que tecnologia — é preciso empatia, cuidado e uma abordagem humana. 
                    Por isso, trabalhamos com paixão, investindo tempo e esforço para tornar a experiência de todos os envolvidos leve e acessível.

                    Nosso empenho vai além do desenvolvimento de soluções práticas. 
                    Estamos profundamente comprometidos em aumentar a conscientização sobre o movimento autista de maneira altruísta.
                    Buscamos compartilhar informações que ajudem a derrubar barreiras, sempre com a preocupação de manter o tom leve, acolhedor e respeitoso, para que mais pessoas se envolvam com a causa e apoiem essa jornada tão importante.

                    Cada membro da nossa equipe sabe que o impacto que estamos criando vai muito além das telas — é sobre transformar vidas, promovendo uma compreensão maior e mais inclusiva do autismo.
                 </Typography>
             )}
            </Box>

            <Box className='about-button' alignItems={'center'} sx={{ display: 'flex', flexDirection:'column',}}>
             <Button variant='contained' onClick={handleToggleDetails}>
                {mostreMais ? 'mostre menos' : 'mostre mais'}
             </Button>
            </Box>
        </Container>
    );
};  


export default About;

