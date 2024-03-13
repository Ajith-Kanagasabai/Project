import React from 'react';
import Banner from './Banner';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import App from './App';
import Welcome from './Welcome';

const HomePage = () => {
    return (
        <Router>
            <div className="Home-page">
                <Routes>
                    <Route exact path='/' component={App} />
                    <Route eaxct path='/login' element={<Login />} />
                    <Route exact path='/register' element={<Register />} />
                    <Route exact path='/Welcome' element={<Welcome />} />

                </Routes>

                <Header />
                <Banner />

            </div>
            </Router>

    );
};

export default HomePage;
