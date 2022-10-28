import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/detail/:name' element={<Detail />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
