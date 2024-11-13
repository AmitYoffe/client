import { useDebounce } from "@/components/hooks/useDebounce";
import { Title } from "@/components/models";
import Search from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { GridValidRowModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { handleSearch } from "../utils";
import { StyledDialogTitle } from "./styled/StyledTextField";

interface SearchInputProps {
  onSearchResults: (results: GridValidRowModel[]) => void;
  title: Title
}

export const SearchInput = ({
  onSearchResults,
  title
}: SearchInputProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    const fetchResults = async () => {
      const results = await handleSearch(debouncedSearchQuery, title);
      onSearchResults(results);
    };

    fetchResults();
  }, [searchQuery, title]);

  return (
    <StyledDialogTitle
      variant="outlined"
      label={`Search ${title}`}
      value={searchQuery}
      onChange={({ target: { value } }) => setSearchQuery(value)}
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
