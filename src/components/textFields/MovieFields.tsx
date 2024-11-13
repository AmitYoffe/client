import { TextField } from "@mui/material";

interface IMovieFields {
  required: boolean;
  defaultData?: Record<string, any>;
}

export default function MovieFields({ required, defaultData }: IMovieFields) {
  return (
    <>
      <TextField
        autoFocus
        required={required}
        margin="dense"
        id="title"
        name="title"
        label="title"
        fullWidth
        variant="standard"
        defaultValue={defaultData?.title}
      />
      <TextField
        required={required}
        margin="dense"
        id="director"
        name="director"
        label="director"
        fullWidth
        variant="standard"
        defaultValue={defaultData?.director}
      />
      <TextField
        required={required}
        margin="dense"
        id="year"
        name="year"
        label="year"
        type="number"
        fullWidth
        variant="standard"
        defaultValue={defaultData?.year}
      />
    </>
  );
}
