import Coordinate from "./Coordinate";
import Enveloppe from "./Enveloppe";
import EnveloppeBuilder from "./EnveloppeBuilder";
import GeometryVisitor from "./GeometryVisitor";
import AbstractGeometry from "./AbstractGeometry";

export default class Point extends AbstractGeometry {
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    super();
    this.coordinate = coordinate || [];
  }

  getType(): string {
    return "Point";
  }

  isEmpty(): boolean {
    return this.coordinate === undefined || this.coordinate?.length === 0;
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.coordinate.length > 0 ? this.coordinate[0] : Number.NaN ;
  }

  y(): number {
    return this.coordinate.length >0 ? this.coordinate[1] : Number.NaN ;
  }

  clone(): Point {
   return new Point(this.coordinate);
  }



  translate(dx: number, dy: number): void {
   this.coordinate[0] += dx;
   this.coordinate[1] += dy;
  }

  accept<T>(visitor: GeometryVisitor<T>): T {
    return visitor.visitPoint(this);
  }


}
