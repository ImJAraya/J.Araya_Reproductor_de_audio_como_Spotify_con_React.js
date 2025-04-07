import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Reproductor from './components/Reproductor';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reproductor/>
  </React.StrictMode>,
)
