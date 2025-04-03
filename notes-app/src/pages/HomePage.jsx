import { Link } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';

const HomePage = () => {
  const { notes, loading, error } = useNotes();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
        <span className="ml-4">Please Wait Your Page is Loading....</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-green-500 dark:bg-gray-700 text-white py-12 px-4 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">My Notes App</h1>
        <p className="text-xl mb-6">"Capture Ideas, Stay Organized, Never Forget."</p>
        <Link 
          to="/create" 
          className="bg-white text-green-500 dark:bg-gray-800 dark:text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-100 dark:hover:bg-gray-600 transition duration-300"
        >
          Create New Note
        </Link>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {notes.map((note) => (
          <div key={note.id} className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-black  hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h2 className="text-xl text-black font-semibold mb-2 dark:text-black">{note.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{note.body}</p>
              <div className="flex justify-between items-center">
                <Link 
                  to={`/note/${note.id}`} 
                  className="text-green-500 dark:text-green-700 hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;