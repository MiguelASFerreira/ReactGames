import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import App from './App'

import './index.css'

import Home from './pages/Home'
import Games from './pages/Games'
import DetailsGame from './pages/DetailsGame'
import Search from './components/Search'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/games' element={<Games />}/>
          <Route path='/game/:id/:name' element={<DetailsGame />} />
          <Route path='search' element={<Search />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
