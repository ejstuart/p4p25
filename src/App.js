import React, {useState} from "react";
//import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";
import demo from "./blocks_common/demo";

function App() {

    /*const Demo = props => (
        <ScriptTag type="text/javascript" src="/blocks_common/colour.js" />
    )*/

    const testing = (<Helmet>
        <script src="blocks_common/demo.js" type="text/javascript" />
    </Helmet>)

    return (
        <div>
            <h1>Your app here!</h1>
            <demo> </demo>
            <p> {testing}</p>

        </div>

    );
}

export default App;
