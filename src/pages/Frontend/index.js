import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Auth/index';
import ForgotPassword from '../Auth/ForgotPassword';
import Register from '../Auth/Register';
import Header from '../../components/Header'; // Ensure the path is correct
import "../../App.scss"
import "bootstrap/dist/js/bootstrap.bundle"



export default function Frontend() {
    return (
        <Router>
            <Header />
             
            <main >
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/" element={<Login />} /> {/* Default route */}
                </Routes>
            </main>
        </Router>
    );
}
