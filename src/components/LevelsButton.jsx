import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const LevelsButton = ({ choseComplexity }) => {
  const stateComplexity = localStorage.getItem('complexity') ? Number(localStorage.getItem('complexity')) : 1
  const colors = ["Thistle", "Plum", "Orchid", "MediumOrchid", "DarkOrchid", "RebeccaPurple"]
  const [complexity, setComplexity] = React.useState(stateComplexity)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  document.body.style.background = colors[complexity - 1]
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    event.preventDefault()
    if (event.currentTarget.value) {

      choseComplexity(event.currentTarget.value)
      setComplexity(event.currentTarget.value)
      setAnchorEl(null);
    }
  };
  return (
    <div>
      <Button variant="contained" color="primary"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {complexity}
      </Button>
      <Menu color="primary"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{ backgroundColor: colors[0] }} value='1' onClick={handleClose}>1</MenuItem>
        <MenuItem sx={{ backgroundColor: colors[1] }} value='2' onClick={handleClose}>2</MenuItem>
        <MenuItem sx={{ backgroundColor: colors[2] }} value='3' onClick={handleClose}>3</MenuItem>
        <MenuItem sx={{ backgroundColor: colors[3] }} value='4' onClick={handleClose}>4</MenuItem>
        <MenuItem sx={{ backgroundColor: colors[4] }} value='5' onClick={handleClose}>5</MenuItem>
        <MenuItem sx={{ backgroundColor: colors[5] }} value='6' onClick={handleClose}>6</MenuItem>
      </Menu>
    </div >
  );
}
