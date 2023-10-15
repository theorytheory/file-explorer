import { selector } from "recoil";
import locationState from "../atoms/locationState";
import fileSystemState from "../atoms/fileSystemState";
import getCurrentFolder from "../utils/getCurrentFolder";
import isEmpty from "lodash/isEmpty";
import { isAFile, isAFolder } from "../types/fileSystem";

const currentFolderSummarySelector = selector({
  key: "currentFolderSummarySelector",
  get: ({ get }) => {
    const fileSystemRoot = get(fileSystemState);
    const currentLocation = get(locationState);

    const currentFolder = getCurrentFolder(
      fileSystemRoot,
      currentLocation.reference
    );
    let fileCounter = 0;
    let folderCounter = 0;
    const stack = [...currentFolder.children];
    while (!isEmpty(stack)) {
      const top = stack.pop()!;
      if (isAFile(top)) {
        fileCounter += 1;
      }
      if (isAFolder(top)) {
        folderCounter += 1;
        stack.push(...top.children);
      }
    }

    return {
      fileCounter,
      folderCounter,
    };
  },
});

export default currentFolderSummarySelector;
