import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../components/Layout";
import Home from '../pages/Home';
import Books from '../pages/Books';
import Start from '../pages/Start';
import SignWriter from '../pages/LoginAsWriter';
import LoginAsReader from '../pages/LoginAsReader';
import SignUp from '../pages/SignUp';

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path='/books' element={<Books />} />
            <Route path='/start' element={<Start />} />
            <Route path='/login/writer' element={<SignWriter />} />
            <Route path='/login/reader' element={<LoginAsReader />} />
            <Route path='/signup/writer' element={<SignUp />} />
            <Route path="/"  element={<Navigate replace to="/" />}/>
        </Routes>
    </Layout>

);

export default AppRoutes;