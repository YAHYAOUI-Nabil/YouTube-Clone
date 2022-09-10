import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'

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
    flex: 1;
    background-color: #202020;
    display: none;
    color: white;
    height: 100vh;
    font-size: 14px;
    &:hover{
        overflow: scroll;
    }
`
const Wrapper = styled.div`
    padding: 18px 0px;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin: 0px 0px 25px 20px;
`
const Image = styled.img`
    height: 25px;
`
const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 10px 20px;
    &:hover{
        background-color: #373737;
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
    border: 0.5px solid #373737;
`

const Menu = () => {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Image src={logo}/>
                YouTube
            </Logo>
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