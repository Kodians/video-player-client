import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './SideBar';

const Feed = ({ children }: any) => {
  const [selectedCategory, setSelectedCategory] = useState('New');

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #2F80ED',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#2F80ED' }}
        >
          Copyright
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          <span style={{ color: 'black' }}>{selectedCategory} </span>
          <span style={{ color: '#2F80ED' }}>videos</span>
        </Typography>

        {/* <Videos videos={} /> */}
        {children}
      </Box>
    </Stack>
  );
};

export default Feed;
