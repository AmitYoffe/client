import { Director } from "@/models/director";
import { Movie } from "@/models/movie";
import { InputAdornment, TextField } from "@mui/material";
import Search from '@mui/icons-material/Search';

interface SearchInputProps {
    data: Movie[] | Director[];
}

export default function SearchInput({ data }: SearchInputProps) {
    // is this way of getting the current route is still relevant?
    const label = `Search ${Array.isArray(data) && data.length > 0 && 'title' in data[0] ? 'movies' : 'directors'}`;

    return <TextField id="outlined-basic" variant="outlined" label={label}
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
}