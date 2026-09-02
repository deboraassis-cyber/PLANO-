import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div style={{fontFamily:'Arial, Helvetica, sans-serif', padding:'40px', color:'#18303b'}}>
      <h1>Mesmo Objetivo</h1>
      <p>Colaboração pedagógica</p>
      <p>O projeto foi preparado para a migração para React.</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
