import { selector } from "recoil";
import locationState from "../atoms/locationState";
import fileSystemState from "../atoms/fileSystemState";
import getCurrentFolder from "../utils/getCurrentFolder";

const currentFolderSelector = selector({
  key: "currentFolderSelector",
  get: ({ get }) => {
    const fileSystemRoot = get(fileSystemState);
    const currentLocation = get(locationState);

    return getCurrentFolder(fileSystemRoot, currentLocation);
  },
});

export default currentFolderSelector;
