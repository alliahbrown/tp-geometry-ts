import "mocha";
import { expect } from "chai";  
import Linestring from "../src/Linestring";
import Point from "../src/Point";

describe("test Linestring", () => {
    it("test default constructor", () => {
        const ls = new Linestring();
        expect (ls.getNumPoints()).to.equal(0);
        expect(ls.getType()).to.equal("LineString");
    });

it("test constructor with points", () => {
    const a = new Point([1.0,2.0]);
    const b = new Point([3.0,4.0]);
    const g = new Linestring([a,b]);
    expect(g.getNumPoints()).to.equal(2);
    expect(g.getPointN(0)).to.equal(a);
    expect(g.getPointN(1)).to.equal(b);
});
});