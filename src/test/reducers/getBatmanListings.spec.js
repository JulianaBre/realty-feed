import React from "react";
import assert from "assert";
import chai from "chai";
import sinonChai from "sinon-chai";
import { GET_BATMAN_SUCCESS } from "../../actions/getListings";
import { getBatmanListings } from "../../reducers/getBatmanListings";
chai.use(sinonChai);

const expect = chai.expect;
const response = {"test": "test123"};

describe("getBatmanListings", () => {

    describe("reducer", () => {
  
      it("should return batman listings state ", () => {
        const action = {
            type: GET_BATMAN_SUCCESS,
            response
        };
        const expected = {
            type: GET_BATMAN_SUCCESS,
            json: response
        };
        const state = {};
        const actual = getBatmanListings(state , action);
        expect(actual).to.deep.equal(expected);
      }); 
    });
});