import { directorColumns } from "@/app/directors/utils/const";
import { movieColumns } from "@/app/movies/utils/const";
import { Director, Movie } from "@/models";
import { Box } from "@mui/material";
import { DataGrid, GridRowModel, GridValidRowModel } from "@mui/x-data-grid";
import { useState } from "react";
import AddPopup from "../popups/AddPopup";
import SearchInput from "./SearchInput";

interface IDataTable {
  data: Movie[] | Director[];
}

export default function DataTable({ data }: IDataTable) {
  const [rows, setRows] = useState<GridValidRowModel[]>(data);

  const dataType = `${
    Array.isArray(data) && data.length > 0 && "title" in data[0]
      ? "movies"
      : "directors"
  }`;

  const handleSearchResults = (results: GridValidRowModel[]) => {
    setRows(results);
  };

  const addNewRow = (newRow: GridValidRowModel) => {
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const editRow = (updatedRow: GridRowModel) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === updatedRow.id ? updatedRow : row))
    );
  };

  const deleteRow = (deletedRow: GridRowModel) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== deletedRow.id));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        height: "80%",
        width: "100%",
        border: 1,
        // borderColor: 'primary.',
        padding: "1em",
      }}
    >
      <SearchInput dataType={dataType} onSearchResults={handleSearchResults} />
      <DataGrid
        columns={
          dataType === "directors"
            ? directorColumns(editRow, deleteRow, data, dataType)
            : movieColumns(editRow, deleteRow, data, dataType)
        }
        rows={rows}
      />
      <AddPopup dataType={dataType} onAddRow={addNewRow} />
    </Box>
  );
}
