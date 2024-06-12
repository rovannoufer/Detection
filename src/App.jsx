import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detect from './components/detect';
import Home from './pages/home';
import Landing from './pages/landing';
import Pose from './components/pose';
import HandPose from './components/handpose';
import Signup from './pages/signup';
import { AuthContextProvider } from './pages/Authcontext';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <AuthContextProvider>
            <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home /> }>
                    <Route path='/' element={<Landing /> }/>
                    <Route path='/detect' element={ <ProtectedRoute> <Detect /> </ProtectedRoute>}/>
                    <Route path='/pose' element={<Pose /> }/>
                    <Route path='/handpose' element={<HandPose /> }/>
                    
                    {/* <Route path='signup' element={ <UserAuth type = "sign-up"/> }/> */}
              </Route>
              <Route path='/signin' element={ <Signup type = "sign-in"/>  }/>
              <Route path='/signup' element={ <Signup type = "sign-up"/> }/>
          </Routes>
          </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App;