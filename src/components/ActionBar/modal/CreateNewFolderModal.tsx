import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRecoilState, useRecoilValue } from "recoil";
import currentFolderSelector from "../../../selectors/currentFolderSelector";
import locationState from "../../../atoms/locationState";
import fileSystemState from "../../../atoms/fileSystemState";
import getCurrentFolder from "../../../utils/getCurrentFolder";
import { Folder } from "../../../types/fileSystem";
import isEmpty from "lodash/isEmpty";

interface ICreateNewFolderModal {
  open: boolean;
  handleClose: () => void;
}

function CreateNewFolderModal({ open, handleClose }: ICreateNewFolderModal) {
  const [filename, setFilename] = useState("");
  const [isError, setIsError] = useState(false);
  const folder: Folder = {
    name: filename,
    children: [],
  };

  const currentFolder = useRecoilValue(currentFolderSelector);
  const currentLocation = useRecoilValue(locationState);
  const [fileSystem, setFileSystem] = useRecoilState(fileSystemState);

  const addFolder = () => {
    const filenameAlreadyInUse = !isEmpty(
      currentFolder.children.filter((f) => f.name === filename)
    );

    if (filenameAlreadyInUse) {
      setIsError(true);
    } else {
      const fileSystemCopy = structuredClone(fileSystem);
      const currentFolderCopy = getCurrentFolder(
        fileSystemCopy,
        currentLocation.reference
      );
      currentFolderCopy.children = [...currentFolderCopy.children, folder];
      setFileSystem(fileSystemCopy);
      setFilename("");
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal-container">
        <div>
          <div className="pb-4 border-b-2 border-b-bg-gray-900 mb-4">
            <Typography variant="h6" fontWeight={600}>
              New folder
            </Typography>
          </div>
          <TextField
            label="Name..."
            variant="outlined"
            fullWidth
            value={filename}
            error={isError}
            onChange={(e) => {
              setFilename(e.target.value);
              setIsError(false);
            }}
          />
        </div>

        <div className="flex justify-end gap-x-4">
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={addFolder}>
            Create
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default CreateNewFolderModal;
