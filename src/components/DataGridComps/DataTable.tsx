import { directorColumns } from "@/app/directors/utils/const";
import { movieColumns } from "@/app/movies/utils/const";
import { Director, Movie } from "@/models";
import { Box } from "@mui/material";
import {
  DataGrid,
  GridEventListener,
  GridRowEditStopReasons,
  GridRowModel,
  GridRowModesModel,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { useState } from "react";
import AddPopup from "../popups/AddPopup";
import SearchInput from "./SearchInput";

interface IDataTable {
  data: Movie[] | Director[];
}

export default function DataTable({ data }: IDataTable) {
  const [rows, setRows] = useState<GridValidRowModel[]>(data);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const dataType = `${
    Array.isArray(data) && data.length > 0 && "title" in data[0]
      ? "movies"
      : "directors"
  }`;

  //   const handleEditClick = (id: GridRowId) => () => {
  //     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  //   };

  //   const handleSaveClick = (id: GridRowId) => () => {
  //     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  //   };

  //   const handleDeleteClick = (id: GridRowId) => () => {
  //     setRows(rows.filter((row) => row.id !== id));
  //   };

  //   const handleCancelClick = (id: GridRowId) => () => {
  //     setRowModesModel({
  //       ...rowModesModel,
  //       [id]: { mode: GridRowModes.View, ignoreModifications: true },
  //     });

  //     const editedRow = rows.find((row) => row.id === id);
  //     if (editedRow!.isNew) {
  //       setRows(rows.filter((row) => row.id !== id));
  //     }
  //   };

  // const handleRowEditStop: GridEventListener<"rowEditStop"> = (
  //   params,
  //   event
  // ) => {
  //   if (params.reason === GridRowEditStopReasons.rowFocusOut) {
  //     event.defaultMuiPrevented = true;
  //   }
  // };

  const processRowUpdate = (newRow: GridRowModel) => {
    // do i need these funcs?
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleSearchResults = (results: GridValidRowModel[]) => {
    setRows(results);
  };

  const addNewRow = (newRow: GridValidRowModel) => {
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const handleEditRow = (updatedRow: GridRowModel) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === updatedRow.id ? updatedRow : row))
    );
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
        rows={rows}
        columns={
          dataType === "directors"
            ? directorColumns(handleEditRow)
            : movieColumns(handleEditRow)
        }
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        processRowUpdate={processRowUpdate}
      />
      <AddPopup dataType={dataType} onAddRow={addNewRow} />
    </Box>
  );
}
