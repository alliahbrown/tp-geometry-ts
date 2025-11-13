import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./Linestring";

export default class WktVisitor implements GeometryVisitor {
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


}   