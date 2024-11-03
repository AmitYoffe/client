import { useDebounce } from "@/hooks/useDebounce";
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
  const debouncedSearchQuery = useDebounce(searchQuery);

  useEffect(() => {
    const fetchResults = async () => {
      const results = await handleSearch(debouncedSearchQuery, dataType);
      onSearchResults(results);
    };

    fetchResults();
  }, [searchQuery, dataType]);

  return (
    <TextField
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "35%",
        minWidth: "200px",
        paddingBottom: "16px",
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
