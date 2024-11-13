import { Title } from "@/components/models";
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
import { GridRowModel } from "@mui/x-data-grid";
import { FormEvent, useState } from "react";
import DirectorFields from "../textFields/DirectorFields";
import MovieFields from "../textFields/MovieFields";
import { patchForm, sanitizeJson } from "../utils/index";
import { StyledDialogTitle } from "./styled/StyledDialogTitle";

interface IEditPopup {
  id: number;
  title: Title;
  onEditRow: (newRow: GridRowModel) => void;
  data: Record<string, any>;
}

export const EditPopup = ({
  id,
  title,
  onEditRow,
  data,
}: IEditPopup) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const sanitizedJson = sanitizeJson(formJson)
    const updatedRow = await patchForm(sanitizedJson, title, id);
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
        <StyledDialogTitle>
          {`Edit ${title}`}
          {title === "directors" ? (
            <VideoCameraFrontIcon />
          ) : (
            <LocalMoviesIcon />
          )}
        </StyledDialogTitle>
        <DialogContent>
          {title === "directors" ? (
            <DirectorFields required={false} defaultData={data[id - 1]} />
          ) : (
            <MovieFields required={false} defaultData={data[id - 1]} />
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
