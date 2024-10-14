import { useState } from 'react';
import api from '../services/service.jsx'; // Importa a instância do Axios configurada

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = async () => {
		if (noteText.trim().length > 0) {
			const date = new Date().toISOString();
			const mood = 'happy';
			const stressLevel = 0;
			const anxietyLevel = 0; 

			try {
				await api.post('/moodRecord', {
					date,
					mood,
					stress_level: stressLevel,
					anxiety_level: anxietyLevel,
					note: noteText,
				});
				handleAddNote(noteText);
				setNoteText('');
			} catch (error) {
				console.error('Error adding note:', error);
			}
		}
	};

	return (
		<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Add about your day, mood, and feelings...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>{characterLimit - noteText.length} Remaining</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;