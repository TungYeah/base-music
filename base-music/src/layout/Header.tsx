import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import { handleInputChange, handleKeyPress } from '../utils/searchUtils';
import { NavigateFunction } from 'react-router-dom';

type HeaderProps = {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    navigate: NavigateFunction;
};

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery, navigate }) => {
    return (
        <div className="header-placeholder">
            <div className="search-bar" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <SearchIcon className="search-icon" />
                <input
                    placeholder="What do you want to listent to?"
                    className="custom-input"
                    style={{ paddingLeft: 48 }}
                    value={searchQuery}
                    onChange={handleInputChange(setSearchQuery)}
                    onKeyPress={handleKeyPress(searchQuery, navigate)}
                />
            </div>
            <div className="header-actions">
                <SettingsIcon className="icon" />
                <span className="footer-player-divider"></span>
                <button className="login-btn">Login</button>
            </div>
        </div>
    );
};

export default Header;