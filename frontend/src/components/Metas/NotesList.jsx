import Note from './note';
import AddNote from './AddNote';
import './search.css';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
	handleUpdateNote,
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					key={note._id} 
					id={note._id}
					text={note.note}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
					handleUpdateNote={handleUpdateNote}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;
