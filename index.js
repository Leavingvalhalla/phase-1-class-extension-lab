class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((total, side) => total + side, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const sortedSides = this.sides.sort();
    return sortedSides[0] + sortedSides[1] > sortedSides[2];
  }
}

class Square extends Polygon {
  get isValid() {
    for (let side of this.sides) {
      if (side != this.sides[0]) {
        return false;
      }
    }
    return true;
  }

  get area() {
    return this.sides[0] ** 2;
  }
}
