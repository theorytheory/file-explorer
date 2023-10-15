import { File, Folder } from "../types/fileSystem";

function getPath(fileSystemRoot: File | Folder, reference: Array<number>) {
  let dir = fileSystemRoot;

  const path = ["Home"];

  reference.slice(1).forEach((ref) => {
    dir = (dir as Folder).children[ref];
    path.push(dir.name);
  });
  return path;
}

export default getPath;
