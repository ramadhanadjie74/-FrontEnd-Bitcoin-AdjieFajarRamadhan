import React from 'react'
import Rupiah2Btc from './Rupiah2Btc';
import Btc2Rupiah from './Btc2Rupiah';
import Data from './Data';
import { Route, Link } from "react-router-dom"
import NavBar from './NavBar';


function App() {
    return (
        <div className="App">
            <NavBar/>
            <Route exact path="/" component={Data}/>
            <Route exact path="/Btc2rupiah" component={Rupiah2Btc}/>
            <Route exact path="/Rupiah2Btc" component={Btc2Rupiah}/>

        </div>
    )
}

export default App;