import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import Linestring from "../src/Linestring";

describe("test AbstractGeometry ", () => {
    
    it("test asText Point", () => {
        const geometry = new Point([5.0,6.0]);
        const wkt = geometry.asText();
        expect(wkt).to.equal("POINT(5 6)");
    });


    it("test asText LineString", () => {
    const a = new Point([1.0,2.0]);
        const b = new Point([3.0,4.0]);
        const geometry = new Linestring([a,b]);
        const wkt = geometry.asText();
        expect(wkt).to.equal("LINESTRING(1 2,3 4)");

    });

});