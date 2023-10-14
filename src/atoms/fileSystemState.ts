import { atom } from "recoil";
import { File, Folder } from "../types/fileSystem";

const fileSystemState = atom<File | Folder>({
  key: "fileSystemState",
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
                content: "pppp",
              },
            ],
          },
        ],
      },
    ],
  },
});

export default fileSystemState;
