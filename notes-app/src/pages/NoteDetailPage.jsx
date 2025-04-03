import { useParams, useNavigate } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';

const NoteDetailPage = () => {
  const { id } = useParams();
  const { notes, deleteNote } = useNotes();
  const navigate = useNavigate();

  const note = notes.find((note) => note.id === (isNaN(id) ? id : Number(id)));

  if (!note) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold dark:text-white">Note not found</h1>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Back to Notes
        </button>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      deleteNote(note.id);
      navigate('/');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-bold dark:text-white">{note.title}</h1>
            <button
              onClick={handleDelete}
              className="text-red-400 hover:text-red-700 dark:hover:text-red-400 rounded-md bg-grey-500"
            >
              Delete Note
            </button>
          </div>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{note.body}</p>
          <div className="mt-6">
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition duration-300"
            >
              Back to All Notes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;