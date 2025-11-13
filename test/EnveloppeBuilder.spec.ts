import "mocha";
import { expect } from "chai";
import EnveloppeBuilder from "../src/EnveloppeBuilder";

describe("test EnveloppeBuilder", () => {
    it("test with coordinates", () => {
        const builder = new EnveloppeBuilder();

        builder.insert([0.0,1.0]);
        builder.insert([2.0,0.0]);
        builder.insert([1.0,3.0]);
        
        const result = builder.build();

        expect(result.toString()).to.equal("[0,2,0,3]");


    });


});
