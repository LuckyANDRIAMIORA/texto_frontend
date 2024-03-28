import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Register from './register/Register.jsx'
import Welcome from './register/Welcome.jsx'
import ErrorPage from './register/ErrorPage.jsx'
import Login from './login/Login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@material-tailwind/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<App></App>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/welcome' element={<Welcome></Welcome>} />
        <Route path='/error' element={<ErrorPage></ErrorPage>} />
        <Route path='/login' element={<Login></Login>} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
)
