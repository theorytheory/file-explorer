import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

interface IFileViewerModal {
  open: boolean;
  handleClose: () => void;
  name: string;
  content: string;
}

function FileViewerModal({
  open,
  handleClose,
  name,
  content,
}: IFileViewerModal) {
  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal-container">
        <div>
          <div className="pb-4 border-b-2 border-b-bg-gray-900 mb-4">
            <Typography variant="h6" fontWeight={600}>
              File content
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1" fontWeight={600}>
              Filename:
            </Typography>
            <div className="ml-4">
              <Typography variant="body1">{name}</Typography>
            </div>
          </div>
          <div>
            <Typography variant="subtitle1" fontWeight={600}>
              Content:
            </Typography>
            <div className="ml-4 overflow-y-scroll max-h-[132px] break-all">
              <Typography variant="body1">{content}</Typography>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-x-4">
          <Button variant="outlined" onClick={handleClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default FileViewerModal;
