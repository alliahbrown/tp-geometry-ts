import "mocha";
import { expect } from "chai";
import WktVisitor from "../src/WktVisitor";
import Point from "../src/Point";
import Linestring from "../src/Linestring";
import GeometryCollection from "../src/GeometryCollection";

describe("test WktVisitor ", () => {

    it("test Point Wkt", () => {
        const visitor = new WktVisitor();
        const geometry = new Point([3.0, 4.0]);
        geometry.accept(visitor);
        // "POINT(3.0 4.0)"
        const wkt = visitor.getResult();
        expect(wkt).to.equal("POINT(3 4)");

    });

    it("test LineString Wkt", () => {
        const visitor = new WktVisitor();
        const a = new Point([1.0, 2.0]);
        const b = new Point([3.0, 4.0]);
        const geometry = new Linestring([a, b]);
        geometry.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("LINESTRING(1 2,3 4)");

    });

    it("test Linestring vide", () => {
        const visitor = new WktVisitor();
        const geometry = new Linestring();
        geometry.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("LINESTRING EMPTY");

    });

    it("test Point Vide", () => {
        const visitor = new WktVisitor();
        const geometry = new Point();
        geometry.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("POINT EMPTY");

    });

    it('test GeometryCollection Vide', () => {
        const visitor = new WktVisitor();
        const geomCollection = new GeometryCollection();
        geomCollection.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("GEOMETRYCOLLECTION EMPTY");
    });

    it("test GeometryCollection Wkt", () => {
        const visitor = new WktVisitor();
        const p1 = new Point([1.0, 2.0]);
        const p2 = new Point([3.0, 4.0]);
        const line = new Linestring([p1, p2]);
        const geomCollection = new GeometryCollection([p1, line]);
        geomCollection.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("GEOMETRYCOLLECTION(POINT(1 2),LINESTRING(1 2,3 4))");
    });

});