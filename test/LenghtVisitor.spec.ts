import "mocha";
import { expect } from "chai";
import WktVisitor from "../src/WktVisitor";
import Point from "../src/Point";
import Linestring from "../src/Linestring";
import GeometryCollection from "../src/GeometryCollection";
import LengthVisitor from "../src/LengthVisitor";

describe("test LengthVisitor ", () => {

    it("test Point Lenght", () => {
        const visitor = new LengthVisitor();
        const geometry = new Point([3.0, 4.0]);
        geometry.accept(visitor);
        const length = visitor.getResult();
        expect(length).to.equal(0);

    });

    it("test LineString Lenght", () => {
        const visitor = new LengthVisitor();
        const a = new Point([3.0, 4.0]);
        const b = new Point([6.0, 8.0]);
        const geometry = new Linestring([a, b]);
        geometry.accept(visitor);
        const length = visitor.getResult();
        expect(length).to.equal(5);
    });

    it("test Linestring vide", () => {
        const visitor = new LengthVisitor();
        const geometry = new Linestring();
        geometry.accept(visitor);
        const length = visitor.getResult();
        expect(length).to.equal(0);
    });

    it("test GeometryCollection Lenght", () => {
        const visitor = new LengthVisitor();
        const p1 = new Point([0.0, 0.0]);
        const p2 = new Point([3.0, 4.0]);
        const line1 = new Linestring([p1, p2]);

        const p3 = new Point([3.0, 4.0]);
        const p4 = new Point([6.0, 8.0]);
        const line2 = new Linestring([p3, p4]);

        const geomCollection = new GeometryCollection([line1, line2]);
        geomCollection.accept(visitor);
        const length = visitor.getResult();
        expect(length).to.equal(10);
    });



}
);  