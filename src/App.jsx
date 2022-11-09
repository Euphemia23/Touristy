import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import DataForm from './components/DataForm'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataform" element={<DataForm />} />
      </Routes>
    </BrowserRouter>
  )
}