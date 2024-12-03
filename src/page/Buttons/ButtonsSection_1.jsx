import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';

export default function BasicButtons() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Stack
      spacing={2}
      direction="row"
      style={{
        marginBottom: '20px',
        marginLeft: isMobile ? '30px' : '50px',
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#1d232e',
          color: '#ffd300',
          height: '40px',
          fontWeight: 400,
          borderRadius: '8px',
          width: 'fit-content',
          padding: '10px 20px',
          '&:hover': {
            backgroundColor: '#33363e',
          },
        }}
      >
        Options
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#1d232e',
          color: '#ffd300',
          height: '40px',
          width: 'fit-content',
          fontWeight: 400,
          borderRadius: '8px',
          padding: '10px 20px',
          '&:hover': {
            backgroundColor: '#33363e',
          },
        }}
      >
        Vaults
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#1d232e',
          color: '#ffd300',
          fontWeight: 400,
          height: '40px',
          width: 'fit-content',
          borderRadius: '8px',
          padding: '10px 20px',
          '&:hover': {
            backgroundColor: '#33363e',
          },
        }}
      >
        Strategy
      </Button>
    </Stack>
  );
}
