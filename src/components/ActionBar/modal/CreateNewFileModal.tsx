import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Typography from "@mui/material/Typography";
import currentFolderSelector from "../../../selectors/currentFolderSelector";
import { useRecoilState, useRecoilValue } from "recoil";
import fileSystemState from "../../../atoms/fileSystemState";
import { File } from "../../../types/fileSystem";
import getCurrentFolder from "../../../utils/getCurrentFolder";
import locationState from "../../../atoms/locationState";
import isEmpty from "lodash/isEmpty";

interface ICreateNewFileModal {
  open: boolean;
  handleClose: () => void;
}

function CreateNewFileModal({ open, handleClose }: ICreateNewFileModal) {
  const [filename, setFilename] = useState("");
  const [content, setContent] = useState("");
  const file: File = {
    name: filename,
    content,
  };
  const [isError, setIsError] = useState(false);

  const currentFolder = useRecoilValue(currentFolderSelector);
  const currentLocation = useRecoilValue(locationState);
  const [fileSystem, setFileSystem] = useRecoilState(fileSystemState);

  const addFile = () => {
    const filenameAlreadyInUse = !isEmpty(
      currentFolder.children.filter((f) => f.name === filename)
    );

    if (filenameAlreadyInUse) {
      setIsError(true);
    } else {
      const fileSystemCopy = structuredClone(fileSystem);
      const currentFolderCopy = getCurrentFolder(
        fileSystemCopy,
        currentLocation
      );
      currentFolderCopy.children = [...currentFolderCopy.children, file];
      setFileSystem(fileSystemCopy);
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal-container">
        <div>
          <div className="pb-4 border-b-2 border-b-bg-gray-900 mb-4">
            <Typography variant="h6" fontWeight={600}>
              New file
            </Typography>
          </div>
          <div className="mb-4">
            <TextField
              className="mb-4"
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
          <TextareaAutosize
            className="p-3 border-2 border-bg-gray-800 resize-none w-full"
            minRows={3}
            maxRows={4}
            placeholder="File content goes here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-x-4">
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={addFile}>
            Create
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default CreateNewFileModal;
