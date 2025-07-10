import React, { Suspense } from "react";
import '../styles/style.scss';
import '../styles/global.scss';
import { useParams, useNavigate } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css';
import { useQuery } from "src/utils/urlUtils";

const SearchSong = React.lazy(() => import("../components/Search/SearchSong"));

const TABS = [
    { label: "All", value: "all" },
    { label: "Songs", value: "songs" },
    { label: "Artist", value: "artists" },
    { label: "Album", value: "albums" },
    { label: "Playlist", value: "playlists" },
    { label: "Youtube MV", value: "youtube_mv" },
    { label: "Youtube Playlist", value: "youtube_playlist" },
];

const SearchSongPage = () => {
    const { tab } = useParams();
    const navigate = useNavigate();
    const validTabs = TABS.map(t => t.value);
    const currentTab = validTabs.includes(tab || "") ? tab : "songs";

    const queryParam = useQuery().get("query") || "Lao Song";

    const handleSetTab = (value: string) => {
        navigate(`/search/${value}?query=${encodeURIComponent(queryParam)}`);
    };

    return (
        <Suspense fallback={<div style={{ padding: '2rem', color: '#fff' }}>Đang tải dữ liệu...</div>}>
            <SearchSong tab={currentTab!} setTab={handleSetTab} query={queryParam} />
        </Suspense>
    );
};

export default SearchSongPage;