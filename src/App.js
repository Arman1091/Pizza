import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import TopBar from './components/TopBar'
import About from './components/About'
import Contact from './components/Contact'
import CGV from './components/CGV'


function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/CGV' element={<CGV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
