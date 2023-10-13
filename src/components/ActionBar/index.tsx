import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CreateNewFolderModal from "./modal/CreateNewFolderModal";
import CreateNewFileModal from "./modal/CreateNewFileModal";

interface IActionBar {
  className?: string;
}

function ActionBar({ className }: IActionBar) {
  const [createFolderModalOpen, setCreateFolderModalOpen] = useState(false);
  const [createFileModalOpen, setCreateFileModalOpen] = useState(false);

  return (
    <Stack direction="row" spacing={2} className={className}>
      <Button variant="outlined" onClick={() => setCreateFileModalOpen(true)}>
        Create new file
      </Button>
      <Button variant="outlined" onClick={() => setCreateFolderModalOpen(true)}>
        Create new folder
      </Button>
      <CreateNewFolderModal
        open={createFolderModalOpen}
        handleClose={() => setCreateFolderModalOpen(false)}
      />
      <CreateNewFileModal
        open={createFileModalOpen}
        handleClose={() => setCreateFileModalOpen(false)}
      />
    </Stack>
  );
}

export default ActionBar;
