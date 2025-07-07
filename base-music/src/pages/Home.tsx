import React, { useRef, useState, useEffect } from "react";
import '../styles/style.scss';
import '../styles/global.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FooterPlayer from '../components/FooterPlayer';

const fakeSongs = [
  {
    id: 1,
    title: 'Sai từ đầu',
    artist: 'Giang Hồng Ngọc, Ali Hoàng Dương',
    cover: '../../public/image/48e659a9d6d880e1808d4696bada0814.jpg'
  },
  {
    id: 2,
    title: 'Chúng ta của hiện tại',
    artist: 'Sơn Tùng - MTP',
    cover: '../../public/image/maxresdefault.jpg'
  },
  {
    id: 3,
    title: 'Nhân Sinh Quán',
    artist: 'Út nhị Mino',
    cover: '../../public/image/nhân sinh quán.jpg'

  },
  {
    id: 4,
    title: 'Mưa rơi vào phòng',
    artist: 'Khởi My',
    cover: '../../public/image/mưa rơi vào phòng.jpg'
  },
  {
    id: 5,
    title: 'Không gặp người giống anh',
    artist: 'Na Ngọc Anh',
    cover: '../../public/image/không gặp người giống anh.jpg'
  },
  {
    id: 6,
    title: 'Suýt nữa thì',
    artist: 'Andiez',
    cover: '../../public/image/suýt nữa thì.jpg'
  },
  {
    id: 7,
    title: 'Không gặp người giống anh',
    artist: 'Na Ngọc Anh',
    cover: '../../public/image/khong gap nguoi giong anh.jpg'
  },
  {
    id: 8,
    title: 'Anh Vui',
    artist: 'Phạm Kỳ',
    cover: '../../public/image/anh vui.jpg'
  }
];

const fakeArtist = [
  {
    id: '1',
    artist: 'Sơn Tùng - MTP',
    songNumber: '9 Songs',
    favorite: '18',
    cover: '../../public/image/Sơn tùng.jpg'
  },
  {
    id: '2',
    artist: 'Jack - J97',
    songNumber: '11 Songs',
    favorite: '18',
    cover: '../../public/image/jack-va-thien-an-5805.jpeg'
  },
  {
    id: '3',
    artist: 'Sơn Tùng - MTP',
    songNumber: '9 Songs',
    favorite: '18',
    cover: '../../public/image/Sơn tùng.jpg'
  },
  {
    id: '4',
    artist: 'Sơn Tùng - MTP',
    songNumber: '9 Songs',
    favorite: '18',
    cover: '../../public/image/Sơn tùng.jpg'
  },
  {
    id: '5',
    artist: 'Sơn Tùng - MTP',
    songNumber: '9 Songs',
    favorite: '18',
    cover: '../../public/image/Sơn tùng.jpg'
  },
  {
    id: '6',
    artist: 'Sơn Tùng - MTP',
    songNumber: '9 Songs',
    favorite: '18',
    cover: '../../public/image/Sơn tùng.jpg'
  },
  {
    id: '7',
    artist: 'Sơn Tùng - MTP',
    songNumber: '9 Songs',
    favorite: '18',
    cover: '../../public/image/Sơn tùng.jpg'
  },
];

