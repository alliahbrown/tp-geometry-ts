import AbstractGeometry from "./AbstractGeometry";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default class GeometryCollection extends AbstractGeometry {

    private geometries: Array<Geometry>;

    constructor(geometries?: Array<Geometry>) {
        super();
        this.geometries = geometries || [];
    }

    getNumGeometries(): number {
        return this.geometries.length;
    }

    getGeometryN(n: number): Geometry {
        return this.geometries[n];
    }


    getType(): string {
        return "GeometryCollection";
    }
    isEmpty(): boolean {
        return this.geometries.length === 0;
    }

    clone(): Geometry {
        const newGeometries = this.geometries.map(geom => geom.clone());
        return new GeometryCollection(newGeometries);
    }


    translate(dx: number, dy: number): void {
        this.geometries.forEach((geometry) => {
            geometry.translate(dx, dy);
        })
    }

    accept(visitor: GeometryVisitor): void{
        visitor.visitGeometryCollection(this);
    };


}