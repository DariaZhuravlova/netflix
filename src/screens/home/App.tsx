import {useMemo, useState} from "react";
import {useDebounce} from "../../hooks/useDebounce";
import {useTheme} from "../../hooks/useTheme";
import MovieCard from "./MovieCard";
import {MOVIES} from "./movies.data";
import {Link} from "react-router-dom";

function App() {
    const {theme, toggleTheme} = useTheme();

    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearch = useDebounce(searchTerm, 500);

    const movies = useMemo(() => {
        return MOVIES.filter((movie) =>
            movie.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
    }, [debouncedSearch]);

    return (
        <div>
            <header className="mb-10 flex items-center justify-between">
                <img
                    src="/netflix.png"
                    alt="Netflix"
                    className="h-8 w-auto"
                />

                <div>
                    <input
                        type="search"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                        placeholder="Search..."
                        className="border border-black/15 dark:border-white/15 px-2 py-1 rounded outline-0"
                    />
                    <Link
                        to="/favorites"
                        className="ml-3 text-sm px-3 py-1 rounded border border-white/20 dark:border-white/10 
               hover:bg-white  dark:hover:bg-white/10 transition"
                    >
                        Favorites
                    </Link>

                    <button
                        onClick={toggleTheme}
                        className="text-sm px-3 py-1 rounded border border-white/20 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition w-20"
                    >
                        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
                    </button>
                </div>
            </header>
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.length ? (
                    movies.map((movie) => (
                        <MovieCard
                            key={movie.name}
                            movie={movie}
                        />
                    ))
                ) : (
                    <p>Movies not found!</p>
                )}
            </main>
        </div>
    );
}

export default App;
