import classNames from "classnames";
import { useRecoilValue } from "recoil";

import File from "./File";
import Folder from "./Folder";
import currentFolderSelector from "../../selectors/currentFolderSelector";
import { isAFile, isAFolder } from "../../types/fileSystem";

interface IExplorer {
  className?: string | undefined;
}

function Explorer({ className }: IExplorer) {
  const currentFolder = useRecoilValue(currentFolderSelector);

  return (
    <div
      className={classNames(
        "flex flex-row flex-wrap gap-4 border-solid border-2 border-gray-300 px-3 py-5 min-h-[144px] max-h-[300px] overflow-scroll",
        className
      )}
    >
      {currentFolder.children.map((f, i) => {
        if (isAFolder(f)) {
          return <Folder name={f.name} index={i} />;
        }
        return null;
      })}
      {currentFolder.children.map((f, i) => {
        if (isAFile(f)) {
          return <File name={f.name} content={f.content} />;
        }
        return null;
      })}
    </div>
  );
}

export default Explorer;
