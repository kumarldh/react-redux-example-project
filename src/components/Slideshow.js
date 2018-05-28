import React, {Component} from "react";

import "./css/slider.css";


class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.slides = this.props.slides;
    }

    slider() {
        let max = (this.slides.length - 1);
        let slideImage = document.getElementById('slide');
        let slidenumber = Math.floor(Math.random() * (max + 1));
        slideImage.src = this.slides[slidenumber];
    }

    componentDidMount() {
        setInterval(() => this.slider(), 2000);
    }

    render() {
        return (
            <div className="slider">
                <img id="slide" className="img-responsive center-block" src=""/>
            </div>
        );
    }
}

export default Slideshow;
