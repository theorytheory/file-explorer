import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { useState } from "react";
import FileViewerModal from "./modal/FileViewerModal";

interface IFile {
  name: string;
  content: string;
  className?: string;
}

function File({ name, content, className }: IFile) {
  const [viewerOpen, setViewerOpen] = useState(false);

  return (
    <div className={className}>
      <div
        className={
          "h-24 w-24 p-4 hover:bg-gray-100 active:bg-gray-300 rounded-lg mb-2"
        }
        onDoubleClick={() => setViewerOpen(true)}
      >
        <InsertDriveFileOutlinedIcon sx={{ fontSize: 64 }} />
      </div>
      <div className="flex justify-center text-sm">{name}</div>
      <FileViewerModal
        open={viewerOpen}
        handleClose={() => setViewerOpen(false)}
        name={name}
        content={content}
      />
    </div>
  );
}

export default File;
