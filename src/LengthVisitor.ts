import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./Linestring";
import GeometryCollection from "./GeometryCollection";

export default class LengthVisitor implements GeometryVisitor<number> {
    private totalLength: number;

    constructor() {
        this.totalLength = 0;
    }
    getResult(): number {
        return this.totalLength;
    }

    visitPoint(point: Point): number {

        return 0;
    }

    visitLineString(lineString: LineString): number {
        if (lineString.isEmpty()) {
            return 0;
        }
        let length = 0;
        for (let i = 1; i < lineString.getNumPoints(); i++) {
            const pt1 = lineString.getPointN(i - 1);
            const pt2 = lineString.getPointN(i);
            const dx = pt2.x() - pt1.x();
            const dy = pt2.y() - pt1.y();
            length += Math.sqrt(dx * dx + dy * dy);
        }
        this.totalLength += length;
        return length;
    }

    visitGeometryCollection(geometryCollection: GeometryCollection): number {
        let length = 0;
        for (let i = 0; i < geometryCollection.getNumGeometries(); i++) {
            const geom = geometryCollection.getGeometryN(i);
            length = length + geom.accept(this);
        }
        this.totalLength = length;
        return length;
    }
}
