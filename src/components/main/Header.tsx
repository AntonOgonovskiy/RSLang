import {
  AppBar,
  Button,
  Popover,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { FC } from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const Header: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "registry-popover" : undefined;

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography
            variant="h5"
            component="h1"
            sx={{ flexGrow: 1, cursor: "default" }}
          >
            RSLang
          </Typography>
          <Button
            aria-describedby={id}
            onClick={handleClick}
            sx={{ fontSize: 15 }}
            color="inherit"
          >
            Login
          </Button>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <RegistrationForm handleClosePopover={handleClose} />
          </Popover>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
