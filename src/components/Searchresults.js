import React, {Component} from "react";

import Productgrid from "./Productgrid";
import SearchFilters from "./SearchFilters";
import GooglemapColumn from "./GooglemapColumn";

class Searchresults extends Component {
    constructor(props){
        super(props)
        this.state = {coordinates: {lat: 28.7041, lng: 77.1025}};
    }

    fetchResults() {
        return [
            {
                id: 123,
                productTitle: "Awesome product in Gurgaon",
                productPrice: "affordable",
                productLocation: {
                    locationCity: "Gurgaon",
                    coordinates: {
                        lat: 28.4595,
                        lng: 77.0266

                    }
                }
            },
            {
                id: 2,
                productTitle: "Noida has this awesome product",
                productPrice: "reasonable",
                productLocation: {
                    locationCity: "Noida",
                    coordinates: {
                        lat: 28.535517,
                        lng: 77.391029

                    }
                }
            },
            {
                id: 3,
                productTitle: "It's in Faridabad",
                productPrice: "cheap",
                productLocation: {
                    locationCity: "Faridabad",
                    coordinates: {
                        lat: 28.4089,
                        lng: 77.3178

                    }
                }
            },
            {
                id: 4,
                productTitle: "Delhi got it",
                productPrice: "Best",
                productLocation: {
                    locationCity: "Awesome city",
                    coordinates: {
                        lat: 28.6139,
                        lng: 77.2090

                    }
                }
            },
            {
                id: 12,
                productTitle: "Awesome product in Gurgaon",
                productPrice: "affordable",
                productLocation: {
                    locationCity: "Gurgaon",
                    coordinates: {
                        lat: 28.4595,
                        lng: 77.0266

                    }
                }
            },
            {
                id: 21,
                productTitle: "Noida has this awesome product",
                productPrice: "reasonable",
                productLocation: {
                    locationCity: "Noida",
                    coordinates: {
                        lat: 28.535517,
                        lng: 77.391029

                    }
                }
            },
            {
                id: 34,
                productTitle: "It's in Faridabad",
                productPrice: "cheap",
                productLocation: {
                    locationCity: "Faridabad",
                    coordinates: {
                        lat: 28.4089,
                        lng: 77.3178

                    }
                }
            },
            {
                id: 45,
                productTitle: "Delhi got it",
                productPrice: "Best",
                productLocation: {
                    locationCity: "Awesome city",
                    coordinates: {
                        lat: 28.6139,
                        lng: 77.2090

                    }
                }
            }
        ];
    }

    setMarkerCoords = (e) => {
        e.preventDefault();
        let lat = e.target.getAttribute('data-lat')
        let lng = e.target.getAttribute('data-lng')
        this.setState({coordinates:{lat: lat,lng: lng}});
    }

    render() {
        let results = this.fetchResults();
        return (
            <main className="searchresults">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <SearchFilters/>
                            <Productgrid
                                setMarkerCoords={this.setMarkerCoords}
                                updateFavCount={this.props.updateFavCount}
                                favList={this.props.favList}
                                products={results}
                            />
                        </div>
                        <div className="col-sm-4">
                            <GooglemapColumn coordinates={this.state.coordinates} />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Searchresults;
