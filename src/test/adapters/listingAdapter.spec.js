import React from "react";
import assert from "assert";
import chai from "chai";
import sinonChai from "sinon-chai";
import { responseJson } from "../data/responseJson";
import { adaptedData } from "../data/adaptedData";
import ListingAdapter from "../../adapters/listingAdapter";

chai.use(sinonChai);

const expect = chai.expect;

describe("listingAdapter", () => {

    describe("adapter", () => {
  
      it("should adapt batman data", () => {
        const batmanListings = adaptedData.batmanListings;
        const supermanListings = adaptedData.supermanListings;
        const sortedListings = responseJson.getSortedListings;
        const listingAdapter = new ListingAdapter(responseJson);
        const actual = listingAdapter.adapt();
        expect(JSON.stringify(actual)).to.equal(JSON.stringify(adaptedData));
      });
    });
});
  