import { TextField } from "@mui/material";

export default function DirectorFields() {
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
        required
        margin="dense"
        id="firstName"
        name="firstName"
        label="firstName"
        fullWidth
        variant="standard"
      />
      <TextField
        required
        margin="dense"
        id="lastName"
        name="lastName"
        label="lastName"
        fullWidth
        variant="standard"
      />
      {/* Maybe make a dropdown of all movies already
       related to him or just all movies? */}
      <TextField
        required
        margin="dense"
        id="movies"
        name="movies"
        label="movies"
        fullWidth
        variant="standard"
      />
    </>
  );
}
