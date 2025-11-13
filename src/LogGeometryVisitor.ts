import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./Linestring";

export default class LogGeometryVisitor implements GeometryVisitor {

    visitPoint(point: Point): string {
        let logs: string = "";
        if (point.isEmpty()) {
            logs = "Je suis un point vide.";
            console.log(logs);
            return(logs[0]);
        } else {
            logs = "Je suis un point de coordonnés: (x="+point.x()+" et y="+point.y()+").";
        console.log(logs);   
        return(logs[0]);
        }       
    }


    visitLineString(lineString: LineString): string {
        let logs: string = "";
        if (lineString.isEmpty()) {
            logs = "Je suis une polyligne vide." ;
            console.log(logs);
            return(logs[0]);
        } else {
            logs = "Je suis une polyligne definie par"+ lineString.getNumPoints()+"points.";
        console.log(logs);   
        return(logs[0]);
        }       
    }

}
  

    