import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=8');
        const englishNotes = response.data.map(note => ({
          ...note,
          title: note.title || 'Sample Note Title',
          body: note.body || 'This is a sample note content in English.'
        }));
        setNotes(englishNotes);
      } catch (err) {
        setError('Failed to load notes. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const addNote = (note) => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      body: note.body,
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, loading, error }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};