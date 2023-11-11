import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import PeopleIcon from '@mui/icons-material/People';
import Search from './Components/SearchBar';
import RenoLogo from './Components/RenoLogo.png';

const SecondaryListItems = () => {
  const [isUsersButtonClicked, setUsersButtonClicked] = React.useState(true);
  const [isUserManagementButtonClicked, setUserManagementButtonClicked] = React.useState(false);

  const handleUserManagementClick = () => {
    setUserManagementButtonClicked(!isUserManagementButtonClicked);
    setUsersButtonClicked(false);
  };
  return (
    <React.Fragment>
      <ListSubheader
        component="div"
        inset
        sx={{
          backgroundColor: '#00002a',
          color: '#4a4a5f',
          letterSpacing: '1.5px',
          fontWeight: 'bold',
          marginLeft: '-175px',
          fontFamily: 'revert',
          fontSize: '14px',
        }}
      >
        SETTINGS
      </ListSubheader>
    
      <ListItemButton style={{fontSize:'2px'}}>
      
      <ListItemText primary="ATM Settings" primaryTypographyProps={{
        sx: {
          color: '#778', letterSpacing:'-0.5px',fontWeight:'500',
          fontSize:'18px',fontFamily:'revert-layer'
        },
      }}/>
      <div>
        <KeyboardArrowDownRoundedIcon style={{ color: '#778' }}/>
       </div>
    </ListItemButton>
       <ListItemButton style={{fontSize:'2px'}}>
      
      <ListItemText primary="Business Setup" primaryTypographyProps={{
        sx: {
          color: '#778', letterSpacing:'-0.5px',fontWeight:'500',
          fontSize:'18px',fontFamily:'revert-layer'
        },
      }}/>
      <div>
        <KeyboardArrowDownRoundedIcon style={{ color: '#778' }}/>
       </div>
    </ListItemButton >

      <ListItemButton style={{fontSize:'2px'}} onClick={() => {
          handleUserManagementClick();
        }}
        sx={{
          backgroundColor: isUserManagementButtonClicked ? '#3DAC78' : 'transparent',
        }}
      >
        <ListItemText
          primary="User Management"
          primaryTypographyProps={{
            sx: {
              color: isUserManagementButtonClicked ? '#fff' : '#778',
              letterSpacing: '-0.5px',
              fontWeight: '500',
              fontSize: '18px',
              fontFamily: 'revert-layer',
            },
          }}
        />
        <div>
          <KeyboardArrowDownRoundedIcon
                        style={{
                          color: isUserManagementButtonClicked ? '#fff' : '#778',
                          transform: isUserManagementButtonClicked ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
            
          />
        </div>
      </ListItemButton>

      {(isUserManagementButtonClicked || isUsersButtonClicked) && (
        <React.Fragment>
          {/* Sublist items */}
          <ListItemButton
            style={{ marginLeft: '14px'}}
            onClick={() => setUsersButtonClicked(!isUsersButtonClicked)}
            
          >
            <ListItemText
              primary="Users"
              primaryTypographyProps={{
                sx: {
                  color: isUsersButtonClicked ? '#778' : '#3DAC78',
                  letterSpacing: '-0.5px',
                  fontWeight: '500',
                  fontSize: '16px',
                  fontFamily: 'revert-layer',
                },
              }}
            />
          </ListItemButton>
          {/* Add more sublist items as needed */}
          <ListItemButton style={{ marginLeft: '14px' }}>
            <ListItemText
              primary="Profiles"
              primaryTypographyProps={{
                sx: {
                  color: '#778',
                  letterSpacing: '-0.5px',
                  fontWeight: '500',
                  fontSize: '16px',
                  fontFamily: 'revert-layer',
                },
              }}
            />
          </ListItemButton>
          <ListItemButton style={{ marginLeft: '14px' }}>
            <ListItemText
              primary="Groups"
              primaryTypographyProps={{
                sx: {
                  color: '#778',
                  letterSpacing: '-0.5px',
                  fontWeight: '500',
                  fontSize: '16px',
                  fontFamily: 'revert-layer',
                },
              }}
            />
          </ListItemButton>
        </React.Fragment>
      )}

      {/* ... other list items ... */}
      <ListItemButton style={{fontSize:'2px'}}>
      
      <ListItemText primary="Business Setup" primaryTypographyProps={{
        sx: {
          color: '#778', letterSpacing:'-0.5px',fontWeight:'500',
          fontSize:'18px',fontFamily:'revert-layer'
        },
      }}/>
      <div>
        <KeyboardArrowDownRoundedIcon style={{ color: '#778' }}/>
       </div>
    </ListItemButton>
   
    <ListItemButton style={{fontSize:'2px'}}>
      
      <ListItemText primary="" primaryTypographyProps={{
        sx: {
          color: '#778', letterSpacing:'-0.5px',fontWeight:'500',
          fontSize:'18px',fontFamily:'revert-layer'
        },
      }}/>
      <div>
        
       </div>
    </ListItemButton>
    <ListItemButton style={{fontSize:'2px'}}>
      
      <ListItemText primary="" primaryTypographyProps={{
        sx: {
          color: '#778', letterSpacing:'-0.5px',fontWeight:'500',
          fontSize:'18px',fontFamily:'revert-layer'
        },
      }}/>
      <div>
        
       </div>
    </ListItemButton>
    <ListItemButton style={{fontSize:'2px'}}>
      
      <ListItemText primary="" primaryTypographyProps={{
        sx: {
          color: '#778', letterSpacing:'-0.5px',fontWeight:'500',
          fontSize:'18px',fontFamily:'revert-layer'
        },
      }}/>
      <div>
        
       </div>
    </ListItemButton>
    </React.Fragment>
  );
};

export const mainListItems = (
  <React.Fragment>
    {/* Logo */}
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-80px' }}>
      <img src={RenoLogo} style={{ width: '100px', height: '100px' }} alt="Logo" />
    </div>

    {/* Search bar */}
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-60px' }}>
      <Search />
    </div>

    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon sx={{ color: '#778', fontSize: '25px' }} />
      </ListItemIcon>
      <ListItemText
        primary="Dashboard"
        primaryTypographyProps={{
          sx: {
            color: '#778',
            letterSpacing: '-0.5px',
            fontWeight: '600',
            fontSize: '16px',
            fontFamily: 'revert-layer',
            marginLeft: '-25px',
          },
        }}
      />
    </ListItemButton>
    
   
    
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <SecondaryListItems />
  </React.Fragment>
);
