
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DirectorsPage from './Components/DirectorsPage';
// import { SidePanel } from './Components/SidePanel';
import { Home } from './Components/Home';
import Upload from "./Components/Upload"

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/employee'>
          <DirectorsPage/>
        </Route> */}
        <Route path="/employee" element={<DirectorsPage />} />
        <Route path="/upload" element={<Upload/>} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
