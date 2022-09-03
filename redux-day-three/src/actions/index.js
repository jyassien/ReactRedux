export const increment = (five = 1) => {
  return {
    type: "INCREMENT",
    payload: five,
  };
};
export const decrement = (five = 1) => {
  return {
    type: "DECREMENT",
    payload: five,
  };
};
