import React from "react";
import "./App.css";
import Posts from "./pages/Posts";
import {Route} from "react-router-dom";
import About from "./pages/About";
import * as PropTypes from "prop-types";


function Routes(props) {
    return (

        <Posts/>
    );
}

Routes.propTypes = {children: PropTypes.node};

function App() {
    return (
        <div>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/posts" element={<Posts/>}/>
            </Routes>

        </div>
    )
}

export default App;
