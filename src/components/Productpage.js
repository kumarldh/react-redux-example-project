import React, {Component} from "react";

import "./css/productpage.css";

import Testimonials from "./Testimonials";
import Slideshow from "./Slideshow";


class Productpage extends Component {

    fetchProductInfo(productId) {
        let product = {
            id: 123,
            mainImage: "",
            images: [
                "http://via.placeholder.com/1800x1800/F0F8FF/000000/?text=Hello+World!",
                "http://via.placeholder.com/1800x1800/FAEBD7/000000/?text=Hello+World!",
                "http://via.placeholder.com/1800x1800/F0FFFF/000000/?text=Hello+World!",
                "http://via.placeholder.com/1800x1800/F5F5DC/000000/?text=Hello+World!",
                "http://via.placeholder.com/1800x1800/FFF8DC/000000/?text=Hello+World!",
                "http://via.placeholder.com/1800x1800/F8F8FF/000000/?text=Hello+World!"
            ],
            title: "Awesome product",
            detail: "",
            slides: [
                {
                    id: 1212,
                    title: "changed my life",
                    text: "This product changed my life, now I can do what I could only wish for"
                },
                {
                    id: 121,
                    title: "Could have been better",
                    text: "This product could have been better"
                }
            ]
        };
        if (productId === product.id) {
            return product;
        } else {
            return {};
        }
    }

    render() {
        let productId = parseInt(this.props.match.params.prdid, 10);
        let prd = this.fetchProductInfo(productId);
        if (prd.id === undefined) {
            return (
                <main className="product">
                    <div className="container">
                        <div className="row">
                            <h2 className="alert-info">Oops! No such product exists in our database.</h2>
                        </div>
                    </div>
                </main>
            );
        } else {
            let sliderComponent = prd.images.length > 0 ?
                <Slideshow slides={prd.images}/> : 'Product images not available!';
            return (
                <main className="product">
                    <div className="container">
                        <div className="row">
                            <div className="prdheroimg">
                                {sliderComponent}
                            </div>
                            <div className="prddescription">
                                <h2>{prd.title}</h2>
                                <p>{prd.detail}</p>
                            </div>
                            <Testimonials testimonials={prd.slides}/>
                        </div>
                    </div>
                </main>
            );
        }

    }
}

export default Productpage;
