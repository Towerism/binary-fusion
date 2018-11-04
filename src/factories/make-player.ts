import { Player } from "../actors/player";
import { KeyboardShooter } from "../actors/keyboard-shooter";
import { KeyboardMovement } from "../actors/keyboard-movement";

export function makePlayer(x: number, y: number) {
  const player = new KeyboardMovement(x, y);
  player.add(new Player());
  player.add(new KeyboardShooter());
  return player;
}
