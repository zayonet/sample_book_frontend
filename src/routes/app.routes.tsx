import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Books from '../pages/Books';
import Start from '../pages/Start';
import SignWriter from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import NoPage from '../pages/NoPage';
import UpdateBook from '../pages/UpdateBook';

const AppRoutes = ()=> (
    <Layout>
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/start" element={<Start />} />
            <Route path="/sigin" element={<SignWriter />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/update/:id" element={<UpdateBook />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </Layout>
);

export default AppRoutes;
