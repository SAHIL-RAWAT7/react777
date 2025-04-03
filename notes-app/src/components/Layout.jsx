import { useTheme } from '../context/ThemeContext';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;