import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="bg-green-500 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Your Notes</Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-green-200">All Notes</Link>
          <Link to="/create" className="text-white hover:text-green-200">Create</Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-green-700 dark:bg-gray-700 text-white"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;