import Geometrty from "./Geometry";
import Point from "./Point";
import LineString from "./Linestring";

export default class WktWriter {
    write(geometry: Geometrty): string {

    if ( geometry instanceof Point ){
        if (geometry.isEmpty()){
            return "POINT EMPTY" ;
        }   
        else{return "POINT("+geometry.x() + " " + geometry.y()+")" ;}
        
    }else if ( geometry instanceof LineString ){
            if (geometry.isEmpty()){      
        return "LINESTRING EMPTY" ;

    }   else{
        return "LINESTRING("+
        Array.from({length: geometry.getNumPoints()}, (_, i) => {
            const pt = geometry.getPointN(i);
            return pt.x() + " " + pt.y();
        }).join(",")+")" ;}
    }else{
        throw new TypeError("geometry type not supported");
    }
    }

}