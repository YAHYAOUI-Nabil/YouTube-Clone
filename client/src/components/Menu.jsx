import React from 'react'
import styled from 'styled-components'
import ItemTitle from './ItemTitle';
import { useStateContext } from '../contexts/ContextsProvider';


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
    font-size: 14px;
    overflow: hidden;
    position: sticky;
    bottom: 0;
    left: 0;
    top: 8.6vh;
    width: ${(props) => props.active === true ? '16vw' : '5vw'};
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
const ItemMenu = styled.span`
    display: flex;
    align-items: center;
    padding: 5px 20px;
    font-size: 15px;
    display: ${(props) => !props.active && 'none'};
`
const Hr = styled.hr`
    margin: 15px 0px;
    display: ${(props) => !props.active && 'none'};
`
const Span = styled.span`
    
`

const Menu = () => {
    const {activeMenu} = useStateContext();
  return (
    <Container active={activeMenu}>
        <Wrapper>
            <Item>
                <HomeIcon />
                <ItemTitle title='Home'/>
            </Item>
            <Item>
                <ExploreIcon />
                <ItemTitle title='Explore'/>
            </Item>
            <Item>
                <ElectricBoltIcon />
                <ItemTitle title='Shorts'/>
            </Item>
            <Item>
                <SubscriptionsIcon />
                <ItemTitle title='Subscriptions'/>
            </Item>
            <Hr active={activeMenu}/>
            <Item>
                <VideoLibraryIcon />
                <ItemTitle title='Library'/>
            </Item>
            <Item>
                <HistoryIcon />
                <ItemTitle title='History'/>
            </Item>
            <Item>
                <SmartDisplayIcon />
                <ItemTitle title='Your videos'/>
            </Item>
            <Item>
                <WatchLaterIcon />
                <ItemTitle title='Watch later'/>
            </Item>
            <Item>
                <ThumbUpOffAltIcon />
                <ItemTitle title='Liked videos'/>
            </Item>
            <Item>
                <PlaylistPlayIcon />
                <ItemTitle title='My tutoriels'/>
            </Item>
            <Hr active={activeMenu}/>
            <ItemMenu active={activeMenu}>SUBSCRIPTIONS</ItemMenu>
            <Hr active={activeMenu}/>
            <ItemMenu active={activeMenu}>EXPLORE</ItemMenu>
            <Item>
                <SportsEsportsIcon />
                <ItemTitle title='Gaming'/>
            </Item>
            <Item>
                <EmojiEventsIcon />
                <ItemTitle title='Sport'/>
            </Item>
            <Hr active={activeMenu}/>
            <ItemMenu active={activeMenu}>MORE FROM YOUTUBE</ItemMenu>
            <Item>
                <SlowMotionVideoIcon />
                <ItemTitle title='Creator Studio'/>
            </Item>
            <Item>
                <PlayCircleIcon />
                <ItemTitle title='YouTube Music'/>
            </Item>
            <Item>
                <YouTubeIcon />
                <ItemTitle title='YouTube Kids'/>
            </Item>
            <Item>
                <OndemandVideoIcon />
                <ItemTitle title='YouTube TV'/>
            </Item>
            <Hr active={activeMenu}/>
            <Item>
                <SettingsIcon />
                <ItemTitle title='Settings'/>
            </Item>
            <Item>
                <FlagIcon />
                <ItemTitle title='Report history'/>
            </Item>
            <Item>
                <HelpOutlineIcon />
                <ItemTitle title='Help'/>
            </Item>
            <Item>
                <AnnouncementIcon />
                <ItemTitle title='Send feedback'/>
            </Item>
            <Hr active={activeMenu}/>
        </Wrapper>
    </Container>
  )
}

export default Menu