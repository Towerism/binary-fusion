import { Actor, Color, Engine, Input, Vector } from "excalibur";

export class Player extends Actor {
  static readonly speed: Vector = new Vector(5, 5);

  constructor(x: number, y: number) {
    super(x, y);
    this.setWidth(40);
    this.setHeight(40);
    this.color = Color.Chartreuse;
  }

  public update(engine: Engine, delta: number) {
    this.vel.setTo(0, 0);
    if (engine.input.keyboard.isHeld(Input.Keys.Up)) {
      this.vel.y = -Player.speed.y;
    }
    if (engine.input.keyboard.isHeld(Input.Keys.Down)) {
      this.vel.y = Player.speed.y;
    }
    if (engine.input.keyboard.isHeld(Input.Keys.Left)) {
      this.vel.x = -Player.speed.x;
    }
    if (engine.input.keyboard.isHeld(Input.Keys.Right)) {
      this.vel.x = Player.speed.x;
    }
    this.pos.addEqual(this.vel);
  }
}
