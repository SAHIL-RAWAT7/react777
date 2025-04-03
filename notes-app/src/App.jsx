import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotesProvider } from './context/NotesContext';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import CreateNotePage from './pages/CreateNotePage';
import NoteDetailPage from './pages/NoteDetailPage';
import Layout from './components/Layout';

function App() {
  return (
    <ThemeProvider>
      <NotesProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create" element={<CreateNotePage />} />
              <Route path="/note/:id" element={<NoteDetailPage />} />
            </Routes>
          </Layout>
        </Router>
      </NotesProvider>
    </ThemeProvider>
  );
}

export default App;