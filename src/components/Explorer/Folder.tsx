import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import locationState from "../../atoms/locationState";
import locationHistoryState from "../../atoms/locationHistoryState";
import { Folder as FolderType } from "../../types/fileSystem";
import isEmpty from "lodash/isEmpty";
import searchState from "../../atoms/searchState";
import fileSystemState from "../../atoms/fileSystemState";
import getPath from "../../utils/getPath";

interface IFolder {
  folder: FolderType;
  index: number;
  className?: string;
}

function Folder({ className, folder, index }: IFolder) {
  const [location, setLocation] = useRecoilState(locationState);
  const setLocationHistory = useSetRecoilState(locationHistoryState);

  const [searchString, setSearchString] = useRecoilState(searchState);
  const searching = !isEmpty(searchString);
  const fileSystemRoot = useRecoilValue(fileSystemState);

  const goToLocation = () => {
    if (searching) {
      const path = getPath(fileSystemRoot, folder.reference!);
      const newLocation = {
        path: path,
        reference: folder.reference!,
      };

      setLocation(newLocation);
      setLocationHistory((lh) => [...lh, location]);
      setSearchString("");
    } else {
      setLocation((l) => ({
        path: [...l.path, folder.name],
        reference: [...l.reference, index],
      }));
      setLocationHistory((lh) => [...lh, location]);
    }
  };

  return (
    <div className={className} onDoubleClick={goToLocation}>
      <div
        className={
          "h-24 w-24 p-4 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-lg mb-2"
        }
      >
        <FolderOpenOutlinedIcon sx={{ fontSize: 64 }} />
      </div>
      <div className="flex justify-center text-sm">{folder.name}</div>
    </div>
  );
}

export default Folder;
