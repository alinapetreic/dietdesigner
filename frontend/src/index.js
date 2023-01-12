import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/app';
import Blog from './pages/blog/blog';
import Calories from './pages/calories/calories';
import Forum from './pages/forum/forum';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Recipes from './pages/recipes/recipes';
import Register from './pages/register/register';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/home' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/recipes' element={<Recipes />} />
                <Route path='/calories' element={<Calories />} />
                <Route path='/forum' element={<Forum />} />
            </Route>
        </Routes>
    </BrowserRouter>
);