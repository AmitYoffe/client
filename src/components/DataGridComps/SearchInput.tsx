import { handleSearch } from "@/utils/handleSearch";
import Search from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { GridValidRowModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

interface SearchInputProps {
  dataType: string;
  onSearchResults: (results: GridValidRowModel[]) => void;
}

export default function SearchInput({
  dataType,
  onSearchResults,
}: SearchInputProps) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const debounceTimeout = setTimeout(async () => {
      const results = await handleSearch(searchQuery, dataType);
      onSearchResults(results);
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [searchQuery, dataType]);

  return (
    <TextField
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "35%",
        minWidth: "200px",
        paddingBottom: "1em",
      }}
      id="outlined-basic"
      variant="outlined"
      label={`Search ${dataType}`}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
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