const Home = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const topGridRef = useRef<HTMLDivElement>(null);
  const artistGridRef = useRef<HTMLDivElement>(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [showLeftTop, setShowLeftTop] = useState(false);
  const [showRightTop, setShowRightTop] = useState(false);
  const [showLeftArtist, setShowLeftArtist] = useState(false);
  const [showRightArtist, setShowRightArtist] = useState(false);
  const [selectedSong, setSelectedSong] = useState<{
    cover: string;
    title: string;
    artist: string;
    duration: string;
  } | null>(null);

  const updateArrowVisibility = (ref: React.RefObject<HTMLDivElement>, setLeft: Function, setRight: Function) => {
    const grid = ref.current;
    if (grid) {
      const atStart = Math.round(grid.scrollLeft) <= 0;
      const atEnd = Math.round(grid.scrollLeft + grid.clientWidth) >= Math.round(grid.scrollWidth);
      setLeft(!atStart);
      setRight(!atEnd);
    }
  };

  useEffect(() => {
    const grid = gridRef.current;
    const topGrid = topGridRef.current;
    const artistGrid = artistGridRef.current;

    updateArrowVisibility(gridRef, setShowLeft, setShowRight);
    updateArrowVisibility(topGridRef, setShowLeftTop, setShowRightTop);
    updateArrowVisibility(artistGridRef, setShowLeftArtist, setShowRightArtist);

    const handleScroll = () => {
      updateArrowVisibility(gridRef, setShowLeft, setShowRight);
      updateArrowVisibility(topGridRef, setShowLeftTop, setShowRightTop);
      updateArrowVisibility(artistGridRef, setShowLeftArtist, setShowRightArtist);
    };

    grid?.addEventListener('scroll', handleScroll);
    topGrid?.addEventListener('scroll', handleScroll);
    artistGrid?.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      grid?.removeEventListener('scroll', handleScroll);
      topGrid?.removeEventListener('scroll', handleScroll);
      artistGrid?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollByCard = (
    ref: React.RefObject<HTMLDivElement>,
    direction: 'left' | 'right',
    cardSelector: string
  ) => {
    const grid = ref.current;
    if (grid) {
      const card = grid.querySelector(cardSelector) as HTMLElement;
      if (!card) return;
      const style = window.getComputedStyle(grid);
      const gap = parseInt(style.gap || '0', 10);
      const scrollAmount = card.offsetWidth + gap;
      grid.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="home-container">

      <div className="slider-section">
        <h1 className="main-title">What to listen today</h1>
        <div className="song-slider-wrapper">
          {showLeft && (
            <button className="arrow-btn left" onClick={() => scrollByCard(gridRef, 'left', '.song-card-wrapper')}>
              <ArrowBackIosNewIcon fontSize="large" />
            </button>
          )}
          <div className="song-list-grid" ref={gridRef}>
            {fakeSongs.map(song => (
              <div className="song-card-wrapper" key={song.id} onClick={() => setSelectedSong({
                cover: song.cover,
                title: song.title,
                artist: song.artist,
                duration: '4:05',
              })}>
                <div className="song-card">
                  <img src={song.cover} alt={song.title} className="song-cover" />
                  <div className="play-icon-overlay">
                    <PlayArrowIcon fontSize="large" />
                  </div>
                  <div className="song-info">
                    <div className="song-title">{song.title}</div>
                    <div className="song-artist">{song.artist}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {showRight && (
            <button className="arrow-btn right" onClick={() => scrollByCard(gridRef, 'right', '.song-card-wrapper')}>
              <ArrowForwardIosIcon fontSize="large" />
            </button>
          )}
        </div>
      </div>

      <div className="slider-section">
        <h1 className="main-title-top">TOP 100 music</h1>
        <div className="song-slider-wrapper">
          {showLeftTop && (
            <button className="arrow-btn left" onClick={() => scrollByCard(topGridRef, 'left', '.top-card-wrapper')}>
              <ArrowBackIosNewIcon fontSize="large" />
            </button>
          )}
          <div className="top-list-grid" ref={topGridRef}>
            {fakeSongs.map(song => (
              <div className="top-card-wrapper" key={song.id} onClick={() => setSelectedSong({
                cover: song.cover,
                title: song.title,
                artist: song.artist,
                duration: '4:05',
              })}>
                <div className="top-card">
                  <img src={song.cover} alt={song.title} className="top-cover" />
                  <div className="play-icon-overlay">
                    <PlayArrowIcon fontSize="large" />
                  </div>
                  <div className="top-info">
                    <div className="top-title">{song.title}</div>
                    <div className="top-artist">{song.artist}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {showRightTop && (
            <button className="arrow-btn right" onClick={() => scrollByCard(topGridRef, 'right', '.top-card-wrapper')}>
              <ArrowForwardIosIcon fontSize="large" />
            </button>
          )}
        </div>
      </div>

      <div className="slider-section">
        <h1 className="main-title-artist">Favorite Artist</h1>
        <div className="artist-slider-wrapper">
          {showLeftArtist && (
            <button className="arrow-btn-artist left" onClick={() => scrollByCard(artistGridRef, 'left', '.artist-card-wrapper')}>
              <ArrowBackIosNewIcon fontSize="large" />
            </button>
          )}
          <div className="artist-list-grid" ref={artistGridRef}>
            {fakeArtist.map(artist => (
              <div className="artist-card-wrapper" key={artist.id}>
                <div className="artist-card">
                  <img src={artist.cover} className="artist-cover" />
                  <div className="artist-info">
                    <div className="artist-name">{artist.artist}</div>
                    <div className="artist-meta">{artist.songNumber}</div>
                    <div className="artist-meta">{artist.favorite}</div>
                    <button className="artist-follow">+ Favorite</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {showRightArtist && (
            <button className="arrow-btn-artist right" onClick={() => scrollByCard(artistGridRef, 'right', '.artist-card-wrapper')}>
              <ArrowForwardIosIcon fontSize="large" />
            </button>
          )}
        </div>
      </div>

      <FooterPlayer song={selectedSong} />

    </div>
  );
};

export default Home;