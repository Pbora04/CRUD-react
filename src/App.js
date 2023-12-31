import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Create from './Create';
import Read from './Read';
import Update from './Update';

function App() {
  return (
    <>
          <BrowserRouter>
      {/* <Link to='/'>Home</Link> */}
      {/* <Link to='/create'>Create</Link> */}
      {/* <Link to='/read'>Read</Link> */}
      {/* <Link to='/update'>Update</Link> */}

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Create/>}>  </Route>
          <Route path='/read/:id' element={<Read/>}></Route>
          <Route path='/update'element={<Update/>}></Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;

