import { directorColumns } from "@/app/directors/utils/const";
import { movieColumns } from "@/app/movies/utils/const";
import { Director } from "@/models/director";
import { Movie } from "@/models/movie";
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
import AddDataRow from "./AddDataRow";
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

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // alignItems: 'center',
        alignContent: "center",
        height: 500,
        width: "100%",
        border: 1,
        padding: "1em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          paddingBottom: "1em",
        }}
      >
        <SearchInput
          dataType={dataType}
          onSearchResults={handleSearchResults}
        />
      </Box>
      <DataGrid
        rows={rows}
        columns={dataType === "directors" ? directorColumns : movieColumns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
      />
      <AddDataRow
        setRows={setRows}
        setRowModesModel={setRowModesModel}
        dataType={dataType}
      />
    </Box>
  );
}
