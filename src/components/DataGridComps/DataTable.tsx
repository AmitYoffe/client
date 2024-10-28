import { Director } from '@/models/director';
import { Movie } from '@/models/movie';
import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { Box } from '@mui/material';
import {
    DataGrid,
    GridActionsCellItem,
    GridColDef,
    GridEventListener,
    GridRowEditStopReasons,
    GridRowId,
    GridRowModel,
    GridRowModes,
    GridRowModesModel,
    GridValidRowModel
} from '@mui/x-data-grid';
// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AddDataRow from './AddDataRow';
import DropDown from './DropDown';
import SearchInput from './SearchInput';

interface IDataTable {
    data: Movie[] | Director[],
    currentRouteName: string,
}

export default function DataTable({ data, currentRouteName }: IDataTable) {
    const [rows, setRows] = useState<GridValidRowModel[]>(data);
    const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
    // const [currentRouteName, setCurrentRouteName] = useState('');

    // const router = useRouter();
    console.log("currentRouteName: ", currentRouteName);

    // useEffect(() => {
    //     if (router && router.pathname) {
    //         console.log("router pathname: ", router.pathname);
    //         if (router.pathname.includes("directors")) {
    //             setCurrentRouteName("directors");
    //         } else if (router.pathname.includes("movies")) {
    //             setCurrentRouteName("movies");
    //         }
    //         console.log("currentRouteName: ", currentRouteName);
    //     }
    // }, [router]);

    const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id: GridRowId) => () => {
        setRows(rows.filter((row) => row.id !== id));
    };

    const handleCancelClick = (id: GridRowId) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow!.isNew) {
            setRows(rows.filter((row) => row.id !== id));
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

    // make movie and directors columns differently
    const columns: GridColDef[] = [
        {
            field: 'title', headerName: 'Title',
            width: 180,
        },
        {
            field: 'id',
            headerName: 'Id',
            type: 'number',
            width: 100,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 120,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            alignContent: 'center',
            height: 500,
            width: '100%',
            border: 1,
            padding: '1em'
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingBottom: '1em' }}>
                <DropDown />
                <SearchInput data={data} />
            </Box>
            <DataGrid
                rows={rows}
                columns={columns}
                editMode="row"
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
            />
            <AddDataRow setRows={setRows} setRowModesModel={setRowModesModel} />
        </Box>
    );
}