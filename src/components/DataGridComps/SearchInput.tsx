import Search from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

interface SearchInputProps {
  dataType: string;
}

export default function SearchInput({ dataType }: SearchInputProps) {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      label={`Search ${dataType}`}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}

// make it stretch on focus
