import { useEffect } from "react";
import { updateArrowVisibility } from '../utils/sliderUtils';

export function useSliderArrows(
    gridRef: React.RefObject<HTMLDivElement>,
    setShowLeft: Function,
    setShowRight: Function,
    topGridRef: React.RefObject<HTMLDivElement>,
    setShowLeftTop: Function,
    setShowRightTop: Function,
    artistGridRef: React.RefObject<HTMLDivElement>,
    setShowLeftArtist: Function,
    setShowRightArtist: Function
) {
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
    }, [gridRef, setShowLeft, setShowRight, topGridRef, setShowLeftTop, setShowRightTop, artistGridRef, setShowLeftArtist, setShowRightArtist]);
} 