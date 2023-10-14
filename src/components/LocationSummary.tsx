import classNames from "classnames";
import { useRecoilValue } from "recoil";
import currentFolderSummarySelector from "../selectors/currentFolderSummarySelector";

interface ILocationSummary {
  className?: string;
}

function LocationSummary({ className }: ILocationSummary) {
  const { fileCounter, folderCounter } = useRecoilValue(
    currentFolderSummarySelector
  );

  return (
    <div className={classNames("flex justify-end", className)}>
      <p>
        Total: {fileCounter} file{fileCounter > 1 ? "s" : ""} and{" "}
        {folderCounter} folder{folderCounter > 1 ? "s" : ""}
      </p>
    </div>
  );
}

export default LocationSummary;
