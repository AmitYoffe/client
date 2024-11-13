import { Title } from "@/models";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { GridValidRowModel } from "@mui/x-data-grid";

interface IShowEntry {
  title: Title;
  open: boolean;
  handleClose: () => void;
  rowData: GridValidRowModel | null;
}

export const EntryPopup = ({
  title,
  open,
  handleClose,
  rowData,
}: IShowEntry) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      {/* pass title as a prop */}
      <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {`${title} information`}
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
