import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detect from './components/detect';
import Home from './pages/home';
import Landing from './pages/landing';
import Pose from './components/pose';
import HandPose from './components/handpose';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home /> }>
              <Route path='/' element={<Landing /> }/>
              <Route path='/detect' element={<Detect /> }/>
              <Route path='/pose' element={<Pose /> }/>
              <Route path='/handpose' element={<HandPose /> }/>
        </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App;