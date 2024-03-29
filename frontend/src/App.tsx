import React, {useEffect, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import {NewsPage, StoryPage} from "./pages";

function App() {

    return (
    <div className="App">

        <Router>
            <Switch>
                <Route path='/story/:id' component={StoryPage}/>
                <Route path='/' component={NewsPage}/>
        </Switch>
        </Router>

    </div>
  );
}

export default App;
