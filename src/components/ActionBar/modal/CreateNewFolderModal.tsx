import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

interface ICreateNewFolderModal {
  open: boolean;
  handleClose: () => void;
}

function CreateNewFolderModal({ open, handleClose }: ICreateNewFolderModal) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="flex flex-col justify-between absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[480px] min-h-[280px] max-h-[360px] px-5 py-4 h-full">
        <div>
          <div className="pb-4 border-b-2 border-b-bg-gray-900 mb-4">
            <Typography variant="h6" fontWeight={600}>
              New folder
            </Typography>
          </div>
          <TextField label="Name..." variant="outlined" fullWidth />
        </div>

        <div className="flex justify-end gap-x-4">
          <Button variant="outlined" onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button variant="contained">Create</Button>
        </div>
      </Box>
    </Modal>
  );
}

export default CreateNewFolderModal;
