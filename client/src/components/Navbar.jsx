import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const Container = styled.div`
    display: flex;
    padding: 2px 0px;
`
const Left = styled.div`
    display: flex;
    flex: 1;
    gap: 20px;
    align-items: center;
    margin: 15px 20px;
`
const MenuBar = styled.div`
    display: flex;
    align-items: center;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: bold;
    font-size: 19px;
    cursor: pointer;
`
const Button = styled.button`
    background-color: unset;
    border: unset;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const Image = styled.img`
    height: 20px;
`

const Center = styled.div`
    display: flex;
    flex: 2;
    align-items: center;
    justify-content: center;
`
const FormContainer =styled.div`
    display: flex;
    width: 100%;
    gap: 1%;
    align-items: center;
    justify-content: center;
`
const Form =styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #dbd8d8;
`
const Input =styled.input`
    width: 90%;
    height: 2.4rem;
    padding-left: 10px;
    border: unset;
    font-size: 16px;
    color: #4b4949;
    &:focus{
        border-radius: unset;
    }
`
const Submit =styled.button`
    height: 2.8rem;
    width: 10%;
    border: unset;
    border-left: 1px solid #dbd8d8;
    background-color: #f9f9f9;
`
const Voice =styled.button`
    border-radius: 50%;
    border: unset;
    height: 2.8rem;
    width: 7%;
    background-color: #f9f9f9;
    
`
const Right = styled.div`
    display: flex;
    flex: 1;
`

const Navbar = () => {
  return (
    <Container>
        <Left>
            <MenuBar>
                <Button>
                    <MenuIcon />
                </Button>
            </MenuBar>
            <Logo>
                <Image src={logo}/>
                YouTube
            </Logo>
        </Left>
        <Center>
            <FormContainer>
                <Form>
                    <Input type='text'placeholder='Search'/>
                    <Submit>
                        <SearchIcon />
                    </Submit>
                </Form>
                <Voice>
                    <KeyboardVoiceIcon />
                </Voice>
            </FormContainer>
        </Center>
        <Right></Right>
    </Container>
  )
}

export default Navbar