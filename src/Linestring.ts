import Point from "./Point";

export default class LineString {
  private points: Point[];  

    constructor(points?: Point[]) {
        this.points = points;
    }

    LineString(): Point[] {
        return this.points;
     }
     
     getType(): string { 
      return "LineString";
     }

     getNumPoints(): number {
        return this.points ? this.points.length : 0 ;
     }

        getPointN(n: number): Point {
        return this.points[n];
        }

    }
