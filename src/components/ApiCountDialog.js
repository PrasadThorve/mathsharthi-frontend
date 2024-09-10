import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { setApiDialog } from "../store/store";

export function ApiCountDialog({ setModalOpen }) {
  const { error, openApiDialog } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setApiDialog(false));
  };

  return (
    <React.Fragment>
      <Dialog
        open={openApiDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Upgrade Your Plan"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            It looks like you've used up your free file upload quota.To continue
            uploading files, please upgrade.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              setModalOpen(true);
            }}
          >
            see plans
          </Button>
          <Button onClick={handleClose} autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
