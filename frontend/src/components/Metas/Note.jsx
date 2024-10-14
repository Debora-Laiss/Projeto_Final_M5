import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useState } from "react";
import api from "../../services/apiService.jsx";
import './search.css';

const Note = ({ id, text, date }) => {
  const [noteText, setNoteText] = useState('');
  const [editMode, setEditMode] = useState(false);
 
  
  const handleDeleteClick = async () => {
    try {
      await api.delete(`/goal/goal/${id}`);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
};
  const handleSaveClick = async () => {
    try {
      const response = await api.put(`/goal/goal/${id}`, {
        note: noteText
      });
      setEditMode(!editMode);
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };
  const handleUpdateClick = async () => {
  
    const updatedRecord = {
      date: new Date().toISOString(), // Atualiza a data também, se necessário
    };
    setEditMode(!editMode);
    
  };

  const handleChange = (event) => {
			setNoteText(event.target.value);
	};

  return (
    <div className="note">
      {editMode == true ? (
        <>
          <textarea
            rows="8"
            cols="10"
            placeholder="Type to add a note..."
            value={noteText}
            onChange={handleChange}
          ></textarea>
          <button className="save" onClick={handleSaveClick}>
            Save
          </button>
        </>
      ) : (
        <span>{text}</span>
      )}
      <div className="note-footer">
        <small>{new Date(date).toLocaleDateString()}</small>

        {/* Ícone de atualização */}
        <MdEdit
          onClick={handleUpdateClick} 
          className="edit-icon"
          size="1.3em"
        />

        {/* Ícone de deletar */}
        <MdDeleteForever
          onClick={handleDeleteClick}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;