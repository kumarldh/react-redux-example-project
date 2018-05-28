/* eslint-disable no-undef */
import React, {Component} from "react";

class GooglemapColumn extends Component {

    constructor(props) {
        super(props);

        this.coordinates = this.props.coordinates;
        this.mapLoaded = false;
        this.map = null;
        this.currentMarker = null;
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAf0YdDQJbSvQpytuUT0iBHmdtpkT72JiA";
        script.async = false;
        document.body.appendChild(script);
        script.onload = this.initMap;
    }

    initMap = () => {
        let coordinates = this.coordinates;
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: coordinates
        });
        let marker = new google.maps.Marker({
            position: coordinates,
            map: map
        });
        this.currentMarker = marker;
        this.mapLoaded = true;
        this.map = map;
    }

    putmarker = () => {
        if (!this.mapLoaded && this.map === null) {
            return
        }
        let coordinates = {
            lat: parseFloat(this.props.coordinates.lat, 10),
            lng: parseFloat(this.props.coordinates.lng, 10)
        };
        this.currentMarker.setMap(null);
        let marker = new google.maps.Marker({
            position: coordinates,
            map: this.map
        });
        this.currentMarker = marker;
        this.map.panTo(marker.getPosition());
    }

    render() {
        this.putmarker();
        return (
            <div id="map"></div>
        );
    }
}

export default GooglemapColumn;
