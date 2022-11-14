import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminRoute from './routes/AdminRoute';
import ClientRoute from './routes/ClientRoute';
export default function App() {
    return <><ClientRoute />  <AdminRoute /></>
}