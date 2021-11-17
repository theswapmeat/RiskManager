import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Close from "@mui/icons-material/Close";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

const NotificationDialog = (props) => {
  const { confirmDialog, setConfirmDialog } = props;
  
  return (
    <Dialog open={confirmDialog.isOpen} maxWidth="sm" fullWidth>
      <DialogTitle>{confirmDialog.title}</DialogTitle>
      <Box position="absolute" top={0} right={0}>
        <IconButton>
          <Close />
        </IconButton>
      </Box>
      <DialogContent>
        <Typography>{confirmDialog.subtitle}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        >
          Cancel
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={confirmDialog.onConfirm}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NotificationDialog;
