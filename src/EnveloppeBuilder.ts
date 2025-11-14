import Coordinate from "./Coordinate";
import Enveloppe from "./Enveloppe";
import GeometryVisitor from "./GeometryVisitor";
import LineString from "./Linestring";
import Point from "./Point";
import GeometryCollection from "./GeometryCollection";

export default class EnveloppeBuilder implements GeometryVisitor<void> {

    private xVals: Array<number>;
    private yVals: Array<number>;
    private results: Enveloppe;

    constructor() {
        this.xVals = new Array<number>();
        this.yVals = new Array<number>();
    }

    insert(coordinate: Coordinate): void {
        this.xVals.push(coordinate[0]);
        this.yVals.push(coordinate[1]);
    }

    build(): Enveloppe {

        const maxX = Math.max.apply(null, this.xVals);
        const minX = Math.min.apply(null, this.xVals);
        const minY = Math.min.apply(null, this.yVals);
        const maxY = Math.max.apply(null, this.yVals);

        return (new Enveloppe([minX, minY], [maxX, maxY]))

    }

    visitLineString(lineString: LineString): void {
        for (let i = 0; i < lineString.getNumPoints(); i++) {
            const pt = lineString.getPointN(i);
            this.insert(pt.getCoordinate());
        }
    }

    visitPoint(point: Point): void {
        this.insert(point.getCoordinate());
    }

    visitGeometryCollection(geometryCollection: GeometryCollection): void {
        for (let i = 0; i < geometryCollection.getNumGeometries(); i++) {
            const geom = geometryCollection.getGeometryN(i);
            geom.accept(this);
        }
    }
}

