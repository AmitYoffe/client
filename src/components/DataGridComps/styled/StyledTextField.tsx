import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const StyledDialogTitle = styled(TextField)(() => ({
    display: "flex",
    justifyContent: "space-between",
    width: "35%",
    minWidth: "200px",
    paddingBottom: "16px",
}));
