import React from 'react'
import styled from 'styled-components'
import { useStateContext } from '../contexts/ContextsProvider';

const Span = styled.span``
const ItemTitle = ({ title}) => {
    const {activeMenu} = useStateContext();
  return (
    <>
    {activeMenu && <Span>{title}</Span>}
    </>
        
  )
}

export default ItemTitle