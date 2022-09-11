import React from 'react'
import styled from 'styled-components'


import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';

const Container = styled.div`
    background-color: white;
    color: #202020;
    height: 90.5vh;
    width: 18vw;
    font-size: 14px;
    overflow: hidden;
    position: fixed;
    bottom: 0;
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
        background-color: #f9f9f9;
    }
`
const ItemMenu = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 20px;
    font-size: 15px;
`
const Hr = styled.hr`
    margin: 15px 0px;
`

const Menu = () => {
  return (
    <Container>
        <Wrapper>
            <Item>
                <HomeIcon />
                Home
            </Item>
            <Item>
                <ExploreIcon />
                Explore
            </Item>
            <Item>
                <ElectricBoltIcon />
                Shorts
            </Item>
            <Item>
                <SubscriptionsIcon />
                Subscriptions
            </Item>
            <Hr />
            <Item>
                <VideoLibraryIcon />
                Library
            </Item>
            <Item>
                <HistoryIcon />
                History
            </Item>
            <Item>
                <SmartDisplayIcon />
                Your videos
            </Item>
            <Item>
                <WatchLaterIcon />
                Watch later
            </Item>
            <Item>
                <ThumbUpOffAltIcon />
                Liked videos
            </Item>
            <Item>
                <PlaylistPlayIcon />
                My tutoriels
            </Item>
            <Hr />
            <ItemMenu>
                SUBSCRIPTIONS
            </ItemMenu>
            <Hr />
            <ItemMenu>
                EXPLORE
            </ItemMenu>
            <Item>
                <SportsEsportsIcon />
                Gaming
            </Item>
            <Item>
                <EmojiEventsIcon />
                Sport
            </Item>
            <Hr />
            <ItemMenu>
                MORE FROM YOUTUBE
            </ItemMenu>
            <Item>
                <SlowMotionVideoIcon />
                Creator Studio
            </Item>
            <Item>
                <PlayCircleIcon />
                YouTube Music
            </Item>
            <Item>
                <YouTubeIcon />
                YouTube Kids
            </Item>
            <Item>
                <OndemandVideoIcon />
                YouTube TV
            </Item>
            <Hr />
            <Item>
                <SettingsIcon />
                Settings
            </Item>
            <Item>
                <FlagIcon />
                Report history
            </Item>
            <Item>
                <HelpOutlineIcon />
                Help
            </Item>
            <Item>
                <AnnouncementIcon />
                Send feedback
            </Item>
            <Hr />
        </Wrapper>
    </Container>
  )
}

export default Menu