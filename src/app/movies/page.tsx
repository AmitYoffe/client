"use client";
import { DataTable } from "@/components/DataGridComps/DataTable";
import { getMovies } from "@/components/services/movieService";
import { StyledBox } from "@/components/styled/StyledPageBox";
import { useEffect, useState } from "react";
import { Movie } from "../../components/models/movie";

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
    <StyledBox>
      {movies && <DataTable data={movies} title={"movies"} />}
    </StyledBox>
  );
}

export default MoviesPage