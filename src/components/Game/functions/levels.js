import React, { Component } from "react";
import store from "../../../store/store";

import { startLevel } from "../../../store/levels/action";
import { resetTrain } from "../../../store/animation/action";

const level1 = [
  [
    <Component shape={"L"} id={1} tileData={[true, true, null, null]} rotation={270} />,
    <Component shape={"I"} id={2} tileData={[true, null, true, null]} rotation={0} />,
    <Component shape={"L"} id={3} tileData={[null, null, true, true]} rotation={90} />
  ],
  [
    <Component shape={"L"} id={4} tileData={[null, true, true, null]} rotation={0} />,
    <Component shape={"I"} id={5} tileData={[true, null, true, null]} rotation={180} />,
    <Component shape={"L"} id={6} tileData={[true, true, null, null]} rotation={270} />
  ],
  [
    <Component shape={"L"} id={7} tileData={[true, null, null, true]} rotation={180} />,
    <Component shape={"I"} id={8} tileData={[null, true, null, true]} rotation={270} />,
    <Component shape={"EXIT"} id={9} tileData={[true, null, null, true]} exit={true} />
  ]
];

const level2 = [
  [
    <Component shape={"L"} id={1} tileData={[true, true, null, null]} rotation={270} />,
    <Component shape={"I"} id={2} tileData={[true, null, true, null]} rotation={0} />,
    <Component shape={"L"} id={3} tileData={[null, true, true, null]} rotation={0} />
  ],
  [
    <Component shape={"I"} id={4} tileData={[null, true, null, true]} rotation={90} />,
    <Component shape={"L"} id={5} tileData={[true, null, null, true]} rotation={180} />,
    <Component shape={"L"} id={6} tileData={[true, null, null, true]} rotation={180} />
  ],
  [
    <Component shape={"I"} id={7} tileData={[true, null, true, null]} rotation={0} />,
    <Component shape={"L"} id={8} tileData={[null, true, true, null]} rotation={0} />,
    <Component shape={"EXIT"} id={9} tileData={[true, null, null, true]} exit={true} />
  ]
];

const level3 = [
  [
    <Component shape={"L"} id={1} tileData={[true, true, null, null]} rotation={270} />,
    <Component shape={"L"} id={2} tileData={[null, null, true, true]} rotation={90} />,
    <Component shape={"I"} id={3} tileData={[null, true, null, true]} rotation={270} />,
    <Component shape={"L"} id={4} tileData={[null, null, true, true]} rotation={90} />
  ],
  [
    <Component shape={"L"} id={5} tileData={[true, true, null, null]} rotation={270} />,
    <Component shape={"I"} id={6} tileData={[null, true, null, true]} rotation={90} />,
    <Component shape={"L"} id={7} tileData={[true, true, null, null]} rotation={270} />,
    <Component shape={"I"} id={8} tileData={[null, true, null, true]} rotation={90} />
  ],
  [
    <Component shape={"L"} id={9} tileData={[true, true, null, null]} rotation={270} />,
    <Component shape={"L"} id={10} tileData={[true, true, null, null]} rotation={270} />,
    <Component shape={"I"} id={11} tileData={[null, true, null, true]} rotation={270} />,
    <Component shape={"L"} id={12} tileData={[true, true, null, null]} rotation={270} />
  ],
  [
    <Component shape={"I"} id={13} tileData={[null, true, null, true]} rotation={270} />,
    <Component shape={"I"} id={14} tileData={[null, true, null, true]} rotation={270} />,
    <Component shape={"I"} id={15} tileData={[true, null, true, null]} rotation={0} />,
    <Component shape={"EXIT"} id={16} tileData={[true, null, null, true]} rotation={0} exit={true} />
  ]
];

