import store from "../../../store/store";
import { moveTrain, resetTrain } from "../../../store/animation/action";
import { nextLevel } from "../../../store/levels/action";
import { increaseScore } from "../../../store/score/action";
import { dispatchLevelToStore } from "./levels";

export const playGame = tiles => {
  console.clear();
  const startingY = 0;
  const startingX = 0;
  let steps = 0;

  const state = store.getState();
  const arrayLength = state.levels.tiles[0].length;

  const playGameNextTile = (y, x, entry) => {
    steps = steps += 1;
    console.log("step count", steps);
    setTimeout(() => {
      console.log("------ next tile ------");
      console.log("x", x, "y", y, "entry", entry);

      // --Checks if the train is out of bounds--
      if (y >= tiles.length || y < 0) {
        console.log("Out of bounds vertical");
        store.dispatch(resetTrain(arrayLength));
        return;
      }
      if (x >= tiles[y].length || x < 0) {
        console.log("Out of bounds horizontal");
        store.dispatch(resetTrain(arrayLength));
        return;
      }
      // --Checks if the train has reached its correct destination--
      if (tiles[y][x].exit === true) {
        console.log("exit has been reached, you have completed the level!");
        setTimeout(() => {
          store.dispatch(nextLevel());
          dispatchLevelToStore(state.levels.currentLevel);
          store.dispatch(increaseScore(steps));
        }, 1000);

        return;
      }
      console.log("next tile tileId", tiles[y][x].id);
      // Entered from top
      if (entry === 0 && tiles[y][x].tileData[entry] === true) {
        console.log("entered from the Top");
        if (tiles[y][x].tileData[1] === true) {
          console.log("exited from the Right");
          const newX = x + 1;
          store.dispatch(moveTrain("right"));
          playGameNextTile(y, newX, 3);
        }
        if (tiles[y][x].tileData[2] === true) {
          console.log("exited from the Bottom");
          const newY = y + 1;
          store.dispatch(moveTrain("down"));
          playGameNextTile(newY, x, 0);
        }
        if (tiles[y][x].tileData[3] === true) {
          console.log("exited from the Left");
          const newX = x - 1;
          store.dispatch(moveTrain("left"));
          playGameNextTile(y, newX, 1);
        }
      }
      // Entered from the Right
      else if (entry === 1 && tiles[y][x].tileData[entry] === true) {
        console.log("entered from the Right");
        if (tiles[y][x].tileData[0] === true) {
          console.log("exited from the Top");
          const newY = y - 1;
          store.dispatch(moveTrain("up"));
          playGameNextTile(newY, x, 2);
        }
        if (tiles[y][x].tileData[2] === true) {
          console.log("exited from the Bottom");
          const newY = y + 1;
          store.dispatch(moveTrain("down"));
          playGameNextTile(newY, x, 0);
        }
        if (tiles[y][x].tileData[3] === true) {
          console.log("exited from the Left");
          const newX = x - 1;
          store.dispatch(moveTrain("left"));
          playGameNextTile(y, newX, 1);
        }
      }
      // Entered from the Bottom
      else if (entry === 2 && tiles[y][x].tileData[entry] === true) {
        console.log("entered from the Bottom");
        if (tiles[y][x].tileData[0] === true) {
          console.log("exited from the Top");
          const newY = y - 1;
          store.dispatch(moveTrain("up"));
          playGameNextTile(newY, x, 2);
        }
        if (tiles[y][x].tileData[1] === true) {
          console.log("exited from the Right");
          const newX = x + 1;
          store.dispatch(moveTrain("right"));
          playGameNextTile(y, newX, 3);
        }
        if (tiles[y][x].tileData[3] === true) {
          console.log("exited from the Left");
          const newX = x - 1;
          store.dispatch(moveTrain("left"));
          playGameNextTile(y, newX, 1);
        }
      }
      // Entered from the Left
      else if (entry === 3 && tiles[y][x].tileData[entry] === true) {
        console.log("entered from the Left");
        if (tiles[y][x].tileData[0] === true) {
          console.log("exited from the Top");
          const newY = y - 1;
          store.dispatch(moveTrain("up"));
          playGameNextTile(newY, x, 2);
        }
        if (tiles[y][x].tileData[1] === true) {
          console.log("exited from the Right");
          const newX = x + 1;
          store.dispatch(moveTrain("right"));
          playGameNextTile(y, newX, 3);
        }
        if (tiles[y][x].tileData[2] === true) {
          console.log("exited from the Bottom");
          const newY = y + 1;
          store.dispatch(moveTrain("down"));
          playGameNextTile(newY, x, 0);
        }
      } else {
        console.log("you have crashed!");
        store.dispatch(resetTrain(arrayLength));
      }
    }, 500);
  };

  console.log("------ playGame --------"); // initial move
  console.log("starting top left on tileId", tiles[startingX][startingY].id);

  if (tiles[startingY][startingX].tileData[0] === true) {
    console.log("You have entered from the Top");
    store.dispatch(moveTrain("down"));
    const entry = 0;
    setTimeout(() => {
      if (tiles[startingY][startingX].tileData[0] === true && entry !== 0) {
        console.log("And exited from the Top");
      }

      if (tiles[startingY][startingX].tileData[1] === true && entry !== 1) {
        console.log("And exited from the Right");
        const newX = startingX + 1;
        store.dispatch(moveTrain("right"));
        playGameNextTile(startingY, newX, 3);
      }

      if (tiles[startingY][startingX].tileData[2] === true && entry !== 2) {
        console.log("And exited from the Bottom");
        const newY = startingY + 1;
        store.dispatch(moveTrain("down"));
        playGameNextTile(newY, startingX, 0);
      }
      if (tiles[startingY][startingX].tileData[3] === true && entry !== 3) {
        console.log("And exited from the Left");
        const newX = startingX - 1;
        store.dispatch(moveTrain("left"));
        playGameNextTile(startingY, newX, 1);
      }
    }, 500);
  } else {
    console.log("You have crashed");
  }
};
