import React from "react";


export function updateArrowVisibility(
    ref: React.RefObject<HTMLDivElement>,
    setLeft: Function,
    setRight: Function
) {
    const grid = ref.current;
    if (grid) {
        const atStart = Math.round(grid.scrollLeft) <= 0;
        const atEnd = Math.round(grid.scrollLeft + grid.clientWidth) >= Math.round(grid.scrollWidth);
        setLeft(!atStart);
        setRight(!atEnd);
    }
}

export function scrollByCard(
    ref: React.RefObject<HTMLDivElement>,
    direction: "left" | "right",
    cardSelector: string
) {
    const grid = ref.current;
    if (grid) {
        const card = grid.querySelector(cardSelector) as HTMLElement;
        if (!card) return;
        const style = window.getComputedStyle(grid);
        const gap = parseInt(style.gap || "0", 10);
        const scrollAmount = card.offsetWidth + gap;
        grid.scrollBy({
            left: direction === "right" ? scrollAmount : -scrollAmount,
            behavior: "smooth",
        });
    }
}