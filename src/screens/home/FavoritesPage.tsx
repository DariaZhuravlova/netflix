import {useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import {MOVIES} from "./movies.data";

export function FavoritesPage() {
    const [favorites, setFavorites] = useState<number[]>([]);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favorites") || "[]").map(Number);
        setFavorites(favs);
    }, []);

    const favoriteMovies = MOVIES.filter((movie) => favorites.includes(movie.id));



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoriteMovies.length ? (
                favoriteMovies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                ))
            ) : (
                <p>No favorite movies yet!</p>
            )}
        </div>
    );
}
