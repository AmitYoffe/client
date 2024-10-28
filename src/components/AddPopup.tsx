import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Button, DialogActions, DialogContent } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { FormEvent, useState } from "react";
import DirectorFields from "./textFields/DirectorFields";
import MovieFields from "./textFields/MovieFields";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";

interface IAddPopup {
  dataType: string;
}

export default function AddPopup({ dataType }: IAddPopup) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        sx={{ width: "12em", marginX: "auto", marginY: "6px" }}
        variant="outlined"
        onClick={handleClickOpen}
        endIcon={
          dataType === "directors" ? <PostAddIcon /> : <PersonAddAlt1Icon />
        }
      >
        {`Add ${dataType === "directors" ? "Director" : "Movie"}`}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
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
          {`Add ${dataType === "directors" ? "Director" : "Movie"}`}
          {dataType === "directors" ? (
            <VideoCameraFrontIcon />
          ) : (
            <LocalMoviesIcon />
          )}
        </DialogTitle>
        <DialogContent>
          {dataType === "directors" ? <DirectorFields /> : <MovieFields />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
