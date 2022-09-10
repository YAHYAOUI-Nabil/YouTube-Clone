import React from 'react'
import styled from 'styled-components'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Main = styled.div`
    display: flex;
    background-color: #f9f9f9;
`
const Wrapper = styled.div`
    flex: 5;
`

const App = () => {
  return (
    <Container>
        <Menu />
        <Navbar />
        <Main>
            <Wrapper>
                main
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
                <div>mmmmm</div>
            </Wrapper>
        </Main>
    </Container>
  )
}

export default App