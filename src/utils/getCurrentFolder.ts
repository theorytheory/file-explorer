import { File, Folder } from "../types/fileSystem";
import { Location } from "../types/location";

function getCurrentFolder(
  fileSystemRoot: File | Folder,
  currentLocation: Location
) {
  const { reference } = currentLocation;
  let dir = fileSystemRoot;

  reference.slice(1).forEach((ref) => {
    dir = (dir as Folder).children[ref];
  });
  return dir as Folder;
}

export default getCurrentFolder;
