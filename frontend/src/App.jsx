import { useState, useEffect } from 'react';
import ContactComponent from "./components/contact/contact"
import Home from "./components/home/home"
import Footer from "./components/footer/footer.jsx"
import HeaderComponent from "./components/header/header.jsx"
import {BrowserRouter as Router ,Route , Routes } from "react-router-dom"
import NotesList from './components/Metas/NotesList.jsx'
import api from './components/services/service.jsx'
import Note from './components/Metas/note.jsx'
import { Box, createTheme, ThemeProvider } from '@mui/material';
import AboutComponent from './components/about/about.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [moodRecord, setMoodRecord] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Buscar registros de humor do backend
    api.get('/moodRecord')
      .then(response => setMoodRecord(response.data.body))
      .catch(error => console.error('Error fetching mood records:', error));
  }, [moodRecord]);

  const addMoodRecord = async (mood, stressLevel, anxietyLevel, note) => {
    const date = new Date().toISOString(); // Adiciona a data atual
    const newRecord = {
      date,
      mood,
      stress_level: stressLevel,
      anxiety_level: anxietyLevel,
      note,
    };

    try {
      const response = await api.post('/moodRecord', newRecord);
      setMoodRecord([...moodRecord, response.data.body]);
    } catch (error) {
      console.error('Error adding mood record:', error);
    }
  };

  // Função para atualizar um registro específico
  const updateMoodRecord = async (id, updatedRecord) => {
    try {
      await api.put(`/moodRecord/${id}`);
      setMoodRecord(moodRecord.filter((record) => record._id !== id));
  } catch (error) {
      console.error('Error update mood record:', error);
  }
  };

  const deleteMoodRecord = async (id) => {
    console.log('Attempting to delete record with ID:', id); // Verifica o ID
    try {
        await api.delete(`/moodRecord/${id}`);
        setMoodRecord(moodRecord.filter((record) => record._id !== id));
    } catch (error) {
        console.error('Error deleting mood record:', error);
    }
  };

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

 

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', 
    },
  });
      
  return (
    <ThemeProvider theme={theme}> 
   <Router>
     <HeaderComponent darkMode={darkMode} handleToggleDarkMode={handleToggleDarkMode} /> 
     <Box className={`app ${darkMode ? 'dark-mode' : ''}`}>
     <Box className='container'>
      <Routes>
        <Route path="/" element={<Home handleToggleDarkMode={handleToggleDarkMode} darkMode={darkMode}/>} />
        <Route path="/home" element={<Home  handleToggleDarkMode={handleToggleDarkMode} darkMode={darkMode}/>} />
        <Route path="/contact" element={<ContactComponent  handleToggleDarkMode={handleToggleDarkMode} darkMode={darkMode}/>} />
        <Route path="/about" element={<AboutComponent darkMode={darkMode} />} />
        <Route 
      path="/note" 
      element={
        <Note
          notes={moodRecord.filter((record) =>
          record.note && record.note.toLowerCase().includes(searchText.toLowerCase())
             )}
           handleAddNote={addMoodRecord}
           handleDeleteNote={deleteMoodRecord}
           handleUpdateNote={updateMoodRecord}
        /> } />
        <Route path="/notes" element={<NotesList />} /> 
      </Routes>
      </Box>
      </Box>
      <Footer/>  
    </Router>
    </ThemeProvider>
     //  <section>                 
     //       <HeaderComponent/> 
     //       <Home/>
     //       <Footer/>  
     //       <ContactComponent/>  
     //  </section>
 
)
}


export default App;
