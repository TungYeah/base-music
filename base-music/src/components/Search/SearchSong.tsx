import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonSongs from '../Skeleton/SkeletonSongs';
import { formatDuration } from "../../utils/formatDurationUtils";
import { fetchSongs } from "../../services/songService";

const PAGE_SIZE = 20;
const TABS = [
    { label: "All", value: "all" },
    { label: "Songs", value: "songs" },
    { label: "Artist", value: "artists" },
    { label: "Album", value: "albums" },
    { label: "Playlist", value: "playlists" },
    { label: "Youtube MV", value: "youtube_mv" },
    { label: "Youtube Playlist", value: "youtube_playlist" },
];

const SearchSong = ({ tab, setTab, query }: { tab: string; setTab: (value: string) => void; query: string }) => {
    const [songs, setSongs] = useState<any[]>([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (tab === "songs" && query) {
            setIsLoading(true);
            fetchSongs(query, 0).then((res) => {
                const newSongs = res.data || [];
                setSongs(newSongs);
                setHasMore(newSongs.length === PAGE_SIZE);
                setIsLoading(false);
                setPage(0);
            });
        }
    }, [tab, query]);

    const loadMoreSongs = () => {
        const nextPage = page + 1;
        fetchSongs(query, nextPage).then((res) => {
            const newSongs = res.data || [];
            setSongs((prev) => [...prev, ...newSongs]);
            setPage(nextPage);
            setHasMore(newSongs.length === PAGE_SIZE);
        });
    };

    return (
        <>
            <div className="tab-filters-wrapper">
                <span className="search-results-title">Search Results</span>
                <span className="footer-player-divider"></span>
                <div className="tab-button-group">
                    {TABS.map((t) => (
                        <button
                            key={t.value}
                            type="button"
                            onClick={() => setTab(t.value)}
                            className={tab === t.value ? "tab-button active" : "tab-button"}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </div>

            <div
                id="scrollableDiv" style={{ height: "70vh", overflow: "auto" }} className="song-list"
            >
                {isLoading ? (
                    <SkeletonSongs rows={4} />
                ) : (
                    <InfiniteScroll
                        dataLength={songs.length}
                        next={loadMoreSongs}
                        hasMore={hasMore}
                        loader={<SkeletonSongs rows={1} />}
                        scrollableTarget="scrollableDiv"
                    >
                        <table className="song-table">
                            <tbody>
                                <tr>
                                    <td colSpan={5}>
                                        <div style={{ margin: '16px 0', fontWeight: 'bold', fontSize: '20px', color: '#fff' }}>
                                            {TABS.find(t => t.value === tab)?.label}
                                        </div>
                                    </td>
                                </tr>
                                {songs.map((song, id) => (
                                    <tr key={song.id}>
                                        <td>{id + 1}</td>
                                        <td>
                                            <img src={song.images?.DEFAULT} alt={song.name} width={50} className="song-cover-search" />
                                        </td>
                                        <td>
                                            <div className="song-name">{song.name}</div>
                                            <div className="song-artists">{song.artists?.map((a: any) => a.name).join(", ")}</div>
                                        </td>
                                        <td className="song-album">
                                            {song.playlists && song.playlists.length > 0 ? song.playlists[0].name : ""}
                                        </td>
                                        <td className="song-duration">{formatDuration(song.duration)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </InfiniteScroll>
                )}
            </div>
        </>
    );
};

export default SearchSong;