import { directorColumns, movieColumns } from "@/app/index";
import { Director, Movie, Title } from "@/components/models";
import { DataGrid, GridRowModel, GridValidRowModel } from "@mui/x-data-grid";
import { useState } from "react";
import { AddPopup } from "../popups/AddPopup";
import { EntryPopup } from "./EntryPopup";
import { SearchInput } from "./SearchInput";
import { StyledBox } from "./styled/StyledBox";

interface DataTableProps<T> {
  data: T[];
  title: Title
}

export const DataTable = ({ data, title }: DataTableProps<Director | Movie>) => {
  const [rows, setRows] = useState<GridValidRowModel[]>(data);
  const [openEntryDialog, setOpenEntryDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState<GridRowModel | null>(null);

  const handleRowClick = (id: number) => {
    setSelectedRow(data[id - 1]);
    setOpenEntryDialog(true);
  }

  const handleCloseRowPreview = () => {
    setOpenEntryDialog(false);
    setSelectedRow(null);
  };

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
    <StyledBox>
      <SearchInput title={title} onSearchResults={handleSearchResults} />
      <DataGrid
        columns={
          title === "directors"
            ? directorColumns(editRow, deleteRow, data, title)
            : movieColumns(editRow, deleteRow, data, title)
        }
        rows={rows}
        onRowClick={(params) => handleRowClick(Number(params.id))}
      />
      <AddPopup title={title} onAddRow={addNewRow} />
      <EntryPopup
        title={title}
        open={openEntryDialog}
        handleClose={handleCloseRowPreview}
        rowData={selectedRow}
      />
    </StyledBox>
  );
}
