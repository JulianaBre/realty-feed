import React from "react";
import assert from "assert";
import chai from "chai";
import sinonChai from "sinon-chai";
import { GET_SUPERMAN_SUCCESS } from "../../actions/getListings";
import { getSupermanListings } from "../../reducers/getSupermanListings";
chai.use(sinonChai);

const expect = chai.expect;
const response = {"test": [{1: 1},{2: 2}]};

describe("getSupermanListings", () => {

    describe("reducer", () => {
  
      it("should return superman listings state ", () => {
        const action = {
            type: GET_SUPERMAN_SUCCESS,
            response
        };
        const expected = {
            type: GET_SUPERMAN_SUCCESS,
            json: response
        };
        const state = {};
        const actual = getSupermanListings(state , action);
        expect(actual).to.deep.equal(expected);
      }); 
    });
});