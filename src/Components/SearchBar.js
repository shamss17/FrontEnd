import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { SearchOutlined } from '@ant-design/icons';
import InputLabel from '@mui/material/InputLabel';
import React, { useState } from 'react';

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', marginTop: '60px' }}>
      <FormControl sx={{ width: { xs: '100%', md: 220 } }}>
        <InputLabel
          sx={{
            width: { xs: '100%', md: 150 },
            marginTop: '16px',
            fontWeight: '500',
            fontSize: '24px',
            fontFamily: 'revert-layer',
            color: '#889',
            display: isFocused ? 'none' : 'block', // Conditionally display based on focus
          }}
        >
          Quick access
        </InputLabel>
        <OutlinedInput
          size="small"
          id="header-search"
          startAdornment={
            <InputAdornment position='start' sx={{ marginLeft: '180px' }}>
              <SearchOutlined />
            </InputAdornment>
          }
          onFocus={handleInputFocus} // Track input focus
          onBlur={handleInputBlur} // Track input blur
          aria-describedby="header-search-text"
          inputProps={{
            'aria-label': 'weight',
          }}
          sx={{
            backgroundColor: 'white',
            borderRadius: '25px',
            height: '40px',
          }}
        />
      </FormControl>
    </Box>
  );
};

export default Search;