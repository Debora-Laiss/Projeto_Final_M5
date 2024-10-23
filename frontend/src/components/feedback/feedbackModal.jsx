import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Typography, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import api from '../../.././src/services/apiService.jsx';

const FeedbackForm = () => {
  const [newUser, setNewUser] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);
  const [open, setOpen] = useState(false); 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateFeedback = async () => {
    try {
      const newFeedback = {
        user: newUser,
        message: newMessage,
      };

      const response = await api.post('/feedback/feedback/new', newFeedback); 
      setFeedbacks([...feedbacks, response.data.novoFeedback]); 

      // Clear input fields
      setNewUser('');
      setNewMessage('');

      console.log('Feedback created successfully:', response.data);
    } catch (error) {
      console.error('Error creating new feedback:', error);
    }
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpen}
        sx={{
          position: 'fixed',
          left: 16,
          bottom: 16,
          zIndex: 1000,
        }}
      >
        <AddIcon />
      </Fab>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateFeedback();
          }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 500,
            margin: '0 auto',
            padding: 3,
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: 24,
            mt: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Deixe seu Feedback
          </Typography>

          <TextField
            label="Usuário"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Mensagem"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            required
            fullWidth
            multiline
            rows={4}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ fontSize: '16px' }}
          >
            Enviar Feedback
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default FeedbackForm;
