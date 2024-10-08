import React, { useState } from 'react';  
import { TextField, Button, Box, Typography, Alert } from '@mui/material';  

const ContactComponent = () => {  
 
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', mensagem: '' });  
  const [errors, setErrors] = useState({});  
  const [submitted, setSubmitted] = useState(false);  

  
  const handleChange = (e) => {  
    setFormData({ ...formData, [e.target.name]: e.target.value });  
    setErrors({ ...errors, [e.target.name]: '' }); 
  };  

    
  const validateForm = () => {  
    const newErrors = {};  
    
    for (let key in formData) {  
      if (!formData[key]) {  
        newErrors[key] = 'Este campo é obrigatório.';  
      }  
    }  
    return newErrors;  
  };  

  
  const handleSubmit = (e) => {  
    e.preventDefault();  
    const validationErrors = validateForm();  
    if (Object.keys(validationErrors).length > 0) {  
      setErrors(validationErrors);  
      return;  
    }  

    
    console.log(formData);    
    setSubmitted(true);  
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' }); 
  };  

  return (  
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2, backgroundColor: '#ADD8E6' }}>  
      <Typography variant="h5" align="center">Fale conosco</Typography>  
      {submitted && <Alert severity="success">Mensagem enviada com sucesso!</Alert>}  
      <form onSubmit={handleSubmit}>  
        <TextField   
          label="Nome"   
          name="nome"   
          fullWidth   
          margin="normal"   
          value={formData.nome}   
          onChange={handleChange}   
          error={!!errors.nome}   
          helperText={errors.nome}   
          required   
        />  
        <TextField   
          label="E-mail"   
          name="email"   
          type="email"   
          fullWidth   
          margin="normal"   
          value={formData.email}   
          onChange={handleChange}   
          error={!!errors.email}   
          helperText={errors.email}   
          required   
        />  
        <TextField   
          label="Telefone"   
          name="telefone"   
          fullWidth   
          margin="normal"   
          value={formData.telefone}   
          onChange={handleChange}   
          error={!!errors.telefone}   
          helperText={errors.telefone}   
          required   
        />  
        <TextField   
          label="Mensagem"   
          name="mensagem"   
          fullWidth   
          margin="normal"   
          multiline   
          rows={4}   
          value={formData.mensagem}   
          onChange={handleChange}   
          error={!!errors.mensagem}   
          helperText={errors.mensagem}   
          required   
        />  
        <Button type="submit" variant="contained" fullWidth>  
          Enviar  
        </Button>  
      </form>  
    </Box>  
  );  
};  

export default ContactComponent;