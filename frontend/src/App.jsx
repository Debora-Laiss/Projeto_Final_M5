import { useState, useEffect } from 'react';
import ContactComponent from "./components/contact/contact"
import Home from "./components/home/home"
import Footer from "./components/footer/footer.jsx"
import HeaderComponent from "./components/header/header.jsx"
import AboutComponent from "./components/about/about.jsx"

import LoginPage from "./components/login/pageLogin/login.jsx";
import {BrowserRouter as Router ,Route , Routes } from "react-router-dom"
// import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);
  const [goals, setGoals] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  
  

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    
    api.get('/api/user/all')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  useEffect(() => {
    const getAllGoals = async () => {
      try {
        const response = await api.get('/goal/goal/all');
        setGoals(response.data); 
      } catch (error) {
        console.error("Erro ao buscar metas:", error);
      }
    };

    getAllGoals();
  }, [goals]);

   useEffect(() => {
     const loadFeedbacks = async () => {
       try {
         const response = await getAllFeedbacks();
         setFeedbacks(response.data);
       } catch (error) {
         console.error("Erro ao buscar feedbacks:", error);
       }
     };

     loadFeedbacks();
   }, []);
  
  const User = async (name, age) => {
    const newUser = {
      name,
      age,
    };

    try {
      const response = await api.post('/api/user/new', newUser);
      setUsers([...users, response.data.novoUser]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const createGoal = async () => {
    try {
      const newGoal = {
        title: "Sair para novos lugares",
        description: "Se adpartar todos os dias",
        completed: false
      };
  
      const response = await api.post('/goal/goal/new', newGoal);
      setGoals([...goals, response.data.novaMeta]); 
      console.log("Meta criada com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao criar nova meta:", error);
    }
  };

  const handleCreateFeedback = async (user, message) => {
    try {
      const response = await createFeedback(user, message);
      setFeedbacks([...feedbacks, response.data.novoFeedback]);
      console.log("Feedback criado com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao criar feedback:", error);
    }
  };

  const updateUser = async (id, updatedUser) => {
    try {
      const response = await api.put(`/api/user/update/${id}`, updatedUser);
      setUsers(users.map(user => (user.id === id ? response.data.userAtualizado : user)));
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const updateGoalRecord = async (id, updatedGoal) => {
    try {
        await api.put(`/goal/goal/${id}`, updatedGoal);  
        setGoals(goals.map((goal) => 
            goal.id === id ? { ...goal, ...updatedGoal } : goal
        ));
    } catch (error) {
        console.error('Erro ao atualizar a meta:', error);
    }
  };

  const handleUpdateFeedback = async (id, user, message) => {
    try {
      const response = await updateFeedbackById(id, user, message);
      setFeedbacks(feedbacks.map(f => (f.id === id ? response.data.feedbackAtualizado : f)));
      console.log("Feedback atualizado com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao atualizar feedback:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`/api/user/delete/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
   
  const deleteGoalRecord = async (id) => {
    console.log('Tentando deletar a meta com ID:', id);  
    try {
        
        await api.delete(`/goal/goal/${id}`);
        setGoals(goals.filter((goal) => goal.id !== id));
    } catch (error) {
        console.error('Erro ao deletar a meta:', error);
    }
};

const handleDeleteFeedback = async (id) => {
  try {
    await deleteFeedbackById(id);
    setFeedbacks(feedbacks.filter(f => f.id !== id));
    console.log("Feedback deletado com sucesso.");
  } catch (error) {
    console.error("Erro ao deletar feedback:", error);
  }
};

  
  const handleToggleDarkMode = () => setDarkMode(prev => !prev);

  return (
  
     
  <Router>
  <HeaderComponent /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<ContactComponent  />} />
      <Route path="/about" element={<AboutComponent  />} />
      <Route path="loginPage" element={<LoginPage/>}/>

    </Routes>

    <Footer/>
  </Router>
 
)
};


export default App;
