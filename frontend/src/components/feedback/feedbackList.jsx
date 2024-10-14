import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';
//import { getAllFeedbacks } from '../../services/feedbackApi.js';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    const data = await getAllFeedbacks();
    setFeedbacks(data);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <Box sx={{ padding: 3, maxWidth: 600, margin: '0 auto' }}>
      <Typography variant="h6" gutterBottom>
        Lista de Feedbacks
      </Typography>
      <List>
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback) => (
            <ListItem key={feedback.id}>
              <ListItemText
                primary={feedback.user}
                secondary={feedback.message}
              />
            </ListItem>
          ))
        ) : (
          <Typography variant="body1">Nenhum feedback encontrado.</Typography>
        )}
      </List>
    </Box>
  );
};

export default FeedbackList;
