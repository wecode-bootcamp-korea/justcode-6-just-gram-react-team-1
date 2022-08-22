import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import './styles/common.css';
import './styles/reset.css';

function App() {
  return (
    <Router basename='/justgram-react/'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
