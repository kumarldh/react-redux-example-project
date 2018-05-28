import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Searchform from "./components/Searchform";
import Searchresults from "./components/Searchresults";
import Productpage from "./components/Productpage";
import Footer from "./components/Footer";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalFav: 0,
            favList: []
        };

    }

    updateFavCount = (e) => {
        e.preventDefault();
        let prdid = e.target.getAttribute('data-prdid');
        let newFavList = this.state.favList;
        if (!newFavList.includes('fav_' + prdid)) {
            newFavList.push('fav_' + prdid);
        } else {
            newFavList.pop('fav_' + prdid);
        }
        this.setState({
            favList: newFavList,
            totalFav: newFavList.length
        });
    }

    render() {
        return (
            <Router history="">
                <div className="App">
                    <Header totalFav={this.state.totalFav}/>
                    <Route exact path="/" component={Searchform}/>
                    <Route path="/results" render={(props) => (
                        <Searchresults
                            updateFavCount={this.updateFavCount}
                            favList={this.state.favList}
                            {...props}
                        />
                    )}/>
                    <Route path="/product/:prdid" component={Productpage}/>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
