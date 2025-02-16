import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './wordart.scss';
import { Home } from './views/home';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main>
      <Home />
    </main>
  </StrictMode>
);
