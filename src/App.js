// import logo from './logo.svg';
import {Route, Routes} from "react-router";
import './Components/App.css';
import './Components/Header.css';


import Header from './Components/Header';
import Index from './Components/Index';
import Posts from './Components/Posts';
import Todos from './Components/Todos';


function App() {
  return (
    <div className='App'>
      <Header/>

      <Routes>
        <Route path="/Users" element={<Index/>} />
        <Route path="Posts" element={<Posts/>} />
        <Route path="Todos" element={<Todos/>} />
      </Routes>
    
      
    </div>
  );
}

export default App;
