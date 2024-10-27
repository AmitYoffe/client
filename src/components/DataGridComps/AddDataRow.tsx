import Add from '@mui/icons-material/add';
import { Button } from "@mui/material";
import { GridRowModes, GridRowModesModel, GridValidRowModel } from "@mui/x-data-grid";

interface AddDataRowProps {
    setRows: (newRows: (oldRows: GridValidRowModel[]) => GridValidRowModel[]) => void;
    setRowModesModel: (
        newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
    ) => void;
}

export default function AddDataRow(props: AddDataRowProps) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
        const id = new Date().getTime(); // make it auto increment from the backend? not the front right?
        setRows((oldRows) => [
            ...oldRows,
            { id, title: '' } as GridValidRowModel,
        ]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'title' },
        }));
    };

    return (
        <Button sx={{
            width: '11rem',
            marginTop: '1rem',
            marginX: 'auto',
            color: "primary"
        }} startIcon={<Add />} onClick={handleClick} >
            Add
        </Button>
    );
}