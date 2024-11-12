import { TextField } from "@mui/material";

interface IDirectorFields {
  required: boolean;
  defaultData?: Record<string, any>;
}

export default function DirectorFields({
  required,
  defaultData,
}: IDirectorFields) {
  return (
    <>
      <TextField
        autoFocus
        // just reqquired
        required={required ? required : false}
        margin="dense"
        id="firstName"
        name="firstName"
        label="firstName"
        fullWidth
        variant="standard"
        defaultValue={defaultData?.firstName}
      />
      <TextField
        required={required ? required : false}
        margin="dense"
        id="lastName"
        name="lastName"
        label="lastName"
        fullWidth
        variant="standard"
        defaultValue={defaultData?.lastName}
      />
      <TextField
        required={required ? required : false}
        margin="dense"
        id="movies"
        name="movies"
        label="movies"
        fullWidth
        variant="standard"
        defaultValue={defaultData?.movies}
      />
    </>
  );
}
