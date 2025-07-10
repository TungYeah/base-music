import { NavigateFunction } from 'react-router-dom';

export function handleInputChange(setSearchQuery: React.Dispatch<React.SetStateAction<string>>) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };
}

export function handleKeyPress(searchQuery: string, navigate: NavigateFunction) {
    return (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            navigate(`/search/songs?query=${encodeURIComponent(searchQuery)}`);
        }
    };
}