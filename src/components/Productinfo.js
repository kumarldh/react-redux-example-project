import React, {Component} from "react";

import "./css/productinfo.css";


class Productinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coordinates: {
                lat: 77.1025,
                lng: 28.7041
            }
        };
    }

    render() {
        let prdData = this.props.prdData;
        let currentColor = {color: (this.props.isFav === true ? '#0f0' : '#f00')};

        return (
            <div className="col-sm-5 productinfo" key={prdData.id}>
                <span className="glyphicon glyphicon-heart markfav pull-right"
                      onClick={this.props.updateFavCount}
                      style={currentColor}
                      data-prdid={prdData.id}
                ></span>
                <h3 className="prdtitle"><a href={"/product/" + prdData.id}>{prdData.productTitle}</a></h3>
                <p><span className="prdkey">Price:</span><span className="prdvalue">{prdData.productPrice}</span></p>
                <p>
                    <span className="prdkey">Location:</span>
                    <span className="prdvalue">
                        <a href="void()" onClick={this.props.setMarkerCoords}
                           data-lat={prdData.productLocation.coordinates.lat}
                           data-lng={prdData.productLocation.coordinates.lng}
                        >
                            {prdData.productLocation.locationCity}</a>
                    </span>
                </p>
            </div>
        );
    }
}

export default Productinfo;
