import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

global.jQuery = require('jquery');

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
