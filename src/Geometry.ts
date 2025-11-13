export default interface Geometry {
    getType(): string;
    isEmpty():boolean;
    clone(): Geometry;
    translate(dx: number, dy: number): void;
    
}