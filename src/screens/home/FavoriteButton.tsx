import {memo, useEffect, useState} from "react";
import type {IMovie} from "./movie.interface";

interface Props {
    movieId: IMovie["id"];
}

function FavoriteButton({movieId}: Props) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem("favorites");
            if (stored) {
                const favorites: IMovie["id"][] = JSON.parse(stored);
                setIsFavorite(favorites.includes(movieId));
            }
        } catch (e) {
            console.error("Ошибка чтения favorites", e);
        }
    }, [movieId]);

    const toggleFavorite = () => {
        try {
            const stored = localStorage.getItem("favorites");
            const favorites: IMovie["id"][] = stored ? JSON.parse(stored) : [];
            let updatedFavorites: IMovie["id"][];

            if (favorites.includes(movieId)) {
                updatedFavorites = favorites.filter((id) => id !== movieId);
                setIsFavorite(false);
            } else {
                updatedFavorites = [...favorites, movieId];
                setIsFavorite(true);
            }

            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        } catch (e) {
            console.error("Ошибка записи favorites", e);
        }
    };

    return (
        <button
            className="btn"
            onClick={toggleFavorite}
        >
            {isFavorite ? "♥️" : "🤍"}
        </button>
    );
}

export default memo(FavoriteButton);
