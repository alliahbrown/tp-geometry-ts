import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./Linestring";
import GeometryCollection from "./GeometryCollection";

export default class WktVisitor implements GeometryVisitor<void> {
    private buffer: string;
    getResult(): string {
        return this.buffer;
    }

    visitPoint(point: Point): void {
        if (point.isEmpty()) {
            this.buffer = "POINT EMPTY";
        } else {
            this.buffer = `POINT(${point.x()} ${point.y()})`;
        }
    }

    visitLineString(lineString: LineString): void {
        if (lineString.isEmpty()) {
            this.buffer = "LINESTRING EMPTY";
        } else {
            const coords: string[] = [];
            for (let i = 0; i < lineString.getNumPoints(); i++) {
                const pt = lineString.getPointN(i);
                coords.push(`${pt.x()} ${pt.y()}`);
            }
            this.buffer = `LINESTRING(${coords.join(",")})`;
        }
    }

    visitGeometryCollection(geometryCollection: GeometryCollection): void {

        if (geometryCollection.isEmpty()) {
            this.buffer = "GEOMETRYCOLLECTION EMPTY";
        } else {
            const geoms: string[] = [];
            for (let i = 0; i < geometryCollection.getNumGeometries(); i++) {
                const geom = geometryCollection.getGeometryN(i);
                const wktVisitor = new WktVisitor();
                geom.accept(wktVisitor);
                geoms.push(wktVisitor.getResult());
            }
            this.buffer = `GEOMETRYCOLLECTION(${geoms.join(",")})`;
        }
    }
}   