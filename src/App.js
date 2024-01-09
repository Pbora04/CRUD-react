import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Create from './Create';
import Read from './Read';
import Update from './Update';

function App() {
  return (
    <>
          <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Create/>}>  </Route>
          <Route path='/read/:id' element={<Read/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;

