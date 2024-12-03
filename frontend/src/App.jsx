import { useState, useEffect } from 'react';
import ContactComponent from "./pages/contact/contact.jsx"
import Home from "./pages/home/home.jsx"
import FriendList from "./pages/friendList/friendList.jsx"
import Footer from "./components/footer/footer.jsx"
import HeaderComponent from "./components/header/header.jsx"
import AboutComponent from "./pages/about/about.jsx"
import {BrowserRouter as Router ,Route , Routes } from "react-router-dom"
import api from './services/apiService.jsx'
import { Box, createTheme, ThemeProvider } from '@mui/material';
import './App.css'; 
import Metas from './pages/Metas/Metas.jsx';
import LoginPage from './pages/login/pageLogin/login.jsx';



function App() {

  const [darkMode, setDarkMode] = useState(false);
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

  const getAllFeedbacks = async () => {
    return await api.get('/feedback/feedback/all');
  };

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
   }, [feedbacks]);
  
  
  const handleToggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <ThemeProvider theme={theme}> 
   <Router>
   <HeaderComponent darkMode={darkMode} handleToggleDarkMode={handleToggleDarkMode} />
   <Box className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
     <Box className='container'>
      <Routes>
        <Route path="/" element={<LoginPage handleToggleDarkMode={handleToggleDarkMode} darkMode={darkMode}/>} />
        <Route path="/home" element={<Home  handleToggleDarkMode={handleToggleDarkMode} darkMode={darkMode}/>} />
        <Route path="/contact" element={<ContactComponent  handleToggleDarkMode={handleToggleDarkMode} darkMode={darkMode}/>} />
        <Route path="/about" element={<AboutComponent darkMode={darkMode} />} />
        <Route path="/metas"  element={<Metas/>} /> 
        <Route path="/friendList"  element={<FriendList/>} /> 
      </Routes>
      </Box>
      </Box>
     <Footer className={darkMode ? 'dark-mode' : ''} darkMode={darkMode} handleToggleDarkMode={handleToggleDarkMode} />
    </Router>
   </ThemeProvider>
)
};


export default App;
