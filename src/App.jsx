import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import DataForm from './components/DataForm'
import SearchResult from './components/SearchResult'
import CardDetails from './components/CardDetails'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataform" element={<DataForm />} />
        <Route path="/details" element={<CardDetails />} />
        <Route path="/searchresult" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  )
}