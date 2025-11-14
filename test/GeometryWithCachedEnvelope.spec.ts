import GeometryWithCachedEnvelope from "../src/GeometryWithCachedEnvelope";
import "mocha";
import { expect } from "chai";
import Point from "../src/Point";


describe("test GeometryWithCachedEnvelope ", () => {


    it("should work for existing methods", () => {
        let point = new Point([3.0, 3.0]);
        let g = new GeometryWithCachedEnvelope(point);
        expect(g.getType()).to.equal("Point");
        expect(g.isEmpty()).to.equal(false);
        expect(g.asText()).to.equal("POINT(3 3)");
        
        const copy = g.clone();
        expect(copy).to.not.equal(g);
        expect(copy.getType()).to.equal("Point");
        expect(copy.isEmpty()).to.equal(false);
    });

    it("test getEnvelope() caching", () => {
        let point = new Point([3.0, 3.0]);
        let g = new GeometryWithCachedEnvelope(point);
        const a = g.getEnvelope();
        const b = g.getEnvelope();
        expect(a).to.equal(b);
    });

    it("test translate invalidates cache", () => {
        let point = new Point([3.0, 3.0]);
        let g = new GeometryWithCachedEnvelope(point);
        const a = g.getEnvelope();
        g.translate(1.0, 1.0);
        const b = g.getEnvelope();
        expect(a).to.not.equal(b);
    });
});