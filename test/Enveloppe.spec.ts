import "mocha";
import { expect } from "chai";
import Enveloppe from "../src/Enveloppe";

describe("test Enveloppe", () => {
    it("test default constructor", () => {
        const env = new Enveloppe();

        expect(env.isEmpty()).to.equal(true);

        expect(Number.isNaN(env.getXmax()));
        expect(Number.isNaN(env.getXmin()));
        expect(Number.isNaN(env.getYmin()));
        expect(Number.isNaN(env.getYmax()));

        expect(env.toString()).to.equal("EMPTY");

    });
    it("test constructor with coordinates", () => {
        const env = new Enveloppe(([1.0,2.0]), ([3.0,4.0]));
        expect(env.isEmpty()).to.equal(false);
        expect(env.toString()).to.equal("[1,3,2,4]");
    });


});

