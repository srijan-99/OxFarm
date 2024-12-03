import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ButtonSection() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{
        backgroundColor: '#11151c',
        borderRadius: '4px',
        display: 'flex',
        width: '30%', // Set desired width for the button group
        margin: 'auto', // Center the group horizontally
      }}
    >
      <ToggleButton
        value="swap"
        sx={{
          color: '#616771',
          fontWeight: 500,
          flex: 1,
          border: '1px solid #181e27',
          '&.Mui-selected': {
            backgroundColor: '#33363e',
            color: '#ffffff',
          },
        }}
      >
        <a href="https://example.com/swap" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          Native
        </a>
      </ToggleButton>
      <ToggleButton
        value="v2"
        sx={{
          color: '#616771',
          fontWeight: 500,
          flex: 1,
          border: '1px solid #181e27',
          '&.Mui-selected': {
            backgroundColor: '#33363e',
            color: '#ffffff',
          },
        }}
      >
        <a href="https://example.com/v2-liquidity" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          paraswap
        </a>
      </ToggleButton>
      <ToggleButton
        value="l3"
        sx={{
          color: '#616771',
          fontWeight: 500,
          flex: 1,
          border: '1px solid #181e27',
          '&.Mui-selected': {
            backgroundColor: '#33363e',
            color: '#ffffff',
          },
        }}
      >
        <a href="https://example.com/l3-liquidity" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
         OpenOcean
        </a>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
