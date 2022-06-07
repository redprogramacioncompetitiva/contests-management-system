import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#ECFEEC',
  border: '2px solid transparent',
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <b>Training Session</b>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 4 }}>
          The team was successfully registered in the competition!
        </Typography>
        <div>
          <img src="../../icons/check_icon.png"/>
        </div>
      </Box>
    </div>
  );
}