import axios from "axios";

export const PAGE_SIZE = 20;

export async function fetchSongs(keyword: string, page: number = 0) {
    try {
        const response = await axios.get("https://music.tinasoft.io/api/v1/search/songs", {
            params: {
                keyword,
                pageSize: PAGE_SIZE,
                page
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch songs", error);
        throw new Error("Failed to fetch songs");
    }
}
