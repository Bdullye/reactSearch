import React, { Component } from "react";
import Navbar from "./Nav";
//import { ArticleSearch } from 'articleSearch';

class Home extends Component {
    render(){
        return(
            <div>
                {Navbar}
            {/* <ArticleSearch /> */}
            <h1>HOME</h1>
            </div>
        )
    }
};

export default Home;
//module.exports = Home;