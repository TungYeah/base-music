import { useNavigate } from 'react-router-dom';

import {
    Box,
    CssBaseline,
} from "@mui/material";
import React, { useState } from "react";
import '../styles/style.scss';
import '../styles/global.scss';
import SideBar from './SideBar';
import Header from './Header';


const gradients = [
    "main-gradient-bg",
    "main-gradient-bg-alt"
];

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    const [bgIndex, setBgIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    return (
        <Box className={gradients[bgIndex]} sx={{ display: "flex", minHeight: "100vh", color: "white" }}>
            <CssBaseline />
            <SideBar />
            <Box className="layout-content">
                <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} navigate={navigate} />
                <Box className="page-content">{children}</Box>
            </Box>
        </Box>
    );
};

export default HomeLayout;