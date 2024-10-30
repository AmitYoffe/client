import { TextField } from "@mui/material";

interface IMovieFields {
  required: boolean;
}

export default function MovieFields({ required }: IMovieFields) {
  return (
    <>
      {/* <TextField
        autoFocus
        required
        margin="dense"
        id="id"
        name="email"
        label="id"
        type="email"
        fullWidth
        variant="standard"
      /> */}
      <TextField
        autoFocus
        required={required ? required : false}
        margin="dense"
        id="title"
        name="title"
        label="title"
        fullWidth
        variant="standard"
      />
      {/* Maybe make a dropdown of all directors? */}
      <TextField
        required={required ? required : false}
        margin="dense"
        id="director"
        name="director"
        label="director"
        fullWidth
        variant="standard"
      />
      <TextField
        required={required ? required : false}
        margin="dense"
        id="year"
        name="year"
        label="year"
        type="number"
        fullWidth
        variant="standard"
      />
    </>
  );
}
