import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import App from './screens/home/App'
import { MovieDetails } from './screens/movie/MovieDetails'
import { FavoritesPage } from './screens/home/FavoritesPage';

export function MainRoutes() {
	return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={<App />}
                    />
                    <Route
                        path="/movie/:id"
                        element={<MovieDetails />}
                    />
                    <Route
                        path="/favorites"
                        element={<FavoritesPage />}
                    />
                </Route>
            </Routes>
        </Router>
    );
}
