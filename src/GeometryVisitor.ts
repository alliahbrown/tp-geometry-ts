import Point from "./Point";
import LineString from "./Linestring";
import GeometryCollection from "./GeometryCollection";

export default interface GeometryVisitor<T> {
    visitPoint(point: Point): T;
    visitLineString(lineString: LineString): T;
    visitGeometryCollection(geometryCollection: GeometryCollection): T;
}