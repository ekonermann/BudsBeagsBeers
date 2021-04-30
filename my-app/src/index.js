import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

global.jQuery = require('jquery');

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
