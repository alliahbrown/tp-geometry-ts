import Point from "./Point";
import LineString from "./Linestring";
import GeometryCollection from "./GeometryCollection";
export default interface GeometryVisitor {
    visitPoint(point: Point): void;
    visitLineString(lineString: LineString): void;
    visitGeometryCollection(geometryCollection: GeometryCollection): void;
}