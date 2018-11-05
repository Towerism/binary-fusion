import { Actor, Engine, Color, Vector, CollisionType } from "excalibur";

export class Bullet extends Actor {
  direction = -1;
  readonly speed = new Vector(0, 750);

  constructor(x: number, y: number) {
    super(x, y);
    this.setWidth(10);
    this.setHeight(10);
    this.color = Color.Chartreuse;
    this.vel = this.speed.scale(this.direction);
    this.on("exitviewport", () => {
      this.kill();
    });
    this.collisionType = CollisionType.Passive;
    this.on("collisionstart", event => {
      event.other.kill();
      this.kill();
    });
  }
}
