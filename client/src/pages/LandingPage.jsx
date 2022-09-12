import React from 'react'
import styled from 'styled-components'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import Home from './Home'

const Wrapper = styled.div`
    display: flex;
    gap: 1%;
`
const LandingPage = () => {
    return (
        <>
        <Navbar />
          <Wrapper>
              <Menu />
              <Home />
          </Wrapper>
        </>
    )
}

export default LandingPage