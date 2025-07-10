import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import ReplyIcon from '@mui/icons-material/Reply';
import PlaylistPanel from '../components/PlaylistPanel';
import '../styles/style.scss';

type FooterPlayerProps = {
    song?: {
        cover: string;
        title: string;
        artist: string;
        duration: string;
    } | null;
};
const FooterPlayer: React.FC<FooterPlayerProps> = ({ song }) => {
    const [showPlaylist, setShowPlaylist] = useState(false);
    if (!song) return null;
    return (
        <>
            <div className="footer-player">
                <div className="footer-player-left">
                    <img src={song.cover} alt={song.title} className="footer-player-cover" />
                    <div className="footer-player-info">
                        <div className="footer-player-title">{song.title} <span className="footer-player-artist">{song.artist}</span></div>
                        <div className="footer-player-artist-sub">{song.artist}</div>
                    </div>
                    <FavoriteBorderIcon className="footer-player-icon-infor" />
                    <AddIcon className="footer-player-icon-infor" />
                </div>
                <div className="footer-player-center">
                    <ShuffleIcon className="footer-player-icon-setting" />
                    <SkipPreviousIcon className="footer-player-icon-setting" />
                    <button className="footer-player-play-btn"><PlayArrowIcon fontSize="large" /></button>
                    <SkipNextIcon className="footer-player-icon-setting" />
                    <RepeatIcon className="footer-player-icon-setting" />
                </div>
                <div className="footer-player-right">
                    <QueueMusicIcon className="footer-player-icon-setting" />
                    <ReplyIcon className="footer-player-icon-setting" />
                    <VolumeUpIcon className="footer-player-icon-setting" />
                    <span className="footer-player-divider"></span>
                    <div className='list-name-music' onClick={() => setShowPlaylist(v => !v)}>
                        <PlaylistPlayIcon className="footer-player-icon-setting" />
                    </div>
                </div>
                <div className="footer-player-progress">
                    <span>0:00</span>
                    <div className="footer-player-bar">
                        <div className="footer-player-bar-progress" style={{ width: '0%' }} />
                    </div>
                    <span>{song.duration}</span>
                </div>
            </div>
            <PlaylistPanel open={showPlaylist} onClose={() => setShowPlaylist(false)} song={song} />
        </>
    );
};

export default FooterPlayer;