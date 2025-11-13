import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./Linestring";

export default class WktVisitor implements GeometryVisitor {
    private buffer: string;
    getResult(): string {
        return this.buffer;
    }

}