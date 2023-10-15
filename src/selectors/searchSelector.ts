import { selector } from "recoil";
import fileSystemState from "../atoms/fileSystemState";
import searchState from "../atoms/searchState";
import { isEmpty } from "lodash";
import { File, Folder, isAFile, isAFolder } from "../types/fileSystem";

const searchSelector = selector({
  key: "searchSelector",
  get: ({ get }) => {
    const fileSystemRoot = get(fileSystemState);
    const searchString = get(searchState);

    const found: Array<File | Folder> = [];

    const queue = fileSystemRoot.children.map((f, i) => ({
      ...f,
      reference: [0, i],
    }));

    while (!isEmpty(queue)) {
      const first = queue.shift()!;
      if (isAFile(first)) {
        if (
          first.name.includes(searchString) ||
          first.content.includes(searchString)
        ) {
          found.push(first);
        }
      }
      if (isAFolder(first)) {
        if (first.name.includes(searchString)) {
          found.push(first);
        }
        queue.push(
          ...first.children.map((f, i) => ({
            ...f,
            reference: [...first.reference, i],
          }))
        );
      }
    }
    // console.log("found", found);

    return found;
  },
});

export default searchSelector;
