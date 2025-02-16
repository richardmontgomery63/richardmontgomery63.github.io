import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './wordart.scss';
import { Header } from './components/header';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main>
      <Header />
    </main>
  </StrictMode>
);
