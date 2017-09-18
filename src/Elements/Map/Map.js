import React from 'react';
import PropTypes from 'prop-types';

import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

import { MAP } from '../../config/settings';

import './styles.css';


const Map = ({events}) => {
    const renderMarkers = () => {
        if (!events) return null;
        return events.map((event, index) => {
            if (!event.lat || !event.lng) return null;
            return (
                <Marker
                    key={index}
                    position={{lat: event.lat, lng: event.lng}}
                />
            )
        })
    };

    return (
        <div className="map-wrapper">
            <GoogleMapLoader
                containerElement={<div className="container-elements"></div>}
                googleMapElement={
                    <GoogleMap
                        defaultCenter={MAP.defaults.cord}
                        defaultZoom={MAP.defaults.zoom}
                    >
                        {renderMarkers()}
                    </GoogleMap>
                }
            />
        </div>
    )
};

Map.propTypes = {
    events: PropTypes.array
};

export default Map;