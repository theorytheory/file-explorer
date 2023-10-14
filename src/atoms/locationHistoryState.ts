import { atom } from "recoil";
import { Location } from "../types/location";

const locationHistoryState = atom<Array<Location>>({
  key: "locationHistoryState",
  default: [],
});

export default locationHistoryState;
