// Dashboard.js
import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Button from '@mui/material/Button'; // Import Button component
import AddIcon from '@mui/icons-material/Add'; // Import Add icon
import { mainListItems, secondaryListItems } from './listItems';
import { ListItem, ListItemText } from '@mui/material';
import EnhancedTable from './Components/UsersList';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import Fields from './Components/Fields';
import Hidden from '@mui/material/Hidden';
import AddUserPopup from './AddUserPopup';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Reno Systems
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 230;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: 'white',
  height: '40px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      boxSizing: 'border-box',
      backgroundColor: '#00002a',
      height: '100vh',  // Set the height to 100% of the viewport height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  }),
);

const Content = styled('div')(({ theme }) => ({
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto',
  backgroundColor:
    theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
}));

const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddUser = () => {
    // Handle any specific logic needed after adding a user
    console.log('User added!');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', width: '1550px' }}>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="#223"
              noWrap
              sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}
              fontSize={13}
              px={3}
              marginTop={-3}
              letterSpacing={-0.5}
              fontWeight="600"
            >
              <ArrowBackIosNewRoundedIcon style={{ marginRight: '20px', marginLeft: '-27px', fontSize: '10px', fontWeight: '600' }} />
              <MenuOutlinedIcon style={{ marginRight: '5px', marginLeft: '-22px' }} />
              Good Morning!
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: '#3DAC78', marginTop: '80px', marginRight: '100px' }}
              startIcon={<AddIcon />}
              onClick={handleOpen}
            >
              <Typography textTransform="none" fontWeight={600}>
                Add New
              </Typography>
            </Button>
            <NotificationsIcon />
          </Toolbar>
        </AppBar>
        <Hidden smDown implementation="css">
          <Drawer variant="permanent">
            <Toolbar />
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
          </Drawer>
        </Hidden>
        <Content>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: '#223', marginLeft: -135, marginBottom: 2, marginTop: '-40px', fontWeight: '600' }}>
                  User Management
                </Typography>
                <Paper sx={{ p: 5, display: 'flex', flexDirection: 'column', marginLeft: '-35px', height: 550, width: 1200 ,marginTop:'10px'}}>
                  <div style={{ marginLeft: '-725px' }}>
                    <Fields />
                  </div>
                  <div style={{ marginLeft: '-32px' }}>
                    <EnhancedTable rows={rows} setRows={setRows} />
                  </div>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Content>
        <AddUserPopup open={open} onClose={handleClose}onAddUser={handleAddUser} />
      </Box>
    </ThemeProvider>
  );
}
