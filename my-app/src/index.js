import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './homepage.html';
global.jQuery = require('jquery');

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
