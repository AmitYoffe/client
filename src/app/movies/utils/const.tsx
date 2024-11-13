import {DeletePopup} from "@/components/popups/DeletePopup";
import {EditPopup} from "@/components/popups/EditPopup";
import { Title } from "@/components/models";
import { GridColDef, GridRowModel } from "@mui/x-data-grid";

export const movieColumns = (
  onEditRow: (newRow: GridRowModel) => void,
  deleteRow: (newRow: GridRowModel) => void,
  data: Record<string, any>,
  title: Title
): GridColDef[] => [
    {
      field: "title",
      headerName: "Title",
      width: 280,
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
          <EditPopup
            id={Number(id)}
            title={title}
            onEditRow={onEditRow}
            data={data}
          />,
          <DeletePopup
            id={Number(id)}
            title={title}
            onDeleteRow={deleteRow}
          />,
        ];
      },
    },
  ];
