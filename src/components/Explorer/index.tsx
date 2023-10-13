import classNames from "classnames";

import File from "./File";
import Folder from "./Folder";

interface IExplorer {
  className?: string | undefined;
}

function Explorer({ className }: IExplorer) {
  return (
    <div
      className={classNames(
        "flex flex-row flex-wrap gap-4 border-solid border-2 border-gray-300 px-3 py-5 min-h-[144px] max-h-[300px] overflow-scroll",
        className
      )}
    >
      <Folder />
      <File />
      <File />
    </div>
  );
}

export default Explorer;
