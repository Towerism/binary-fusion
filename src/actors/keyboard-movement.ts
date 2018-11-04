import { Actor, Color, Engine, Input, Vector } from "excalibur";
import { Bullet } from "./bullet";

export class KeyboardMovement extends Actor {
  constructor(x: number, y: number, private speed = new Vector(250, 250)) {
    super(x, y);
  }

  public update(engine: Engine, delta: number) {
    this.vel.setTo(0, 0);
    if (engine.input.keyboard.isHeld(Input.Keys.Up)) {
      this.vel.y = -this.speed.y;
    }
    if (engine.input.keyboard.isHeld(Input.Keys.Down)) {
      this.vel.y = this.speed.y;
    }
    if (engine.input.keyboard.isHeld(Input.Keys.Left)) {
      this.vel.x = -this.speed.x;
    }
    if (engine.input.keyboard.isHeld(Input.Keys.Right)) {
      this.vel.x = this.speed.x;
    }
    super.update(engine, delta);
  }
}
