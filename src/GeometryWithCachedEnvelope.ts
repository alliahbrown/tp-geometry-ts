import Geometry from "./Geometry";
import Enveloppe from "./Enveloppe";
import GeometryVisitor from "./GeometryVisitor";

export default class GeometryWithCachedEnvelope implements Geometry {
    private original: Geometry;
    private cachedEnvelope: Enveloppe | null = null;

    constructor(original: Geometry) {
        this.original = original;   
    }

    getEnvelope(): Enveloppe {
        if (this.cachedEnvelope === null) {
            this.cachedEnvelope = this.original.getEnvelope();
        }
        return this.cachedEnvelope;
    }

    getType(): string {
        return this.original.getType();
    }

    isEmpty(): boolean {
        return this.original.isEmpty();
    }

    clone(): Geometry {
        return new GeometryWithCachedEnvelope(this.original.clone());
    }

    translate(dx: number, dy: number): void {
        this.original.translate(dx, dy);
        this.cachedEnvelope = null;

    }

    accept<T>(visitor: GeometryVisitor<T>): T {
        return this.original.accept(visitor);
    }

    asText(): string {
        return this.original.asText();
    }
}