import "mocha";
import { expect } from "chai";
import EnveloppeBuilder from "../src/EnveloppeBuilder";
import GeometryCollection from "../src/GeometryCollection";
import Point from "../src/Point";
import Linestring from "../src/Linestring";

describe("test EnveloppeBuilder", () => {
    it("test with coordinates", () => {
        const builder = new EnveloppeBuilder();

        builder.insert([0.0, 1.0]);
        builder.insert([2.0, 0.0]);
        builder.insert([1.0, 3.0]);

        const result = builder.build();

        expect(result.toString()).to.equal("[0,2,0,3]");
    });
    it("visit GeometryCollection", () => {
        const builder = new EnveloppeBuilder();
        const p1 = new Point([0.0, 1.0]);
        const p2 = new Point([2.0, 0.0]);
        const p3 = new Point([1.0, 6.0]);
        const ls = new Linestring([p2, p3]);
        const geomCollection = new GeometryCollection([p1, ls]);

        geomCollection.accept(builder);

        const result = builder.build();
        expect(result.toString()).to.equal("[0,2,0,6]");
    });
}
);  
