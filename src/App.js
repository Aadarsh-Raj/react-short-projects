import './App.css';
import {BrowserRouter, Router, Route, Routes} from "react-router-dom"
import Home from './Components/Home';
import Header from './Components/Header';
import Error from './Components/Error';
import Counter from './Components/Counter';
import BackgroundChanger from './Components/BackgroundChanger';
function App() {
  return (
    <>
    <main className='main-container'>
    <BrowserRouter>
    
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/counter' element={<Counter />} />

<Route path='/backgroundchanger' element={<BackgroundChanger />} />
      <Route path="/*" element={<Error />} errorElement={<Error />}/>
      </Routes>

    </BrowserRouter>
    </main>
    
    </>
  );
}

export default App;
