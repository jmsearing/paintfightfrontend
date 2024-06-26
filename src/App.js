import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/login';
import Home from './container/home';

const App = () => {
    return (
        <Routes>
            <Route path="login" element={ <Login /> } />
            <Route path="/*" element={ <Home /> } />
        </Routes>
    )
}

export default App
