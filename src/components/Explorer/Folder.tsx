import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import { useRecoilState, useSetRecoilState } from "recoil";
import locationState from "../../atoms/locationState";
import locationHistoryState from "../../atoms/locationHistoryState";

interface IFolder {
  name: string;
  index: number;
  className?: string;
}

function Folder({ className, name, index }: IFolder) {
  const [location, setLocation] = useRecoilState(locationState);
  const setLocationHistory = useSetRecoilState(locationHistoryState);

  const goToLocation = () => {
    setLocation((l) => ({
      path: [...l.path, name],
      reference: [...l.reference, index],
    }));
    setLocationHistory((lh) => [...lh, location]);
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
      <div className="flex justify-center text-sm">{name}</div>
    </div>
  );
}

export default Folder;
