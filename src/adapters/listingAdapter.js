import get from "lodash/get";
import each from "lodash/each";


export default class ListingAdapter {
    constructor(response) {
      this.batmanData = get(response.getBatmanListings, "json");
      this.supermanData = get(response.getSupermanListings, "json");
  }
  
  adapt() {
    const batmanListings = [];
    const supermanListings = [];
    each(this.batmanData, (listing, key) => {
      let batman = {};
      batman.address = key;
      batman.price = get(listing, "cost");
      batman.beds = get(listing, "beds");
      batman.baths = get(listing, "baths");
      batman.size = get(listing, "sq_ft");
      batman.img = get(listing, "img");
      batman.url = get(listing, "url");

      batmanListings.push(batman);
    })
    each(get(this.supermanData, "items"), (listing) => {
      let superman = {};
      superman.address = get(listing, "address");
      superman.price = get(listing, "price");
      superman.beds = get(listing, "beds");
      superman.baths = get(listing, "baths");
      superman.size = get(listing, "sqft");
      superman.img = get(listing, "thumb");
      superman.url = get(listing, "url");
      superman.built = get(listing, "built");

      supermanListings.push(superman);
    })
    return {
      batmanListings,
      supermanListings
    };
  }
}
