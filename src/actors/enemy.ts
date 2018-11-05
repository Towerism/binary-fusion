import { Actor, Color, Engine, Input, Vector, CollisionType } from "excalibur";
import { Bullet } from "./bullet";

export class Enemy extends Actor {
  constructor(x: number, y: number) {
    super(x, y);
    this.setWidth(40);
    this.setHeight(40);
    this.color = Color.Red;
    this.collisionType = CollisionType.Active;
  }
}
