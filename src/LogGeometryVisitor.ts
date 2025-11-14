import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./Linestring";
import GeometryCollection from "./GeometryCollection";

export default class LogGeometryVisitor implements GeometryVisitor<void> {

    constructor(private log = console.log) {

    }

    visitPoint(point: Point): void {
        if (point.isEmpty()) {
            this.log("Je suis un point vide.");
            
        } else {
            this.log("Je suis un point de coordonnés: (x="+point.x()+" et y="+point.y()+")");
        }       
    }


    visitLineString(lineString: LineString): void {
        if (lineString.isEmpty()) {
            this.log("Je suis une polyligne vide.");
        } else {
            this.log("Je suis une polyligne definie par "+ lineString.getNumPoints()+" points");
        }       
    }

    visitGeometryCollection(geometryCollection: GeometryCollection): void {
        if (geometryCollection.isEmpty()) {
            this.log("Je suis une collection de géométries vide.");
        } else {
            this.log("Je suis une collection de géométries contenant "+ geometryCollection.getNumGeometries()+" géométries.");
        }           
    }

}
  

    