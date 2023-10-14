import { atom } from "recoil";
import { Location } from "../types/location";

const locationState = atom<Location>({
  key: "locationState",
  default: {
    path: ["Home"],
    reference: [0],
  },
});

export default locationState;
