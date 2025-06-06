import { useState, useEffect } from 'react'
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Root from "../components/Root"
import HomePage from '../components/HomePage'
import Contact from "../components/Contact"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Root/> }>
          <Route index element={ <HomePage/> } />
          <Route path="contact" element={ <Contact/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
