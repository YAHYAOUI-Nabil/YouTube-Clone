import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { useStateContext } from '../contexts/ContextsProvider';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.active === true ? '84vw' : '95vw'};
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
    width: 100%;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    padding: 0px;
    margin:0% 2%;
    `
const FilterItem = styled.li`
    background-color: #f3efef;
    border: 0.01rem solid #d3cfcf;
    border-radius: 20px 20px 20px 20px;
    padding: 5px 20px;
    cursor: pointer;
    &:hover{
        background-color: #d3cfcf;
    }
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
  return (
    <Container active={activeMenu}>
        <Filters>
            <FilterList>
                <FilterItem>All</FilterItem>
                <FilterItem>Mixes</FilterItem>
                <FilterItem>CSS</FilterItem>
                <FilterItem>Computer programming</FilterItem>
                <FilterItem>Music</FilterItem>
                <FilterItem>Live</FilterItem>
                <FilterItem>Practice</FilterItem>
                <FilterItem>Arabic Hip Hop</FilterItem>
                <FilterItem>Sport</FilterItem>
            </FilterList>
        </Filters>
        <Main>
            <Wrapper>
                <VideoContainer >
                    <Video src='https://youtu.be/hP77Rua1E0c' active={activeMenu} onClick={()=> navigate('/single-video')} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='https://youtu.be/hP77Rua1E0c' active={activeMenu} onClick={()=> navigate('/single-video')} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='https://youtu.be/hP77Rua1E0c' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='https://youtu.be/hP77Rua1E0c' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='https://youtu.be/hP77Rua1E0c' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='https://youtu.be/hP77Rua1E0c' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='https://youtu.be/hP77Rua1E0c' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='https://youtu.be/hP77Rua1E0c'  active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='https://youtu.be/hP77Rua1E0c'  active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='https://youtu.be/hP77Rua1E0c' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='https://youtu.be/hP77Rua1E0c' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='https://youtu.be/hP77Rua1E0c' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='https://youtu.be/hP77Rua1E0c' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='https://youtu.be/hP77Rua1E0c' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='https://youtu.be/hP77Rua1E0c' active={activeMenu} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <Video src='https://youtu.be/hP77Rua1E0c' active={activeMenu} controls></Video>  
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