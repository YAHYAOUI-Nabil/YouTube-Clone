import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import SingleVideoPage from './pages/SingleVideoPage';

const Container = styled.div`
    position: relative;
`

const App = () => {
  return (
    <Container>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/single-video" element={<SingleVideoPage />} />
          </Routes>
        </BrowserRouter>
    </Container>
  )
}

export default App