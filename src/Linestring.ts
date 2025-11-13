import Point from "./Point";
import Geometry from "./Geometry";
import Enveloppe from "./Enveloppe";
import EnveloppeBuilder from "./EnveloppeBuilder";

export default class LineString implements Geometry {
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

    clone(): LineString {
      return new LineString(this.points);
    }

getEnvelope(): Enveloppe {
    const builder = new EnveloppeBuilder();
    this.points.forEach((point) => {
      builder.insert(point.getCoordinate());
    });
    return(builder.build());
    }

    translate(dx: number, dy: number): void {
      this.points.forEach((point) => {
        point.translate(dx, dy);
      }); 
    }

    }
