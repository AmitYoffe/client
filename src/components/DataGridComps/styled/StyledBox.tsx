import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    height: "70vh",
    width: "100%",
    border: `1px solid ${theme.palette.primary.dark}`,
    padding: "16px",
}));
