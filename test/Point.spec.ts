import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
        expect(p.isEmpty()).to.equal(true);
        expect(p.getType()).to.equal("Point");
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        expect(p.isEmpty()).to.equal(false);
    });
    it("test translate", () => {
        const p = new Point([1.0,1.0]);
        const copy = p.clone()
        expect(copy).to.deep.equal(p);
        copy.translate(2.0,2.0);
        expect(copy).to.not.equal(p);
        expect(copy.getCoordinate()).to.deep.equal([3.0,3.0]);
        expect(copy.x()).to.equal(3.0);
        expect(copy.y()).to.equal(3.0);
    });


});

