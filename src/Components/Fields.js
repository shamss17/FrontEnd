import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';  // Import Typography
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
export default function SearchTextField() {
    const [userState, setUserState] = React.useState('Any');
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [userStatus, setUserStatus] = React.useState('Any');
  
    const handleUserStateChange = (event) => {
      setUserState(event.target.value);
    };
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    const handleUserStatusChange = (event) => {
      setUserStatus(event.target.value);
    };
  
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, height: '2.5rem' },
          '& #outlined-search': { width: '25ch' },
          '& #outlined-username, #outlined-user-state, #outlined-user-status, #outlined-creation-date': {
            width: '12ch',
          },
          display: 'flex',
          marginLeft: '700px',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-search"
          placeholder="Search"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          InputLabelProps={{ shrink: false }}
          label="User Name"
          id="outlined-username"
          defaultValue=""
          size="small"
          sx={{ fontSize: '10px' }}
        />
        <TextField
          select
          label="User Status"
          id="outlined-user-state"
          value={userState}
          size="small"
          onChange={handleUserStateChange}
        >
          <MenuItem value="Any">Any</MenuItem>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </TextField>
        <TextField
          label="Creation Date"
          id="outlined-creation-date"
          defaultValue="All Time"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CalendarTodayRoundedIcon />
              </InputAdornment>
            ),
          }}
        />
        <Typography variant="body2" color="#0583FD" style={{ alignSelf: 'center', marginLeft: '5px' }}>
          All Filters
        </Typography>
      </Box>
    );
  }