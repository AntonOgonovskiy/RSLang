import { experimentalStyled as styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const CustomPaperLink = styled(Paper)(({ theme }) => ({
  ...theme.typography.h6,
  padding: theme.spacing(1.5),
  textAlign: "center",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  color: theme.palette.text.secondary,
  transition: "all ease 0.4s",
  ":hover": {
    background: "#ef9a9a",
  },
  ":active": {
    transform: "scale(0.97)",
  },
}));
