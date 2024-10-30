import DeletePopup from "@/components/popups/DeletePopup";
import EditPopup from "@/components/popups/EditPopup";
import {
  GridActionsCellItem,
  GridColDef,
  GridRowModel,
} from "@mui/x-data-grid";

export const movieColumns = (
  onEditRow: (newRow: GridRowModel) => void,
  deleteRow: (newRow: GridRowModel) => void,
  data: Record<string, any>,
  dataType: string
): GridColDef[] => [
  {
    field: "title",
    headerName: "Title",
    width: 180,
    type: "string",
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
    getActions: ({ id }) => {
      return [
        <GridActionsCellItem
          icon={
            <EditPopup
              id={Number(id)}
              dataType={dataType}
              onEditRow={onEditRow}
              data={data}
            />
          }
          label="Edit"
          color="inherit"
        />,
        <GridActionsCellItem
          icon={
            <DeletePopup
              id={Number(id)}
              dataType={dataType}
              onDeleteRow={deleteRow}
            />
          }
          label="Delete"
          color="inherit"
        />,
      ];
    },
  },
];
