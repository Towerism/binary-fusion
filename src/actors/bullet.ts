import { Actor, Engine, Color, Vector } from "excalibur";

export class Bullet extends Actor {
  direction = -1;
  readonly speed = new Vector(0, 750);

  constructor(x: number, y: number) {
    super(x, y);
    this.setWidth(10);
    this.setHeight(10);
    this.color = Color.Chartreuse;
    this.vel = this.speed.scale(this.direction);
  }
}
