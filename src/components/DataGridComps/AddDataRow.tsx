import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Button } from "@mui/material";
import {
  GridRowModes,
  GridRowModesModel,
  GridValidRowModel,
} from "@mui/x-data-grid";

interface AddDataRowProps {
  setRows: (
    newRows: (oldRows: GridValidRowModel[]) => GridValidRowModel[]
  ) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
  dataType: string;
}

export default function AddDataRow(props: AddDataRowProps) {
  const { setRows, setRowModesModel, dataType } = props;

  const handleClick = () => {
    const id = new Date().getTime(); // make it auto increment from the backend? not the front right?
    setRows((oldRows) => [...oldRows, { id, title: "" } as GridValidRowModel]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "title" },
    }));
  };

  return (
    <Button
      sx={{
        width: "11rem",
        marginTop: "1rem",
        marginX: "auto",
        color: "primary",
      }}
      endIcon={
        dataType === "directors" ? <PostAddIcon /> : <PersonAddAlt1Icon />
      }
      onClick={handleClick}
    >
      Add
    </Button>
  );
}
