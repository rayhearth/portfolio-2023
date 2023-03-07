import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Layout, Home, About, Projets, Contact } from '../pages/index'
import Error from '../_utils/Error'

const Router = () => {
    return (
        <Routes>
            <Route element={<Layout />}>

                <Route index element={<Home />} />

                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projets" element={<Projets />} />
                <Route path="/contact" element={<Contact />} />

                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
};

export default Router;