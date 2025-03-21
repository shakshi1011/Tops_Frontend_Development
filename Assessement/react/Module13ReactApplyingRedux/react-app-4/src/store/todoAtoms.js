import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoCountState = selector({
  key: "todoCountState",
  get: ({ get }) => {
    return get(todoListState).length;
  },
});
