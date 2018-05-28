import React, {Component} from "react";
import Slideshow from "./Slideshow";

import "./css/searchform.css";


class Searchform extends Component {
    constructor(props) {
        super(props)
        this.randomImages = [
            "http://via.placeholder.com/1140x800/F0F8FF/000000/?text=Hello+World!",
            "http://via.placeholder.com/1140x800/FAEBD7/000000/?text=Hello+World!",
            "http://via.placeholder.com/1140x800/F0FFFF/000000/?text=Hello+World!",
            "http://via.placeholder.com/1140x800/F5F5DC/000000/?text=Hello+World!",
            "http://via.placeholder.com/1140x800/FFF8DC/000000/?text=Hello+World!",
            "http://via.placeholder.com/1140x800/F8F8FF/000000/?text=Hello+World!"
        ];
        this.state = {
            coordinates: {
                lat: '',
                long: ''
            }
        }
    }

    render() {
        return (
            <main>
                <div className="container bgimages">
                    <Slideshow slides={this.randomImages}/>
                </div>
                <div className="searchform container">
                    <div>
                        <form className="searchform" method="get" action="/results">
                            <div className="col-lg">
                                <div className="input-group">
                                    <input type="text" className="form-control" name="q" placeholder="Search for..."/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="submit">Search</button>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        );
    }
}

export default Searchform;
