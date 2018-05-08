import React from "react";
import assert from "assert";
import chai from "chai";
import sinonChai from "sinon-chai";
import {
    getBatmanSuccess,
    getSupermanSuccess,
    sortBy,    
    PRICE_SORT,
    GET_BATMAN_SUCCESS,
    GET_SUPERMAN_SUCCESS
} from "../../actions/getListings";
chai.use(sinonChai);

const expect = chai.expect;
const response = {"test": "test123"};

describe("getListing", () => {

    describe("actions", () => {
  
      it("should create a getBatmanSuccess action", () => {
        const expected = {
            type: GET_BATMAN_SUCCESS,
            response
        };
        const actual = getBatmanSuccess(response);
        expect(actual).to.deep.equal(expected);
      });

      it("should create a getSupermanSuccess action", () => {
        const expected = {
            type: GET_SUPERMAN_SUCCESS,
            response
        };
        const actual = getSupermanSuccess(response);
        expect(actual).to.deep.equal(expected);
      });

      it("should create a sortBy action", () => {
        const expected = {
            type: PRICE_SORT,
            batmanListing: response,
            supermanListing: response
        };
        const actual = sortBy(PRICE_SORT, response, response);
        expect(actual).to.deep.equal(expected);
      });
  
    });
});
  