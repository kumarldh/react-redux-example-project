import React, {Component} from "react";

import Productinfo from "./Productinfo";

class Productgrid extends Component {
    render() {
        let products = this.props.products;
        let setMarkerCoords = this.props.setMarkerCoords;
        let updateFavCount = this.props.updateFavCount;
        let favList = this.props.favList;
        if (products.length > 0) {
            return (
                <div>
                    {products.map(function (product) {
                        let isFav = favList.includes('fav_' + product.id);
                        return <Productinfo key={product.id} setMarkerCoords={setMarkerCoords}
                                            updateFavCount={updateFavCount} isFav={isFav} prdData={product}/>
                    })}
                </div>
            );
        } else {
            return (
                <div>
                    Oops! No products found.
                </div>
            );
        }
    }
}

export default Productgrid;