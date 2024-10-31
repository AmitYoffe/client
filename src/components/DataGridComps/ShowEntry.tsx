import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { GridValidRowModel } from "@mui/x-data-grid";

interface IShowEntry {
  dataType: string;
  open: boolean;
  handleClose: () => void;
  rowData: GridValidRowModel | null;
}

export default function ShowEntry({
  dataType,
  open,
  handleClose,
  rowData,
}: IShowEntry) {
  console.log("rowData: ", rowData);
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {`${dataType === "directors" ? "Director" : "Movie"} Information`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {JSON.stringify(rowData, null, 4)}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

// bug fix:
// Clicking the last row in the data table gives
// rowData:  null
