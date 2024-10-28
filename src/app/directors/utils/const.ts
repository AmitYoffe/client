import { GridColDef } from "@mui/x-data-grid";

// make movie and directors columns differently
export const directorColumns: GridColDef[] = [
  {
    field: "firstName",
    headerName: "First Name",
    type: "string",
    width: 200,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "lastName",
    headerName: "Last Name",
    type: "string",
    width: 200,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "id",
    headerName: "Id",
    type: "number",
    width: 80,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 120,
    cellClassName: "actions",
    getActions: () => [],

    // getActions: ({ id }) => {
    //   const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

    //   if (isInEditMode) {
    //     return [
    //       <GridActionsCellItem
    //         icon={<SaveIcon />}
    //         label="Save"
    //         sx={{
    //           color: "primary.main",
    //         }}
    //         onClick={handleSaveClick(id)}
    //       />,
    //       <GridActionsCellItem
    //         icon={<CancelIcon />}
    //         label="Cancel"
    //         className="textPrimary"
    //         onClick={handleCancelClick(id)}
    //         color="inherit"
    //       />,
    //     ];
    //   }

    //   return [
    //     <GridActionsCellItem
    //       icon={<EditIcon />}
    //       label="Edit"
    //       className="textPrimary"
    //       onClick={handleEditClick(id)}
    //       color="inherit"
    //     />,
    //     <GridActionsCellItem
    //       icon={<DeleteIcon />}
    //       label="Delete"
    //       onClick={handleDeleteClick(id)}
    //       color="inherit"
    //     />,
    //   ];
    // },
  },
];
