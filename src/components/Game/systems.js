const MoveBox = (entities, { input }) => {
  //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
  //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  //-- That said, it's probably worth considering performance implications in either case.

  const { payload } = input.find(x => x.name === "onClick") || {};

  if (payload) {
    if (payload.target.className === "up") {
      payload.target.className = "right";
    } else if (payload.target.className === "right") {
      payload.target.className = "down";
    } else if (payload.target.className === "down") {
      payload.target.className = "left";
    } else if (payload.target.className === "left") {
      payload.target.className = "up";
    }
  }

  return entities;
};

const RotateBox = (entities, { input }) => {
  const { payload } = input.find(x => x.name === "onClick") || {};

  if (payload) {
    const box2 = entities["box2"];

    box2.x = payload.pageX;
    box2.y = payload.pageY;
  }
};

export { MoveBox, RotateBox };
