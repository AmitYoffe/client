"use client";
import DataTable from "@/components/DataGridComps/DataTable";
import { Director } from "@/models/director";
import { getDirectors } from "@/services/directorService";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function DirectorsPage() {
  const [directors, setDirectors] = useState<Director[]>();

  const fetchDirectors = async () => {
    const data = await getDirectors(); // merge these two lines
    setDirectors(data);
  };

  useEffect(() => {
    fetchDirectors();
  }, []);

  // use styled from mui
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        // height: "100%",
        padding: "80px",
      }}
    >
      {directors && <DataTable data={directors} />}
    </Box>
  );
}
