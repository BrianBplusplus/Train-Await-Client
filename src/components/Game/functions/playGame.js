export const playGame = tiles => {
  let currentTileY = 0;
  let currentTileX = 0;
  let entry = 0;
  let exit = 0;
  let finishLevel = false;

  const playGameNextTile = (y, x, entry) => {
    console.log("------ next tile ------");
    console.log("x", x, "y", y, "entry", entry);
    console.log("next tile tileId", tiles[y][x].id);
    if (entry === 0) {
      console.log("entered from the Top");
    } else if (entry === 1) {
      console.log("entered from the Right");
    } else if (entry === 2) {
      console.log("entered from the Bottom");
    } else if (entry === 3 && tiles[y][x].tileData[entry] === true) {
      console.log("entered from the Left");
    } else {
      console.log("you have crashed!");
    }
  };

  console.log("------ playGame --------");
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
