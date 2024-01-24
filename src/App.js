import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Resume from './pages/resume';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element = {<Home />} />
        <Route path='/' exact element = {<Home />} />
        <Route exact path='/resume' element = {<Resume />} />
        <Route path='/about' element = {<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
