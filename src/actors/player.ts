import { Actor, Color, Engine, Input, Vector, CollisionType } from "excalibur";
import { Bullet } from "./bullet";

export class Player extends Actor {
  constructor() {
    super();
    this.setWidth(40);
    this.setHeight(40);
    this.color = Color.Chartreuse;
    this.collisionType = CollisionType.Active;
  }
}
