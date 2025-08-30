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

    if (!favoriteMovies.length) {
        return (
            <div className="flex flex-col items-center justify-center h-[70vh] text-center gap-4">
                <p className="text-lg font-medium">No favorite movies yet!</p>
                <button
                    onClick={() => (window.location.href = "/")}
                    className="px-6 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition"
                >
                    Back to home
                </button>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoriteMovies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </div>
    );
}
