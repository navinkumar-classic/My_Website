import {HashRouter, Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import Resume from './pages/resume';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/My_Website' exact element = {<Home />} />
        <Route path='/My_Website/resume' exact element = {<Resume />} />
        <Route path='/My_Website/about' exact element = {<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
