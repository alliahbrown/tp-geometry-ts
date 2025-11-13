import "mocha";
import { expect } from "chai";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import Point from "../src/Point";
import Linestring from "../src/Linestring";

describe("test LogGeometryVisitor", () => {
    it("test Points", () => {

    let result = ""
    const visitor = new LogGeometryVisitor((message)=>
    result = message);
    const geometry = new Point([3.0,4.0]);
    geometry.accept(visitor);
    expect(result).to.equal("Je suis un point de coordonnés: (x=3 et y=4)");


    });

    it("test Linestring", () => {
        let result = ""
        const visitor = new LogGeometryVisitor((message)=>
        result = message);
        const a = new Point([1.0,2.0]);
        const b = new Point([3.0,4.0]);
        const geometry = new Linestring([a,b]);
        geometry.accept(visitor);
        expect(result).to.equal("Je suis une polyligne definie par 2 points");
    });


    it("test points vides", () => {
        let result = ""
        const visitor = new LogGeometryVisitor((message)=>
        result = message);
        const geometry = new Point();
        geometry.accept(visitor);
        expect(result).to.equal("Je suis un point vide.");
    });
    it("test Linestring vide", () => {  
        let result = ""         
        const visitor = new LogGeometryVisitor((message)=>
        result = message);
        const geometry = new Linestring();
        geometry.accept(visitor);
        expect(result).to.equal("Je suis une polyligne vide.");
    });

});
