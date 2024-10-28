'use client'
import DataTable from "@/components/DataGridComps/DataTable";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Movie } from "../../models/movie";
import { getMovies } from "../../services/movieService";

export default function MoviesPage() {
    const [movies, setMovies] = useState<Movie[]>();
    const router = useRouter();
    const currentRouteName = router.pathname.includes("directors") ? "directors" : "movies";

    useEffect(() => {
        const fetchMovies = async () => {
            const movies: Movie[] = await getMovies();
            setMovies(movies);
        };
        fetchMovies();
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            // width: '100%',
            padding: '5em',
        }}>
            {movies && <DataTable data={movies} currentRouteName={currentRouteName} />}
        </Box>
    );
};
