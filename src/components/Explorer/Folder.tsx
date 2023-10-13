import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";

interface IFolder {
  className?: string;
}

function Folder({ className }: IFolder) {
  return (
    <div className={className}>
      <div
        className={
          "h-24 w-24 p-4 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-lg mb-2"
        }
      >
        <FolderOpenOutlinedIcon sx={{ fontSize: 64 }} />
      </div>
      <div className="flex justify-center text-sm">Folder 1</div>
    </div>
  );
}

export default Folder;
