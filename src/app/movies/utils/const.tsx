import EditPopup from "@/components/popups/EditPopup";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import {
  GridActionsCellItem,
  GridColDef,
  GridRowModel,
} from "@mui/x-data-grid";

export const movieColumns = (
  onEditRow: (newRow: GridRowModel) => void,
  data: Record<string, any>
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
              dataType="movies"
              onEditRow={onEditRow}
              data={data}
            />
          }
          label="Edit"
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          color="inherit"
        />,
      ];
    },
  },
];
