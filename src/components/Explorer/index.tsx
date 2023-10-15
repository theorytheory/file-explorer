import classNames from "classnames";
import { useRecoilValue } from "recoil";

import File from "./File";
import Folder from "./Folder";
import currentFolderSelector from "../../selectors/currentFolderSelector";
import { isAFile, isAFolder } from "../../types/fileSystem";
import searchState from "../../atoms/searchState";
import isEmpty from "lodash/isEmpty";
import searchSelector from "../../selectors/searchSelector";
import locationState from "../../atoms/locationState";

interface IExplorer {
  className?: string | undefined;
}

function Explorer({ className }: IExplorer) {
  const searching = !isEmpty(useRecoilValue(searchState));
  const currentFolder = useRecoilValue(currentFolderSelector);
  const foundFoldersAndFiles = useRecoilValue(searchSelector);

  const displayFoldersAndFiles = searching
    ? foundFoldersAndFiles
    : currentFolder.children;

  return (
    <div
      className={classNames(
        "flex flex-row flex-wrap gap-4 border-solid border-2 border-gray-300 px-3 py-5 min-h-[168px] max-h-[300px] overflow-scroll",
        className
      )}
    >
      {displayFoldersAndFiles.map((f, i) => {
        if (isAFolder(f)) {
          return <Folder key={`folder-${f.name}`} folder={f} index={i} />;
        }
        return null;
      })}
      {displayFoldersAndFiles.map((f) => {
        if (isAFile(f)) {
          return (
            <File key={`file-${f.name}`} name={f.name} content={f.content} />
          );
        }
        return null;
      })}
    </div>
  );
}

export default Explorer;
