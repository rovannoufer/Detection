import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detect from './components/detect';
import Home from './pages/home';
import Landing from './pages/landing';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home /> }>
              <Route path='/' element={<Landing /> }/>
              <Route path='/home' element={<Detect /> }/>
        </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App;