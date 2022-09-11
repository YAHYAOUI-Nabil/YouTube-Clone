import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 82vw;
    margin-left: 18vw;
`
const Filters = styled.div`
    position: sticky;
    top: 8.6vh;
    left: 18vw;
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
`
const Wrapper = styled.div`
    flex: 5;
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    margin: 20px;
`
const VideoContainer = styled.div`
    width: 24%;
`

const Home = () => {
  return (
    <Container>
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
                <VideoContainer>
                    <video src='https://youtu.be/hP77Rua1E0c' width="250" height='150' controls></video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <video src='https://youtu.be/hP77Rua1E0c' width="250" height='150' controls></video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <video src='https://youtu.be/hP77Rua1E0c' width="250" height='150' controls></video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <video src='https://youtu.be/hP77Rua1E0c' width="250" height='150' controls></video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <video src='https://youtu.be/hP77Rua1E0c' width="250" height='150' controls></video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <video src='https://youtu.be/hP77Rua1E0c' width="250" height='150' controls></video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <video src='https://youtu.be/hP77Rua1E0c' width="250" height='150' controls></video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <video src='https://youtu.be/hP77Rua1E0c' width="250" height='150' controls></video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <video src='https://youtu.be/hP77Rua1E0c' width="250" height='150' controls></video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <video src='https://youtu.be/hP77Rua1E0c' width="250" height='150' controls></video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <video src='https://youtu.be/hP77Rua1E0c' width="250" height='150' controls></video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <video src='https://youtu.be/hP77Rua1E0c' width="250" height='150' controls></video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <video src='https://youtu.be/hP77Rua1E0c' width="250" height='150' controls></video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <video src='https://youtu.be/hP77Rua1E0c' width="250" height='150' controls></video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <video src='https://youtu.be/hP77Rua1E0c' width="250" height='150' controls></video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </VideoContainer>
                <VideoContainer>
                    <video src='https://youtu.be/hP77Rua1E0c' width="250" height='150' controls></video>  
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