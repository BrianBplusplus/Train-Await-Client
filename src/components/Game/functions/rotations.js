export const rotateTileData = ([up, right, down, left]) => {
  return [left, up, right, down];
};

export const rotateTileImage = tileRotation => {
  return (tileRotation += 90);
};
