import { Title } from "@/components/models";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import { Button, DialogActions, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { GridRowModel } from "@mui/x-data-grid";
import { useState } from "react";
import { deleteEntry } from "../utils";
import { StyledDialogTitle } from "./styled/StyledDialogTitle";

interface IDeletePopup {
  id: number;
  title: Title;
  onDeleteRow: (newRow: GridRowModel) => void;
}

export const DeletePopup = ({
  id,
  title,
  onDeleteRow,
}: IDeletePopup) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    onDeleteRow({ id });
    await deleteEntry(title, id);
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <StyledDialogTitle>
          {`Are you sure you want to delete this special one out of all the ${title}?`}
          {title === "directors" ? (
            <VideoCameraFrontIcon />
          ) : (
            <LocalMoviesIcon />
          )}
        </StyledDialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
