import Point from "./Point";

import GeometryVisitor from "./GeometryVisitor";
import AbstractGeometry from "./AbstractGeometry";

export default class LineString extends AbstractGeometry {
  private points: Point[];

  constructor(points?: Point[]) {
    super();
    this.points = points || [];
  }

  getType(): string {
    return "LineString";
  }

  isEmpty(): boolean {
    return this.points.length === undefined || this.points?.length === 0;
  }

  getNumPoints(): number {
    return this.points.length;
  }

  getPointN(n: number): Point {
    return this.points[n];
  }

  clone(): LineString {
    return new LineString(this.points);
  }


  translate(dx: number, dy: number): void {
    this.points.forEach((point) => {
      point.translate(dx, dy);
    });
  }

  accept<T>(visitor: GeometryVisitor<T>): T {
    return visitor.visitLineString(this);
  }
}
