import Enveloppe from "./Enveloppe";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";
import WktVisitor from "./WktVisitor";
import EnveloppeBuilder from "./EnveloppeBuilder";

export default abstract class AbstractGeometry implements Geometry {

    abstract getType(): string;
    abstract isEmpty(): boolean;
    abstract clone(): Geometry;
    abstract translate(dx: number, dy: number): void;
    abstract accept(visitor: GeometryVisitor): void;

    asText(): string {
        const wktVisitor = new WktVisitor();
        this.accept(wktVisitor);
        return wktVisitor.getResult();

    }

    getEnvelope(): Enveloppe {
        const builder = new EnveloppeBuilder();
        this.accept(builder);
        return builder.build();
    }

}

;   