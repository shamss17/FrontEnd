import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography, InputLabel, Box } from '@mui/material';

const AddUserPopup = ({ open, onClose, onAddUser, createData, rows }) => {
  const handleClose = () => {
    onClose();
  };

  const handleAddUser = () => {
    const fullName = document.getElementById('full-name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const userGroup = document.getElementById('user-group').value;

    const newUser = createData(
      rows.length + 1,
      fullName,
      username,
      email,
      'New User Group', // Default value for group, change as needed
      'Active', // Default value for status, change as needed
      new Date().toLocaleDateString(), // Current date as createdOn
      fullName,
      userGroup,
      'Default Profile', // Default value for profile, change as needed
    );

    // Call the parent component's callback to handle user addition
    onAddUser(newUser);

    // Close the popup
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <DialogTitle sx={{ backgroundColor: '#00002a', color: 'white', p: 2, display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" fontSize={18}>
          Add New User
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ minWidth: '550px', maxHeight: '700px' }}>
        {/* Add your vertical text fields here */}
        <InputLabel>
          <Typography variant="body2" sx={{ color: '#00002a', fontWeight: '600' ,marginTop:'20px'}} >
            Full Name
          </Typography>
        </InputLabel>
        <TextField fullWidth margin="dense" id='full-name' defaultValue={"Enter Full Name"} size="small" />

        <InputLabel>
          <Typography variant="body2" sx={{ color: '#00002a', fontWeight: '600' }}>
            User Name
          </Typography>
        </InputLabel>
        <TextField fullWidth margin="dense"id='username' defaultValue={"Enter username"} size="small" />

        <InputLabel>
          <Typography variant="body2" sx={{ color: '#00002a', fontWeight: '600' }}>
            Email Address
          </Typography>
        </InputLabel>
        <TextField fullWidth margin="dense" id='email'defaultValue={"Enter user email address"} size="small" />

        <InputLabel>
          <Typography variant="body2" sx={{ color: '#00002a', fontWeight: '600' }}>
            User Group
          </Typography>
        </InputLabel>
        <TextField fullWidth margin="dense"id='user-group' defaultValue={"Choose User Group"} size="small" />

        <InputLabel >
          <Typography variant="body2" sx={{ color: '#00002a', fontWeight: '600' }}>
            Assign Profile
          </Typography>
        </InputLabel>
        <TextField fullWidth margin="dense" id='profile' defaultValue={"Choose Profile"} size="small" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} style={{ backgroundColor: 'white', color: '#555' }} variant="contained">
          <Typography color={'#223'} textTransform={'none'} fontWeight={600}>
            Cancel
          </Typography>
        </Button>
        <Button onClick={handleAddUser} style={{ backgroundColor: '#3DAC78', color: 'white' }}>
          <Typography color={'#fff'} textTransform={'none'} fontWeight={600}>
            Add User
          </Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserPopup;