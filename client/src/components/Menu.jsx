import React, { useState } from 'react'
import styled from 'styled-components'
import ItemTitle from './ItemTitle';
import { useStateContext } from '../contexts/ContextsProvider';
import { ItemsMenu } from '../utils/constants';


const Container = styled.div`
    background-color: white;
    color: #202020;
    height: 91.5vh;
    font-size: 14px;
    overflow: hidden;
    position: sticky;
    bottom: 0;
    left: 0;
    top: 8.6vh;
    z-index: 9999;
    width: ${(props) => props.active === true ? '18vw' : '7vw'};
    &:hover{
        overflow: auto;
    } 
    ::-webkit-scrollbar {
        padding-top: 10px;
        width: 10px;
        background-color: white;
        border-radius: 10px;
        
    }
    ::-webkit-scrollbar-thumb{
	border-radius: 10px;
	background-color: #afadad;
    }
`
const Wrapper = styled.div`
    padding: 0px 0px;
`

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 10px 20px;
    &:hover{
        background-color: #ece9e9;
    }
`

const Menu = () => {
    const {activeMenu} = useStateContext();
    const [selectedMenu, setSelectedMenu] = useState('Home')

  return (
    <Container active={activeMenu}>
        <Wrapper>
            {ItemsMenu.map((item) =>(
                <Item 
                    key={item.id} 
                    onClick={() => setSelectedMenu(item.name)}
                    style={{backgroundColor: item.name===selectedMenu && '#d6d1d1'}}>
                    {item.icon}
                    <ItemTitle title={item.name}/>
                </Item>
            ))}
        </Wrapper>
    </Container>
  )
}

export default Menu