import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './Components/Header';
export default function App() {

  return <BrowserRouter>
     <Header></Header>
     <Routes>
      <Route path='/' element= {<Home></Home>}></Route>
      <Route path='/sign-in' element= {<Signin></Signin>}></Route>
      <Route path='/sign-up' element= {<SignUp></SignUp>}></Route>
      <Route path='/about' element= {<About></About>}></Route>
      <Route path='/profile' element= {<Profile></Profile>}></Route>
     </Routes>
  </BrowserRouter>
}
