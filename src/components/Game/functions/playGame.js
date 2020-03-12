export const playGame = tiles => {
  console.clear();
  let currentTileY = 0;
  let currentTileX = 0;
  let entry = 0;
  let exit = 0;
  let finishLevel = false;

  const playGameNextTile = (y, x, entry) => {
    if (!finishLevel) {
      console.log("------ next tile ------");
      console.log("x", x, "y", y, "entry", entry);

      // --Checks if the train is out of bounds--
      if (y >= tiles.length || y < 0) {
        console.log("Out of bounds vertical");
        return;
      }
      if (x >= tiles[y].length || x < 0) {
        console.log("Out of bounds horizontal");
        return;
      }
      // --Checks if the train has reached its correct destination
      if (tiles[y][x].exit === true) {
        console.log("exit has been reached, you have completed the level!");
        return;
      }

      console.log("next tile tileId", tiles[y][x].id);
      // Entered from top
      if (entry === 0 && tiles[y][x].tileData[entry] === true) {
        console.log("entered from the Top");
        if (tiles[y][x].tileData[1] === true) {
          console.log("exited from the Right");
          const newX = x + 1;
          playGameNextTile(y, newX, 3);
        }
        if (tiles[y][x].tileData[2] === true) {
          console.log("exited from the Bottom");
          const newY = y + 1;
          playGameNextTile(newY, x, 0);
        }
        if (tiles[y][x].tileData[3] === true) {
          console.log("exited from the Left");
          const newX = x - 1;
          playGameNextTile(y, newX, 1);
        }
      }
      // Entered from the Right
      else if (entry === 1 && tiles[y][x].tileData[entry] === true) {
        console.log("entered from the Right");
        if (tiles[y][x].tileData[0] === true) {
          console.log("exited from the Top");
          const newY = y - 1;
          playGameNextTile(newY, x, 2);
        }
        if (tiles[y][x].tileData[2] === true) {
          console.log("exited from the Bottom");
          const newY = y + 1;
          playGameNextTile(newY, x, 0);
        }
        if (tiles[y][x].tileData[3] === true) {
          console.log("exited from the Left");
          const newX = x - 1;
          playGameNextTile(y, newX, 1);
        }
      }
      // Entered from the Bottom
      else if (entry === 2 && tiles[y][x].tileData[entry] === true) {
        console.log("entered from the Bottom");
        if (tiles[y][x].tileData[0] === true) {
          console.log("exited from the Top");
          const newY = y - 1;
          playGameNextTile(newY, x, 2);
        }
        if (tiles[y][x].tileData[1] === true) {
          console.log("exited from the Right");
          const newX = x + 1;
          playGameNextTile(y, newX, 3);
        }
        if (tiles[y][x].tileData[3] === true) {
          console.log("exited from the Left");
          const newX = x - 1;
          playGameNextTile(y, newX, 1);
        }
      }
      // Entered from the Left
      else if (entry === 3 && tiles[y][x].tileData[entry] === true) {
        console.log("entered from the Left");
        if (tiles[y][x].tileData[0] === true) {
          console.log("exited from the Top");
          const newY = y - 1;
          playGameNextTile(newY, x, 2);
        }
        if (tiles[y][x].tileData[1] === true) {
          console.log("exited from the Right");
          const newX = x + 1;
          playGameNextTile(y, newX, 3);
        }
        if (tiles[y][x].tileData[2] === true) {
          console.log("exited from the Bottom");
          const newY = y + 1;
          playGameNextTile(newY, x, 0);
        }
      } else {
        console.log("you have crashed!");
      }
    } else {
      console.log("You have finished the level!");
    }
  };

  console.log("------ playGame --------"); // initial move
  console.log("starting top left on tileId", tiles[currentTileX][currentTileY].id);

  if (tiles[currentTileY][currentTileX].tileData[0] === true) {
    console.log("You have entered from the Top");
    entry = 0;

    if (tiles[currentTileY][currentTileX].tileData[0] === true && entry !== 0) {
      console.log("And exited from the Top");
    }

    if (tiles[currentTileY][currentTileX].tileData[1] === true && entry !== 1) {
      console.log("And exited from the Right");
      const nextTileY = currentTileY;
      const nextTileX = currentTileX + 1;
      const nextEntry = 3;

      playGameNextTile(nextTileY, nextTileX, nextEntry);
    }

    if (tiles[currentTileY][currentTileX].tileData[2] === true && entry !== 2) {
      console.log("And exited from the Bottom");
    }
    if (tiles[currentTileY][currentTileX].tileData[3] === true && entry !== 3) {
      console.log("And exited from the Left");
    }
  } else {
    console.log("You have crashed");
  }
};
