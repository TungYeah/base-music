import React, { useState } from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import CategoryIcon from '@mui/icons-material/Category';
import '../styles/style.scss';
import '../styles/global.scss';

const navItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Rankings', icon: <ListIcon />, path: '/rankings' },
    { text: 'Topics and genres', icon: <CategoryIcon />, path: '/topics' },
    { text: 'Library', icon: <LibraryMusicIcon />, path: '/library' },
];

const SideBar = () => {
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

export default SideBar; 