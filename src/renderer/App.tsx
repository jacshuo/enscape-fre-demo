import { useEffect } from 'react';
import './App.scss';
// import { PONG } from '../ipcs/events';

import MainLayout from './components/layouts/MainLayout';

export default function App() {
  useEffect(() => {}, []);
  return (
    <>
      <MainLayout />
    </>
  );
}
