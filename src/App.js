import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Resume from './pages/resume';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home />} />
        <Route path='/' element = {<Home />} />
        <Route path='/resume' element = {<Resume />} />
        <Route path='/about' element = {<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
