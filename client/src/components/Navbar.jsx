import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import avatar from '../images/avatar.jpg'

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { Badge } from '@mui/material';
import { useStateContext } from '../contexts/ContextsProvider';

const Container = styled.div`
    display: flex;
    position: sticky;
    height: 8vh;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
    padding: 2px 0px;
    background-color: white;
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
    height: 6vh;
    width: 100%;
    border: 1px solid #dbd8d8;
`
const Input =styled.input`
    width: 90%;
    height: 90%;
    padding-left: 10px;
    border: unset;
    font-size: 16px;
    color: #4b4949;
    &:focus{
        border-radius: unset;
    }
`
const Submit =styled.button`
    height: 100%;
    width: 10%;
    border: unset;
    border-left: 1px solid #dbd8d8;
    background-color: #f9f9f9;
    cursor: pointer;
`
const Voice =styled.button`
    border-radius: 50%;
    border: unset;
    height: 6vh;
    width: 2.8rem;
    background-color: #f9f9f9;
    cursor: pointer;
`
const Right = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    gap: 6%;
    padding: 0px 2rem ;
`
const Item = styled.div`
    cursor: pointer;
`
const Img = styled.div`
    display: flex;
    border-radius: 50%;
    cursor: pointer;
`
const Avatar = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 50%;
`

const Navbar = () => {
    const {setActiveMenu} = useStateContext()

    const handleMenu = () => {
        setActiveMenu(prev => !prev)
    }
  return (
    <Container>
        <Left>
            <MenuBar>
                <Button onClick={handleMenu}>
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
        <Right>
            <Item>
                <VideoCallIcon />
            </Item>
            <Item>
                <Badge badgeContent='4' color='warning'>
                    <NotificationsNoneIcon />
                </Badge>
            </Item>
            <Img>
                <Avatar src={avatar}/>
            </Img>
        </Right>
    </Container>
  )
}

export default Navbar