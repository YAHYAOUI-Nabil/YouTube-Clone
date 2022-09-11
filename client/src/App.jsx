import React from 'react'
import styled from 'styled-components'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { useStateContext } from './contexts/ContextsProvider';

const Container = styled.div`
    position: relative;
`
const Wrapper = styled.div`
    display: flex;
    gap: 1%;
`

const App = () => {
  const {activeMenu} = useStateContext();
  return (
    <Container>
        <Navbar />
        <Wrapper>
            {/* {activeMenu && <Menu />} */}
            <Menu />
            <Home />
        </Wrapper>
    </Container>
  )
}

export default App