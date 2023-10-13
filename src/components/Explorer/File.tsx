import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

interface IFile {
  className?: string;
}

function File({ className }: IFile) {
  return (
    <div className={className}>
      <div
        className={
          "h-24 w-24 p-4 hover:bg-gray-100 active:bg-gray-300 rounded-lg mb-2"
        }
      >
        <InsertDriveFileOutlinedIcon sx={{ fontSize: 64 }} />
      </div>
      <div className="flex justify-center text-sm">Text File 1</div>
    </div>
  );
}

export default File;
