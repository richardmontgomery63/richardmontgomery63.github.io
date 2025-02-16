import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './wordart.scss';
import { Header } from './components/header';
import { Home } from './views/home';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main>
      <Header />
      <Home />
    </main>
  </StrictMode>
);
