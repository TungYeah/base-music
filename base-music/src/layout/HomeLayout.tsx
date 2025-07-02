import {
    Box,
    CssBaseline,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/style.scss';
import '../styles/global.scss';

const navItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Rankings', icon: <ListIcon />, path: '/rankings' },
    { text: 'Topics and genres', icon: <CategoryIcon />, path: '/topics' },
    { text: 'Library', icon: <LibraryMusicIcon />, path: '/library' },
];

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <Box className="sidebar">
            <div className="logo-container">
                <img src="/image/logo.png" alt="Logo" draggable="false" className="logo-img" />
            </div>
            <div className="sidebar-divider" />
            <List className="nav-list">
                {navItems.map((item, index) => (
                    <React.Fragment key={item.text}>
                        <ListItem
                            disablePadding
                            className={`nav-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <ListItemButton className="nav-button">
                                <ListItemIcon className="nav-icon">{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} className="nav-text" />
                            </ListItemButton>
                        </ListItem>
                        {index === 2 && (
                            <div className="sidebar-divider" style={{ margin: '12px 0' }} />
                        )}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
};

const PlayerPlaceholder = () => (
    <Box className="player-placeholder">
    </Box>
);

const gradients = [
    "main-gradient-bg",
    "main-gradient-bg-alt"
];

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    const [bgIndex, setBgIndex] = useState(0);
    const handleChangeBg = () => setBgIndex((bgIndex + 1) % gradients.length);
    return (
        <Box className={gradients[bgIndex]} sx={{ display: "flex", minHeight: "100vh", color: "white" }}>
            <CssBaseline />
            <Sidebar />
            <Box className="layout-content">
                <Box className="header-placeholder">
                    <div className="search-bar" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <SearchIcon className="search-icon" />
                        <input placeholder="What do you want to listen to?" className="custom-input" style={{ paddingLeft: 48 }} />
                    </div>
                    <div className="header-actions">
                        <SettingsIcon className="icon" />
                        <button className="login-btn">Login</button>
                    </div>
                </Box>
                <Box className="page-content">{children}</Box>
                <PlayerPlaceholder />
            </Box>
        </Box>
    );
};

export default HomeLayout;
