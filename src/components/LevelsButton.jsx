import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const LevelsButton = ({ choseComplexity }) => {
  const stateComplexity = localStorage.getItem('complexity') ? Number(localStorage.getItem('complexity')) : 1
  const [complexity, setComplexity] = React.useState(stateComplexity)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    choseComplexity(event.currentTarget.value)
    setComplexity(event.currentTarget.value)
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {complexity}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem value='1' onClick={handleClose}>1</MenuItem>
        <MenuItem value='2' onClick={handleClose}>2</MenuItem>
        <MenuItem value='3' onClick={handleClose}>3</MenuItem>
        <MenuItem value='4' onClick={handleClose}>4</MenuItem>
        <MenuItem value='5' onClick={handleClose}>5</MenuItem>
        <MenuItem value='6' onClick={handleClose}>6</MenuItem>
      </Menu>
    </div>
  );
}
// Тип "{ choseComplexity: Dispatch<SetStateAction<number>>; }" не может быть назначен для типа "IntrinsicAttributes & Dispatch<SetStateAction<number>>".
//   Свойство "choseComplexity" не существует в типе "IntrinsicAttributes & Dispatch<SetStateAction<number>>".
