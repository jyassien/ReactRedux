import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from "./actionTypes";

let lastId = 0;

export default function reducer(state = [], action) {
  //  using switch statement.
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }

  //   Or using if statements.
  //     if (action.type === BUG_ADDED) {
  //       return [
  //         ...state,
  //         {
  //           id: ++lastId,
  //           description: action.payload.description,
  //           resolved: false,
  //         },
  //       ];
  //     } else if (action.type === BUG_REMOVED)
  //       return state.filter((bug) => bug.id !== action.payload.id);

  //     return state;
}