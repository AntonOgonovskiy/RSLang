import { Box, SpeedDial, SpeedDialAction, Tooltip } from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Link } from 'react-router-dom';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';

export default function GamesButtons(state: any) {

  const setBodyColor = () => {
    document.body.style.background = 'white'
  }

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      {state.state ?
        <Tooltip title="All words are learned!">
          <StarPurple500Icon color="primary" fontSize="large" style={{ width: 56, height: 56 }} />
        </Tooltip>
        :
        <SpeedDial
          sx={{ position: 'absolute', bottom: -28, left: 6 }}
          ariaLabel="SpeedDial openIcon example"
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
              <Link to="/games/sprint" onClick={setBodyColor} >
                <DirectionsRunIcon />
              </Link>
            }
            tooltipTitle='Sprint'
          />
        </SpeedDial>
      }
    </Box >
  );
}
