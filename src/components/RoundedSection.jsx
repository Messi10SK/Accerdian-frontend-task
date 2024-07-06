import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function RoundedSection() {
  return (
    <Box
      className="bg-blue-100 rounded-3xl p-4 m-4 flex flex-row items-center justify-around"
      sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
    >
      <Link to="/refer">
        <Typography variant="h6" component="div" className="text-black mx-2">
          Refer
        </Typography>
      </Link>
      <Link to="/benefits">
        <Typography variant="h6" component="div" className="text-black mx-2">
          Benefits
        </Typography>
      </Link>
      <Link to="/faqs">
        <Typography variant="h6" component="div" className="text-black mx-2">
          FAQs
        </Typography>
      </Link>
      <Link to="/support">
        <Typography variant="h6" component="div" className="text-black mx-2">
          Support
        </Typography>
      </Link>
    </Box>
  );
}
