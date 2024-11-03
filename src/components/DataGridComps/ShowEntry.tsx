import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
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
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {`${dataType === "directors" ? "Director" : "Movie"} Information`}
        <InfoIcon />
      </DialogTitle>
      <pre
        style={{
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
          padding: "16px",
          overflow: "auto",
          boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {JSON.stringify(rowData, null, 4)}
      </pre>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
