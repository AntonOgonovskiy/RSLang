import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BarChartIcon from '@mui/icons-material/BarChart';
import styles from "./StatisticIcon.module.css"
import { Tooltip } from '@mui/material';
import StatisticTable from '../StatisticTable/StatisticTable';

export default function StatisticIcon(word: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(word.word.word)
  return (
    <div>
      <Tooltip title="Statistic">
        <BarChartIcon className={styles.cardBtn} onClick={handleOpen} />
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal_box}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`Statistics on the word "${word.word.word}"`}
          </Typography>
          <StatisticTable stats={word.word.userWord?.optional} />
        </Box>
      </Modal>
    </div>
  );
}
