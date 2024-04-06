import CartContent from './components/CartContent/CartContent';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<CartContent/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
