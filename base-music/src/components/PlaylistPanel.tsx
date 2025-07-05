import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const PlaylistPanel = ({ open, onClose, song }: { open: boolean, onClose: () => void, song: any }) => {
    if (!open) return null;
    return (
        <div className="playlist-panel-overlay" onClick={onClose}>
            <div className="playlist-panel" onClick={e => e.stopPropagation()}>
                <div className="playlist-panel-header">
                    <span className="playlist-panel-title">Playlist</span>
                </div>
                <div className="playlist-panel-list">
                    <div className="playlist-panel-item active">
                        <img src={song?.cover} alt={song?.title} className="playlist-panel-cover" />
                        <div className="playlist-panel-info">
                            <div className="playlist-panel-song-title">{song?.title}</div>
                            <div className="playlist-panel-song-artist">{song?.artist}</div>
                        </div>
                        <PlayArrowIcon className="playlist-panel-play-icon" />
                    </div>
                </div>
                <div className="playlist-panel-suggest">
                    <span className="playlist-panel-suggest-title">List of Suggested Songs</span>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PlaylistPanel;