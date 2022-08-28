import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Link } from 'react-router-dom';

export default function GamesButtons() {

  const setBodyColor = () => {
    document.body.style.background = 'white'
  };

  return (
    <Box sx={{ height: 35 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 0, right: 0, height: 35, width: 35 }}
        icon={<SportsEsportsIcon />}
      >
        <SpeedDialAction
          key="Audio"
          icon={
            <Link to="/games/audio" onClick={setBodyColor}>
              <MusicNoteIcon />
            </Link>
          }
          tooltipTitle="Audio"
        />
        <SpeedDialAction
          key='Sprint'
          icon={
            <Link to="/games/sprint" onClick={setBodyColor} style={{ textDecoration: "none" }}>
              <DirectionsRunIcon />
            </Link>
          }
          tooltipTitle='Sprint'
        />
      </SpeedDial>
    </Box >
  );
}
