"use client";
import { DataTable } from "@/components/DataGridComps/DataTable";
import { Director } from "@/models/director";
import { getDirectors } from "@/services/directorService";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const DirectorsPage = () => {
  const [directors, setDirectors] = useState<Director[]>();

  const fetchDirectors = async () => {
    const data = await getDirectors();
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
        padding: "80px",
      }}
    >
      {directors && <DataTable data={directors} title={"directors"} />}
    </Box>
  );
}

export default DirectorsPage