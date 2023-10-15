import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Folder } from "../types/fileSystem";

const { persistAtom } = recoilPersist({ key: "fileSystemState" });

const fileSystemState = atom<Folder>({
  key: "fileSystemState",
  effects_UNSTABLE: [persistAtom],
  default: {
    name: "Home",
    children: [
      {
        name: "Folder X",
        children: [
          {
            name: "Folder Y",
            children: [
              {
                name: "Folder 1",
                children: [],
              },
              {
                name: "Folder 2",
                children: [],
              },
              {
                name: "Text File 1",
                content: "eeee",
              },
            ],
          },
        ],
      },
    ],
  },
});

export default fileSystemState;
