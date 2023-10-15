import { atom } from "recoil";
import { Location } from "../types/location";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({ key: "locationState" });

const locationState = atom<Location>({
  key: "locationState",
  effects_UNSTABLE: [persistAtom],
  default: {
    path: ["Home"],
    reference: [0],
  },
});

export default locationState;
