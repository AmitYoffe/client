import { patchForm } from "@/utils/patchForm";
import EditIcon from "@mui/icons-material/Edit";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import {
  Button,
  DialogActions,
  DialogContent,
  IconButton,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { GridRowModel } from "@mui/x-data-grid";
import { FormEvent, useState } from "react";
import DirectorFields from "../textFields/DirectorFields";
import MovieFields from "../textFields/MovieFields";

interface IEditPopup {
  id: number;
  dataType: string;
  onEditRow: (newRow: GridRowModel) => void;
}

export default function EditPopup({ id, dataType, onEditRow }: IEditPopup) {
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
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const updatedRow = await patchForm(formJson, dataType, id);
    onEditRow(updatedRow);
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <EditIcon />
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
          {`Edit ${dataType === "directors" ? "Director" : "Movie"}`}
          {dataType === "directors" ? (
            <VideoCameraFrontIcon />
          ) : (
            <LocalMoviesIcon />
          )}
        </DialogTitle>
        <DialogContent>
          {dataType === "directors" ? (
            <DirectorFields required={false} />
          ) : (
            <MovieFields required={false} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
