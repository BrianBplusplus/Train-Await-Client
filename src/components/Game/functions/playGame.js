export const playGame = () => {
  const tiles = this.props.levels.tiles;

  let currentTileX = 0;
  let currentTileY = 0;
  let entry = 0;
  let exit = 0;
  let finishLevel = false;

  console.log("------ playGame --------");
  console.log("starting top left on tileId", tiles[currentTileX][currentTileY].id);

  if (tiles[currentTileX][currentTileY].tileData[0] === true) {
    console.log("You have entered from the Top");
    entry = 0;

    if (tiles[currentTileX][currentTileY].tileData[0] === true && entry !== 0) {
      console.log("And exited from the Top");
      // currentTileY += 1;
    }

    if (tiles[currentTileX][currentTileY].tileData[1] === true && entry !== 1) {
      console.log("And exited from the Right");
      const nextTileX = currentTileX + 1;

      //playGameNextTile(nextTileX, currentTileY, 0, 0);
      //currentTileX += 1;
    }

    if (tiles[currentTileX][currentTileY].tileData[2] === true && entry !== 2) {
      console.log("And exited from the Bottom");
      //currentTileY -= 1;
    }
    if (tiles[currentTileX][currentTileY].tileData[3] === true && entry !== 3) {
      console.log("And exited from the Left");
      //currentTileX -= 1;
    }
  } else {
    console.log("You have crashed");
  }
};
