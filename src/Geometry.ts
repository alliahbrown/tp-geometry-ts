import Enveloppe from "./Enveloppe";
import GeometryVisitor from "./GeometryVisitor";

export default interface Geometry {
    getType(): string;
    isEmpty():boolean;
    clone(): Geometry;
    translate(dx: number, dy: number): void;
    getEnvelope(): Enveloppe;
    accept(visitor: GeometryVisitor): void;
    asText():string;
}