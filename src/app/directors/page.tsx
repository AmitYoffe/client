"use client";
import { DataTable } from "@/components/DataGridComps/DataTable";
import { Director } from "@/components/models/director";
import { getDirectors } from "@/components/services/directorService";
import { StyledBox } from "@/components/styled/StyledPageBox";
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

  return (
    <StyledBox>
      {directors && <DataTable data={directors} title={"directors"} />}
    </StyledBox>
  );
}

export default DirectorsPage