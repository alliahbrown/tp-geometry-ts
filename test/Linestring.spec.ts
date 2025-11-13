import "mocha";
import { expect } from "chai";  
import Linestring from "../src/Linestring";
import Point from "../src/Point";
import LineString from "../src/Linestring";

describe("test Linestring", () => {
    it("test default constructor", () => {
        const ls = new Linestring();
        expect (ls.getNumPoints()).to.equal(0);
        expect(ls.getType()).to.equal("LineString");
        expect(ls.isEmpty()).to.equal(true);
    });

it("test constructor with points", () => {
    const a = new Point([1.0,2.0]);
    const b = new Point([3.0,4.0]);
    const g = new Linestring([a,b]);
    expect(g.getNumPoints()).to.equal(2);
    expect(g.getPointN(0)).to.equal(a);
    expect(g.getPointN(1)).to.equal(b);
    expect(g.isEmpty()).to.equal(false);
});
it("test translate", () => {
    const a = new Point([1.0,2.0]);
    const b = new Point([3.0,4.0]);
    const g = new Linestring([a,b]);
    const copy = g.clone();
    expect(copy).to.deep.equal(g);
    copy.translate(2.0,2.0);
    expect(copy).to.not.equal(g);
    expect(copy.getPointN(0).getCoordinate()).to.deep.equal([3.0,4.0]);
    expect(copy.getPointN(1).getCoordinate()).to.deep.equal([5.0,6.0]);
});

});