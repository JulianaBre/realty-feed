import { Grid, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import { connect } from "react-redux";
import Listing from './Listing';
import each from "lodash/each";
import {
    getBatmanSuccess,
    getSupermanSuccess
} from '../actions/getListings'
import ListingAdapter from '../adapters/listingAdapter'

class App extends Component {
    componentDidMount() {
        axios.get("/data/batmanRealty.json")
            .then(response => {
                this.props.dispatch(getBatmanSuccess(response.data))
            });
        axios.get("/data/supermanRealty.json")
            .then(response => {
                this.props.dispatch(getSupermanSuccess(response.data))
            });   
    }

    renderBatmanListings() {
        const { batmanListings } = this.props;
        const listingsArr = [];
        each(batmanListings, (listing) => {
            listingsArr.push(<Listing {...listing} />);  
        })
        return listingsArr;
    }

    renderSupermanListings() {
        const { supermanListings } = this.props;
        const listingsArr = [];
        each(supermanListings, (listing) => {
            listingsArr.push(<Listing {...listing} />);  
        })
        return listingsArr;
    }

    render() {  
        return (
            <div className="listing-container">
                {this.renderBatmanListings()}
                {this.renderSupermanListings()}
            </div>
        )
    }
}

App.proptypes = {
    batmanListings: PropTypes.arrayOf(
        PropTypes.shape({
            address: PropTypes.string,
            price: PropTypes.string,
            beds: PropTypes.string,
            baths: PropTypes.string,
            size: PropTypes.string,
            built: PropTypes.string,
            url: PropTypes.string,
            img: PropTypes.string
        })
    ),
    supermanListings: PropTypes.arrayOf(
        PropTypes.shape({
            address: PropTypes.string,
            price: PropTypes.string,
            beds: PropTypes.string,
            baths: PropTypes.string,
            size: PropTypes.string,
            built: PropTypes.string,
            url: PropTypes.string,
            img: PropTypes.string
        })
    )
}

export const mapStateToProps = (state) => {
    const listingAdapter = new ListingAdapter(state);
    return listingAdapter.adapt();
};

export default connect(mapStateToProps)(App);