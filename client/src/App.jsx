import React from 'react'
import styled from 'styled-components'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const Container = styled.div`
    position: relative;
`
const Wrapper = styled.div`
    display: flex;
    gap: 1%;
`

const App = () => {
  return (
    <Container>
        <Navbar />
        <Wrapper>
            <Menu />
            <Home />
        </Wrapper>
    </Container>
  )
}

export default App