import { Actor, Color, Engine, Input, Vector } from "excalibur";
import { Bullet } from "./bullet";

export class KeyboardShooter extends Actor {
  public update(engine: Engine, delta: number) {
    if (engine.input.keyboard.wasPressed(Input.Keys.Z)) {
      const pos = this.getWorldPos();
      const bullet = new Bullet(pos.x, pos.y);
      engine.add(bullet);
    }
  }
}
