import Point from "./Point";

export default class LineString {
  private points: Point[];  

    constructor(points?: Point[]) {
        this.points = points || [] ;
    }

     getType(): string { 
      return "LineString";
     }

     isEmpty(): boolean {
       return this.points.length === undefined || this.points?.length === 0;
     }

     getNumPoints(): number {
        return this.points.length ;
     }

        getPointN(n: number): Point {
        return this.points[n];
        }

    }
