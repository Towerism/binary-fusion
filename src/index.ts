import { Engine, Actor, Color, CollisionType, Loader } from "excalibur";
import { makePlayer } from "./factories/make-player";
const game = new Engine({
  width: 800,
  height: 600
});

const hmr = module["hot"];
if (hmr) {
  hmr.accept(function() {
    location.reload();
  });
}

const player = makePlayer(150, game.drawHeight - 40);
game.add(player);

game.start();
