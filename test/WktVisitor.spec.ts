import "mocha";
import { expect } from "chai";
import WktVisitor from "../src/WktVisitor";
import Point from "../src/Point";
import Linestring from "../src/Linestring";

describe("test WktVisitor ", () => {
    
    it("test Point Wkt", () => {   
        const visitor = new WktVisitor();
        const geometry = new Point([3.0,4.0]);
        geometry.accept(visitor);
        // "POINT(3.0 4.0)"
        const wkt = visitor.getResult();
        expect(wkt).to.equal("POINT(3 4)");
        
    });

    it("test LineString Wkt", () => {
    const visitor = new WktVisitor();
    const a = new Point([1.0,2.0]);
        const b = new Point([3.0,4.0]);
        const geometry = new Linestring([a,b]);
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

    it("test write Point", () => {
        const visitor = new WktVisitor();   
        const geometry = new Point();
        geometry.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("POINT EMPTY");

    });

});