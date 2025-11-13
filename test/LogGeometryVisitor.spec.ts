import "mocha";
import { expect } from "chai";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import Point from "../src/Point";
import Linestring from "../src/Linestring";

describe("test LogGeometryVisitor", () => {
    it("test Points", () => {
    const visitor = new LogGeometryVisitor();
    const geometry = new Point([3.0,4.0]);
    geometry.accept(visitor);
    });

    it("test Linestring", () => {
        const visitor = new LogGeometryVisitor();
        const a = new Point([1.0,2.0]);
        const b = new Point([3.0,4.0]);
        const geometry = new Linestring([a,b]);
        geometry.accept(visitor);

    });


    it("test points vides", () => {
    const visitor = new LogGeometryVisitor();
    const geometry = new Point();
    geometry.accept(visitor);   
    });

    it("test Linestring", () => {
        const visitor = new LogGeometryVisitor();
        const geometry = new Linestring();
        geometry.accept(visitor);

    });

});
