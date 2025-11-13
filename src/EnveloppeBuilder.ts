import Coordinate from "./Coordinate";
import Enveloppe from "./Enveloppe";

export default class EnveloppeBuilder {

private xVals : Array<number>;
private yVals : Array<number>;

constructor() {
    this.xVals = new Array<number>();
    this.yVals = new Array<number>();
}

insert (coordinate: Coordinate) : void {
    this.xVals.push(coordinate[0]);
    this.yVals.push(coordinate[1]);
}

build() : Enveloppe {

    const maxX = Math.max.apply(null, this.xVals);
    const minX = Math.min.apply(null, this.xVals);
    const minY = Math.min.apply(null, this.yVals);
    const maxY = Math.max.apply(null, this.yVals);

    return(new Enveloppe([minX,minY], [maxX,maxY]))
    
}
}