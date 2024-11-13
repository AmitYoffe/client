"use client";
import { DataTable } from "@/components/DataGridComps/DataTable";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Movie } from "../../models/movie";
import { getMovies } from "../../services/movieService";

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>();

  const fetchMovies = async () => {
    const movies: Movie[] = await getMovies();
    setMovies(movies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100%",
        padding: "80px",
      }}
    >
      {movies && <DataTable data={movies} title={"movies"} />}
    </Box>
  );
}

export default MoviesPage