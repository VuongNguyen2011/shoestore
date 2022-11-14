import React from 'react';
import { useLocation } from 'react-router-dom';

import Layout from './components/Layout'
import LayoutAdmin from './components/LayoutAdmin';
export default function App() {
  const location = useLocation();
  console.log(location)

  const checkLayoutClient = location.pathname.split('/')[1] === 'admin' ? false : true;
  return <>{checkLayoutClient ? <Layout /> : <LayoutAdmin />}</>;
}
