import "mocha";
import { expect } from "chai";
import WktWriter from "../src/WktWriter";
import Point from "../src/Point";
import Linestring from "../src/Linestring";

describe("test WktWriter ", () => {

    it("test Point vide", () => {
        const p = new Point();
        const writer = new WktWriter();
        const wkt = writer.write(p);
        expect(wkt).to.equal("POINT EMPTY");
    });

    it("test Linestring vide", () => {
        const ls = new Linestring();
        const writer = new WktWriter();
        const wkt = writer.write(ls);
        expect(wkt).to.equal("LINESTRING EMPTY");
    });

    it("test write Point", () => {
        const writer = new WktWriter();
        const p = new Point([1.0, 1.0]);
        const wkt = writer.write(p);
        expect(wkt).to.equal("POINT(1 1)");
    });
    it("test write LineString", () => {
        const writer = new WktWriter();

        const a = new Point([1.0, 2.0]);
        const b = new Point([3.0, 4.0]);
        const g = new Linestring([a, b]);

        const wkt = writer.write(g);
        expect(wkt).to.equal("LINESTRING(1 2,3 4)");
    });
});     