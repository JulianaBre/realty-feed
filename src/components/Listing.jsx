import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Listing extends Component {
    render() {
        const {
            address,
            price,
            beds,
            baths,
            size,
            built,
            url,
            img
        } = this.props;
        return (
        <div className="listing">
        <div className="house-img">
            <a href={url}><img src={img} width="100px" alt="house"></img></a>
        </div>
        <div className="built">Built in {built}</div>
        <div className="house-data">
            <div className="address">{address}</div>
            <div className="price">${price}</div>
            <span className="house-specs">{beds} beds  </span>
            <span className="house-specs">* {baths} baths  </span>
            <span className="house-specs">* {size} sq ft  </span>
        </div>
        </div>);
    } 
}

Listing.propTypes = {
    address: PropTypes.string,
    price: PropTypes.string,
    beds: PropTypes.string,
    baths: PropTypes.string,
    size: PropTypes.string,
    built: PropTypes.string,
    url: PropTypes.string,
    img: PropTypes.string
}