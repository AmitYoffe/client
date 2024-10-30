import { deleteEntry } from "@/utils";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import { Button, DialogActions, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { GridRowModel } from "@mui/x-data-grid";
import { FormEvent, useState } from "react";

interface IDeletePopup {
  id: number;
  dataType: string;
  onDeleteRow: (newRow: GridRowModel) => void;
}

export default function DeletePopup({
  id,
  dataType,
  onDeleteRow,
}: IDeletePopup) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // maybe i just need a useEffect to rerender the lines and not a
  // seperate rerendering function for the POST & PATCH methods
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // do i still need preventDefault
    event.preventDefault();
    const deleteSuccess = await deleteEntry(dataType, id);
    if (deleteSuccess) onDeleteRow({ id });

    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
          }}
        >
          {`Are you sure you want to delete this ${
            dataType === "directors" ? "director" : "movie"
          }`}
          {dataType === "directors" ? (
            <VideoCameraFrontIcon />
          ) : (
            <LocalMoviesIcon />
          )}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
