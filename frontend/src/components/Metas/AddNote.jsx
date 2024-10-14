import { useState } from 'react';
import api from '../../services/apiService.jsx'; 

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = async () => {
		console.log('chegou')
		if (noteText.trim().length > 0) {
			const title = "Sair para novos lugares"; 
			const description = noteText; 
			const completed = false; 

			const newGoal = new Goal(Date.now(), title, description, completed);
			try {
				await api.post('/goal/goal/new', {
				title: newGoal.title,
                description: newGoal.description,
                completed: newGoal.completed
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