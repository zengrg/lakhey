import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, About, Shop, Contact, Login, Signup } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
  );
}

export default App;
