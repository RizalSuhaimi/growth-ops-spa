import { useState, useEffect } from 'react'
import './App.css'
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Root from "../components/Root/Root"
import HomePage from '../components/HomePage/HomePage'
import Contact from "../components/Contact/Contact"

function App() {

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
