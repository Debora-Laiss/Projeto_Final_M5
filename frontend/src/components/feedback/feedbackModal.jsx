import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Typography, Fab } from '@mui/material';
//import { createFeedback } from '../../.././src/services/apiService.jsx'
import AddIcon from '@mui/icons-material/Add';

const FeedbackModal = ({ fetchFeedbacks }) => {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envia o feedback para a API
    await createFeedback({ user, message });

    
    fetchFeedbacks();
    setUser('');
    setMessage('');
    handleClose();
  };

  return (
    <>
      { }
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
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 1,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Enviar Feedback
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Seu nome"
              variant="outlined"
              fullWidth
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Seu feedback"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              sx={{ marginBottom: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Enviar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default FeedbackModal;


