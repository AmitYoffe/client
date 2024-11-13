import { Title } from "@/components/models";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PostAddIcon from "@mui/icons-material/PostAdd";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import { Button, DialogActions, DialogContent } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { GridRowModel } from "@mui/x-data-grid";
import { FormEvent, useState } from "react";
import DirectorFields from "../textFields/DirectorFields";
import MovieFields from "../textFields/MovieFields";
import { postForm } from "../utils";
import { StyledButton } from "./styled/StyledButton";
import { StyledDialogTitle } from "./styled/StyledDialogTitle";

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
      <StyledButton
        variant="outlined"
        onClick={handleClickOpen}
        endIcon={
          title === "directors" ? <PostAddIcon /> : <PersonAddAlt1Icon />
        }
      >
        {`Add ${title}`}
      </StyledButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <StyledDialogTitle>
          {`Add ${title}`}
          {title === "directors" ? (
            <VideoCameraFrontIcon />
          ) : (
            <LocalMoviesIcon />
          )}
        </StyledDialogTitle>
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