const level4 = [
  [
    <Component shape={"L"} id={1} tileData={[true, true, null, null]} rotation={270} />,
    <Component shape={"L"} id={2} tileData={[null, true, true, null]} rotation={0} />,
    <Component shape={"L"} id={3} tileData={[null, null, true, true]} rotation={90} />,
    <Component shape={"L"} id={4} tileData={[true, true, null, null]} rotation={270} />
  ],
  [
    <Component shape={"L"} id={5} tileData={[null, true, true, null]} rotation={0} />,
    <Component shape={"L"} id={6} tileData={[true, true, null, null]} rotation={270} />,
    <Component shape={"I"} id={7} tileData={[true, null, true, null]} rotation={180} />,
    <Component shape={"I"} id={8} tileData={[null, true, null, true]} rotation={90} />
  ],
  [
    <Component shape={"L"} id={9} tileData={[true, null, null, true]} rotation={180} />,
    <Component shape={"I"} id={10} tileData={[null, true, null, true]} rotation={270} />,
    <Component shape={"L"} id={11} tileData={[true, true, null, null]} rotation={270} />,
    <Component shape={"I"} id={12} tileData={[null, true, null, true]} rotation={270} />
  ],
  [
    <Component shape={"L"} id={13} tileData={[null, true, true, null]} rotation={0} />,
    <Component shape={"I"} id={14} tileData={[null, true, null, true]} rotation={270} />,
    <Component shape={"L"} id={15} tileData={[true, null, null, true]} rotation={180} />,
    <Component shape={"EXIT"} id={16} tileData={[true, null, null, true]} rotation={0} exit={true} />
  ]
];

const level5 = [
  [
    <Component shape={"L"} id={1} tileData={[true, true, null, null]} rotation={270} />,
    <Component shape={"L"} id={2} tileData={[null, true, true, null]} rotation={0} />,
    <Component shape={"L"} id={3} tileData={[null, null, true, true]} rotation={90} />,
    <Component shape={"EXIT"} id={4} tileData={[true, null, null, true]} rotation={0} exit={true} />
  ],
  [
    <Component shape={"L"} id={5} tileData={[null, true, true, null]} rotation={0} />,
    <Component shape={"L"} id={6} tileData={[true, true, null, null]} rotation={270} />,
    <Component shape={"L"} id={7} tileData={[true, null, null, true]} rotation={180} />,
    <Component shape={"L"} id={8} tileData={[null, null, true, true]} rotation={90} />
  ],
  [
    <Component shape={"I"} id={9} tileData={[null, true, null, true]} rotation={270} />,
    <Component shape={"L"} id={10} tileData={[true, true, null, null]} rotation={270} />,
    <Component shape={"L"} id={11} tileData={[true, true, null, null]} rotation={270} />,
    <Component shape={"I"} id={12} tileData={[null, true, null, true]} rotation={270} />
  ],
  [
    <Component shape={"L"} id={13} tileData={[null, true, true, null]} rotation={0} />,
    <Component shape={"L"} id={14} tileData={[true, true, null, null]} rotation={270} />,
    <Component shape={"L"} id={15} tileData={[true, null, null, true]} rotation={180} />,
    <Component shape={"L"} id={16} tileData={[true, null, null, true]} rotation={180} />
  ]
];

export const dispatchLevelToStore = () => {
  const state = store.getState();
  const { currentLevel, rendered } = state.levels;

  if (currentLevel === 0 && !rendered) {
    store.dispatch(startLevel(level1));
    store.dispatch(resetTrain(level1[0].length));
  }

  if (currentLevel === 1 && !rendered) {
    store.dispatch(startLevel(level2));
    store.dispatch(resetTrain(level2[0].length));
  }

  if (currentLevel === 2 && !rendered) {
    store.dispatch(startLevel(level3));
    store.dispatch(resetTrain(level3[0].length));
  }

  if (currentLevel === 3 && !rendered) {
    store.dispatch(startLevel(level4));
    store.dispatch(resetTrain(level4[0].length));
  }

  if (currentLevel === 4 && !rendered) {
    store.dispatch(startLevel(level5));
    store.dispatch(resetTrain(level5[0].length));
  }
};
