import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
   <div className="bg-blue-100 pt-2 flex items-center justify-center ">
        <h1 className="text-black text-l  mr-4">
          Navigate your ideal career path with tailored expert advice
        </h1>
        <button className="bg-blue-100 text-blue-700 hover:bg-blue-200 py-2 px-4 rounded">
          <Link to='/contactexpert' className="text-blue-700 hover:text-blue-800">
            Contact Expert
          </Link>
        </button>
      </div>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , }}>
            <Link to="/" className='p-2'>
            Accerdian
            </Link>
            <Button
             variant="contained" color="primary"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
              endIcon={<ArrowDropDownIcon />}
            >
              Courses
            </Button>
          </Typography>
          <div>
           
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link to="/course1" >
                  Course 1
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/course2" >
                  Course 2
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/course3" >
                  Course 3
                </Link>
              </MenuItem>
            </Menu>
          </div>
          <Button color="inherit">
            <Link to="/refer-earn" >
              Refer & Earn
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/resources" >
              Resources
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/about-us" style={{ textDecoration: 'none', color: 'black' }}>
              About Us
            </Link>
          </Button>
          <Button
            variant="outlined"
            color="primary"
            style={{ marginRight: '8px' }}
          >
            <Link to="/login" style={{ textDecoration: 'none', color: 'blue' }}>
              Login
            </Link>
          </Button>
          <Button variant="contained" color="primary">
            <Link to="/try-for-free" style={{ textDecoration: 'none', color: 'white' }}>
              Try for Free
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
