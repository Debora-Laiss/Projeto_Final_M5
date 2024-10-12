import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
  


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
  
const BasicModal = () => {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  
    return (
      <div>
        <Button 
  onClick={handleOpen} 
  sx={{ 
    position: 'absolute',
    right: '30px', 
    height: '60px',
    transform: 'translateY(-50%)',
    marginRight: '10px',
    backgroundColor: '#afb8ee', 
    color: '#fff', 
    borderRadius: '80px',
    padding: '10px 20px', 
    '&:hover': {
      backgroundColor: '#4757b9',
    },
    display: 'flex', 
    alignItems: 'center', 
    gap: '8px', 
  }}
>
    <img 
        src="./src/assets/reveja.png" 
        alt="Ícone" 
        style={{ 
        width: '24px', 
        height: '24px', 
        objectFit: 'cover' 
    }}></img> 


</Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
             Nos de o seu Feedback &#129513;
                <TextField   
                    label="Nome"   
                    name="nome"   
                    fullWidth   
                    margin="normal"      
                    required   
                />  
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <TextField   
                    label="Mensagem"   
                    name="mensagem"   
                    fullWidth   
                    margin="normal"   
                    multiline   
                    rows={4}    
                    required   
                />
            </Typography>
            <Button type="submit" variant="contained" sx={{ margin: '10 10px' }}>  
             Enviar 
            </Button> 
            <Button type="submit" variant="contained" sx={{ backgroundColor: 'tomato', margin: '0 10px' }}>  
             Excluir
            </Button>
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#ffffff', margin: '0px' }}>  
            <img 
                src="./src/assets/editar.png" 
                alt="Ícone" 
                style={{ 
                width: '24px', 
                height: '24px', 
                objectFit: 'cover' 
            }}></img> 
             
            </Button>
          </Box>
        </Modal>
      </div>
    );
}

export default BasicModal;