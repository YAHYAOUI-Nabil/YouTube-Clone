import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { useStateContext } from '../contexts/ContextsProvider';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { categories } from '../utils/constants';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.active === true ? '82vw' : '93vw'};
`
const Filters = styled.div`
    position: sticky;
    top: 8.6vh;
    right: 0;
    z-index: 88;
    height: 8vh;
    display: flex;
    align-items: center;
    background-color: white;
    border-top: 0.01rem solid #d3cfcf;
    padding: 0px;
    
    `
const FilterList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    
    overflow-x: scroll;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    padding: 0px;
    margin:0% 2% 0% -4%;
    ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
    `
const FilterItem = styled.li`
    border: 0.01rem solid #d3cfcf;
    border-radius: 20px 20px 20px 20px;
    padding: 5px 20px;
    white-space: nowrap;
    width: fit-content;
    cursor: pointer;
    background: #eee6e6;
    &:hover{
        background: #d3cfcf;
    }
    `
const ArrowContainer = styled.div`
    z-index: 5;
    background-color: white;
    height: 100%;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 0px #fcfcfc;
    border-radius : 50% 50% 50% 50%;
    cursor: pointer;
`
const Main = styled.div`
    display: flex;
    background-color: #f9f9f9;
    padding-left: 2vw;
`
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    margin: 20px;
`
const VideoContainer = styled.div`
    /* width: 24%; */
`
const Video = styled.video`
    width: ${(props) => props.active===false ? '21vw' : '18vw'};
    height: 25vh;
    cursor: pointer;
`

const Home = () => {
    const {activeMenu} = useStateContext();
    const navigate = useNavigate()
    const [videos, setVideos] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All')

    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        setScrollPosition(document?.getElementById("dom").scrollLeft)
        
    }, [setScrollPosition])
    
    const handleScrollLeft = () => {
        var element = document?.getElementById("dom")
        element.scrollLeft += 20
        setScrollPosition(document?.getElementById("dom").scrollLeft) 
    }
    const handleScrollRight = () => {
        var element = document?.getElementById("dom")
        element.scrollLeft -= 20
        setScrollPosition(document?.getElementById("dom").scrollLeft) 
    }
    

  return (
    <Container active={activeMenu}>
        <Filters>
            <ArrowContainer onClick={handleScrollLeft}>
                <KeyboardArrowLeftIcon/>
            </ArrowContainer>
            
            <FilterList id="dom">
                {categories.map((category) => (
                    <FilterItem cat={selectedCategory}
                        key={category.name} 
                        onClick={() => setSelectedCategory(category.name)}
                        style={{backgroundColor: category.name=== selectedCategory && '#333232',
                                color : category.name=== selectedCategory && 'white'}}
                    >
                        {category.name}
                    </FilterItem>
                ))}
            </FilterList>
            {scrollPosition>0 &&
            <ArrowContainer onClick={handleScrollRight}>
                <KeyboardArrowRightIcon/>
            </ArrowContainer>
            }
        </Filters>
        <Main>
            <Wrapper>
                <VideoContainer >
                    <Video src='' active={activeMenu} onClick={()=> navigate('/single-video')} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='' active={activeMenu} onClick={()=> navigate('/single-video')} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src=''  active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src=''  active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
            </Wrapper>
        </Main>
    </Container>
  )
}

export default Home