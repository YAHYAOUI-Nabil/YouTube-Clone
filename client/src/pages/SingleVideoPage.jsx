import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useStateContext } from '../contexts/ContextsProvider';
import axios from 'axios'


import Menu from '../components/Menu'
import Navbar from '../components/Navbar';


const Container = styled.div`
`
const MenuContainer = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    top: 8vh;
    z-index: 888888888;
`
const Transparent = styled.div`
    width: 84vw;
    height: 92vh;
    opacity: 0.5;
    background-color : black;
`
const Wrapper = styled.div`
    display: flex;
    gap: 2vw;
    padding: 1.8rem;
    background-color: #f9f9f9;
`
const VideoContainer = styled.div`
    width: 65vw;

`
const SuggestedVides = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2vh;
    width: 32vw;
`
const SuggestedVideoContainer = styled.div`
    display: flex;
    gap: 1vw;
`
const VideoSuggested = styled.video`
    width: 20vw;
    height: 18vh;
`
const CommentSection = styled.div`
    width: 65vw;
    margin-top: 3vh;
`
const Video = styled.video`
    width: 63vw;
    height: 73vh;
`

const SingleVideoPage = () => {
    const {activeMenu, setActiveMenu} = useStateContext();
    const [videos, setVideos] = useState({})

    useEffect(() => {
        const fn = async () => {
            const response = await axios.get('http://localhost:5000/api/youtube/videos')
            setVideos(response.data[0])
            console.log(videos)
        }
        fn()
    }, [])
    
  return (
    <>
    <Navbar />
    <Container>
        {activeMenu && 
            <MenuContainer>
                <Menu />
                <Transparent onClick={() => setActiveMenu(!activeMenu)}/>
            </MenuContainer>
        }
        <Wrapper>
            <VideoContainer>
                <div>
                    <Video src={videos.videoUrl} controls></Video>  
                    <div>video1</div>
                    <div>Nabil Yahyaoui</div>
                    <div>7.5m views</div>
                </div>
                <CommentSection>
                    tap your comment
                </CommentSection>
            </VideoContainer>
            <SuggestedVides>
                <SuggestedVideoContainer>
                    <VideoSuggested src='' controls></VideoSuggested>
                    <div>
                        <div>video1</div>
                        <div>Nabil Yahyaoui</div>
                        <div>7.5m views</div>
                    </div>
                </SuggestedVideoContainer>
                <SuggestedVideoContainer>
                    <VideoSuggested src='' controls></VideoSuggested>
                    <div>
                        <div>video1</div>
                        <div>Nabil Yahyaoui</div>
                        <div>7.5m views</div>
                    </div>
                </SuggestedVideoContainer>
                <SuggestedVideoContainer>
                    <VideoSuggested src='' controls></VideoSuggested>
                    <div>
                        <div>video1</div>
                        <div>Nabil Yahyaoui</div>
                        <div>7.5m views</div>
                    </div>
                </SuggestedVideoContainer>
                <SuggestedVideoContainer>
                    <VideoSuggested src='' controls></VideoSuggested>
                    <div>
                        <div>video1</div>
                        <div>Nabil Yahyaoui</div>
                        <div>7.5m views</div>
                    </div>
                </SuggestedVideoContainer>
                <SuggestedVideoContainer>
                    <VideoSuggested src='' controls></VideoSuggested>
                    <div>
                        <div>video1</div>
                        <div>Nabil Yahyaoui</div>
                        <div>7.5m views</div>
                    </div>
                </SuggestedVideoContainer>
                <SuggestedVideoContainer>
                    <VideoSuggested src='' controls></VideoSuggested>
                    <div>
                        <div>video1</div>
                        <div>Nabil Yahyaoui</div>
                        <div>7.5m views</div>
                    </div>
                </SuggestedVideoContainer>
                <SuggestedVideoContainer>
                    <VideoSuggested src='' controls></VideoSuggested>
                    <div>
                        <div>video1</div>
                        <div>Nabil Yahyaoui</div>
                        <div>7.5m views</div>
                    </div>
                </SuggestedVideoContainer>
                <SuggestedVideoContainer>
                    <VideoSuggested src='' controls></VideoSuggested>
                    <div>
                        <div>video1</div>
                        <div>Nabil Yahyaoui</div>
                        <div>7.5m views</div>
                    </div>
                </SuggestedVideoContainer>
                <SuggestedVideoContainer>
                    <VideoSuggested src='' controls></VideoSuggested>
                    <div>
                        <div>video1</div>
                        <div>Nabil Yahyaoui</div>
                        <div>7.5m views</div>
                    </div>
                </SuggestedVideoContainer>
                <SuggestedVideoContainer>
                    <VideoSuggested src='' controls></VideoSuggested>
                    <div>
                        <div>video1</div>
                        <div>Nabil Yahyaoui</div>
                        <div>7.5m views</div>
                    </div>
                </SuggestedVideoContainer>
                <SuggestedVideoContainer>
                    <VideoSuggested src='' controls></VideoSuggested>
                    <div>
                        <div>video1</div>
                        <div>Nabil Yahyaoui</div>
                        <div>7.5m views</div>
                    </div>
                </SuggestedVideoContainer>
                <SuggestedVideoContainer>
                    <VideoSuggested src='' controls></VideoSuggested>
                    <div>
                        <div>video1</div>
                        <div>Nabil Yahyaoui</div>
                        <div>7.5m views</div>
                    </div>
                </SuggestedVideoContainer>
                <SuggestedVideoContainer>
                    <VideoSuggested src='' controls></VideoSuggested>
                    <div>
                        <div>video1</div>
                        <div>Nabil Yahyaoui</div>
                        <div>7.5m views</div>
                    </div>
                </SuggestedVideoContainer>
                <SuggestedVideoContainer>
                    <VideoSuggested src='' controls></VideoSuggested>
                    <div>
                        <div>video1</div>
                        <div>Nabil Yahyaoui</div>
                        <div>7.5m views</div>
                    </div>
                </SuggestedVideoContainer>
            </SuggestedVides>
            
        </Wrapper>
        
    </Container>
    </>
  )
}

export default SingleVideoPage