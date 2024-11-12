import { directorColumns, movieColumns } from "@/app/index";
import { Director, Movie } from "@/models";
import { Box } from "@mui/material";
import { DataGrid, GridRowModel, GridValidRowModel } from "@mui/x-data-grid";
import { useState } from "react";
import AddPopup from "../popups/AddPopup";
import SearchInput from "./SearchInput";
import ShowEntry from "./ShowEntry";

// the convention here is DataTableProps or just props
interface IDataTable {
  // make data generic for scalablitiy
  data: Movie[] | Director[];
}

// remove default
// make the component pure generic, currently it is "generic" for 2 options, its not really generic
export default function DataTable({ data }: IDataTable) {
  const [rows, setRows] = useState<GridValidRowModel[]>(data);
  const [openEntryDialog, setOpenEntryDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState<GridRowModel | null>(null);

  // take just id not params
  function handleRowClick(params: any) {
    setSelectedRow(data[params.id - 1]);
    setOpenEntryDialog(true);
  }

  const handleCloseRowPreview = () => {
    setOpenEntryDialog(false);
    setSelectedRow(null);
  };

  const dataType = `${Array.isArray(data) && data.length > 0 && "title" in data[0]
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
        height: "70vh",
        width: "100%",
        border: 1,
        padding: "16px",
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
        onRowClick={handleRowClick}
      />
      <AddPopup dataType={dataType} onAddRow={addNewRow} />
      <ShowEntry
        dataType={dataType}
        open={openEntryDialog}
        handleClose={handleCloseRowPreview}
        rowData={selectedRow}
      />
    </Box>
  );
}
