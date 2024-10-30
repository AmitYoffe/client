import { TextField } from "@mui/material";

interface IDirectorFields {
  required: boolean;
}

export default function DirectorFields({ required }: IDirectorFields) {
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
        id="firstName"
        name="firstName"
        label="firstName"
        fullWidth
        variant="standard"
      />
      <TextField
        required={required ? required : false}
        margin="dense"
        id="lastName"
        name="lastName"
        label="lastName"
        fullWidth
        variant="standard"
      />
      {/* Maybe make a dropdown of all movies already
       related to him or just all movies? */}

      {/* // I gotta make it some sort of array anyway... */}
      <TextField
        required={required ? required : false}
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
