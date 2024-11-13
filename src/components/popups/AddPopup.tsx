import { Title } from "@/models";
import { postForm } from "@/utils/postForm";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PostAddIcon from "@mui/icons-material/PostAdd";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import { Button, DialogActions, DialogContent } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { GridRowModel } from "@mui/x-data-grid";
import { FormEvent, useState } from "react";
import DirectorFields from "../textFields/DirectorFields";
import MovieFields from "../textFields/MovieFields";

interface IAddPopup {
  title: Title;
  onAddRow: (newRow: GridRowModel) => void;
}

export const AddPopup = ({ title, onAddRow }: IAddPopup) => {
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
    const newRow = await postForm(formJson, title);
    onAddRow(newRow);
    handleClose();
  };

  return (
    <>
      <Button
        sx={{ width: "192px", marginX: "auto", marginTop: "16px" }}
        variant="outlined"
        onClick={handleClickOpen}
        endIcon={
          title === "directors" ? <PostAddIcon /> : <PersonAddAlt1Icon />
        }
      >
        {`Add ${title}`}
      </Button>
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
          {`Add ${title}`}
          {title === "directors" ? (
            <VideoCameraFrontIcon />
          ) : (
            <LocalMoviesIcon />
          )}
        </DialogTitle>
        {/* Pass this DialogContent as prop instead */}
        <DialogContent>
          {title === "directors" ? (
            <DirectorFields required />
          ) : (
            <MovieFields required />
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
