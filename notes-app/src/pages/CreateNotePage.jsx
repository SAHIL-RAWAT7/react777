import { useState } from 'react';
import { useNotes } from '../context/NotesContext';
import { useNavigate } from 'react-router-dom';

const CreateNotePage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { addNote } = useNotes();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    
    addNote({ title, body });
    setTitle('');
    setBody('');
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Create New Note</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Note Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter note title"
            required
          />
        </div>
        <div>
          <label htmlFor="body" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Note Content
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="6"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Write your note here..."
            required
          ></textarea>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-red-700 hover:text-white text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition duration-300"
          >
            Save Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNotePage;