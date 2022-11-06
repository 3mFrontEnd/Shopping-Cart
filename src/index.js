import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root')
);










// import React from 'react';
// import { createRoot } from 'react-dom/client'
// import './index.css';
// import App from './App';
// createRoot(document.getElementById('root')).render(<App />)
