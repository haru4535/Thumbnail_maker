import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThumnailPage } from './pages/thumbnail-page';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ThumnailPage />} />
      </Routes>
    </div>
  );
}

export default App;
