import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import { connect } from "react-redux";
import Listing from './Listing';
import each from "lodash/each";
import isEmpty from "lodash/isEmpty";
import {
    getBatmanSuccess,
    getSupermanSuccess,
    sortBy,    
    PRICE_SORT,
    BED_SORT,
    SQ_FT_SORT
} from '../actions/getListings'
import ListingAdapter from '../adapters/listingAdapter'

class App extends Component {
    // Bind the callback functions here
    constructor(props) {
        super(props);
        this.priceSort = this.priceSort.bind(this);
        this.bedSort = this.bedSort.bind(this);
        this.sqFtSort = this.sqFtSort.bind(this);
    }

    // After mounting, get the feeds and dispatch event
    componentDidMount() {
        const { getListings } = this.props;
        axios.get("/data/batmanRealty.json")
            .then(response => {
                const data = response.data;
                const hero = "batman";
                getListings({data, hero});
            });
        axios.get("/data/supermanRealty.json")
            .then(response => {
                const data = response.data;
                const hero = "superman";
                getListings({data, hero});
            });   
    }

    // Create array of adapted batman data into the Listing Component
    renderBatmanListings() {
        const { batmanListings } = this.props;
        const listingsArr = [];
        each(batmanListings, (listing) => {
            listingsArr.push(<Listing {...listing} />);  
        })
        return listingsArr;
    }

    // Create array of adapted superman data into the Listing Component
    renderSupermanListings() {
        const { supermanListings } = this.props;
        const listingsArr = [];
        each(supermanListings, (listing) => {
            listingsArr.push(<Listing {...listing} />);  
        });
        return listingsArr;
    }

    // Take the combined sorted listings and create Listing Array
    renderSortedListings() {
        const { sortedListings } = this.props;
        const listingsArr = [];
        each(sortedListings, (listing) => {
            listingsArr.push(<Listing {...listing} />);
        });
        return listingsArr;
    }

    // Prefer sorted listings to render if available
    renderAllListings() {
        const { sortedListings } = this.props;
        if (!isEmpty(sortedListings)) {
            return this.renderSortedListings();
        }
        return this.renderBatmanListings().concat(this.renderSupermanListings());
    }

    // Sort function for all types of sorts. Calls dispatch event.
    sort(type) {
        const { getSortBy, batmanListings, supermanListings} = this.props;
        getSortBy({ type, batmanListings, supermanListings });
    }

    priceSort() {
        this.sort(PRICE_SORT);
    }
    bedSort() {
        this.sort(BED_SORT);
    }
    sqFtSort() {
        this.sort( SQ_FT_SORT);
    }

    // Renders array of the sort buttons
    renderSortButtons() {
        const buttonsArr = [];
        buttonsArr.push(
        <span className="sort-button">
            <button onClick={this.priceSort} className="button">Price</button>
        </span>);
        buttonsArr.push(
            <span className="sort-button">
                <button onClick={this.bedSort} className="button">Beds</button>
            </span>);
        buttonsArr.push(
            <span className="sort-button">
                <button onClick={this.sqFtSort} className="button">Sq Ft</button>
            </span>);
        return buttonsArr;
    }

    render() {  
        return (
            <div className="listing-container">
                <div className="sort-button">
                    {this.renderSortButtons()}
                </div>
                {this.renderAllListings()}
            </div>
        )
    }
}

App.proptypes = {
    getSortBy: PropTypes.func,
    getListings: PropTypes.func,
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
    ),
    sortedListings: PropTypes.arrayOf(
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

export const mapDispatchToProps = dispatch => {
    return {
      getSortBy: ({ type, batmanListings, supermanListings }) => {
        dispatch(sortBy( type, batmanListings, supermanListings ));
      },
      getListings: ({ data, hero }) => {
        if (hero === "batman") {
            dispatch(getBatmanSuccess(data));
        } else if (hero === "superman") {
            dispatch(getSupermanSuccess(data))
        }     
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);