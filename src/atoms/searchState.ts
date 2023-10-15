import { atom } from "recoil";

const searchState = atom<string>({
  key: "searchState",
  default: "",
});

export default searchState;
