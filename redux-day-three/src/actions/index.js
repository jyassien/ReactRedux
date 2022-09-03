export const increment = (five = 1) => {
  return {
    type: "INCREMENT",
    payload: five,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
