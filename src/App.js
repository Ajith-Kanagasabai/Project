import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Candidate from './components/Candidate';
import Client from './components/Clients';
import Blog from './components/Blog';
import Contact from './components/Contact';
import What from './components/What we do';
import Home from './components/Home';

const HomePage = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/register' element={<Register />} />
                    <Route exact path='/Welcome' element={<Welcome />} />
                    <Route exact path='/Candidate' element={<Candidate />} />
                    <Route exact path='/Client' element={<Client />} />
                    <Route exact path='/Blog' element={<Blog />} />
                    <Route exact path='/Contact' element={<Contact />} />
                    <Route exact path='/Whatwedo' element={<What />} />

                </Routes>


            </div>
            </Router>

    );
};

export default HomePage;
