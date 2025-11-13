import Coordinate from "./Coordinate";
import Geometry from "./Geometry";

export default class Point implements Geometry {
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
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

  clone(): Geometry {
   return new Point(this.coordinate);
  }


  translate(dx: number, dy: number): void {
   this.coordinate[0] += dx;
   this.coordinate[1] += dy;
  }

}
