import "mocha";
import { expect } from "chai";  
import Linestring from "../src/Linestring";
import Point from "../src/Point";
import GeometryCollection from "../src/GeometryCollection";


describe("test GeometryCollection", () => {
    it("test default constructor", () => {
        const g = new GeometryCollection();
        expect (g.getNumGeometries()).to.equal(0);
        expect(g.getType()).to.equal("GeometryCollection");
        expect(g.isEmpty()).to.equal(true);
    });

    it("test constructor with geometries", () => {
        const a = new Point([1.0,2.0]);
        const b = new Point([3.0,4.0]);
        const g = new Linestring([a,b]);

        const pt = new Point([5.0,6.0]);
        const geometryCollection = new GeometryCollection([g,pt]);
        expect(geometryCollection.getNumGeometries()).to.equal(2);
        expect(geometryCollection.getGeometryN(0)).to.equal(g);
        expect(geometryCollection.getGeometryN(1)).to.equal(pt);
        expect(geometryCollection.isEmpty()).to.equal(false);
    });

    it("test translate", () => {
        const a = new Point([1.0,2.0]);
        const b = new Point([3.0,4.0]);
        const ls = new Linestring([a,b]);
        const pt = new Point([5.0,6.0]);
        const geometryCollection = new GeometryCollection([ls,pt]);
        const copy = geometryCollection.clone();
        expect(copy).to.deep.equal(geometryCollection);
        copy.translate(2.0,2.0);
        expect(copy).to.not.equal(geometryCollection);
    });

});  