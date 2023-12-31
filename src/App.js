// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import BookDetailsPage from "./pages/BookDetailsPage/BookDetailsPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/book/:id" element={<BookDetailsPage />} />
                <Route 
                    path="/favorites" 
                    element={
                        <PrivateRoute>
                            <FavoritesPage />
                        </PrivateRoute>
                    } 
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
