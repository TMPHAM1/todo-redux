import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import List from './list';
import { Route } from 'react-router-dom';
const App = () => (
    <div>
        <div className="container">
            <h1 className="center">Redux To Do</h1>
            <Route path="/" exact component={List}/>
            
        </div>
    </div>
);

export default App;
