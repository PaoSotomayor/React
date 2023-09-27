import React from 'react'
import ReactDOM from 'react-dom/client'
// import { PrimerComponente } from './PrimerComponente'
import './styles/styles.css'
// import { ListadoApp } from './ListadoApp'
// import { Contador } from './styles/Contador'
import { UserApp } from './UserApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserApp />
  </React.StrictMode>,
)
