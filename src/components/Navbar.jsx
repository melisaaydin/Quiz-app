import React from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import '../css/Navbar.css'
import Stack from '@mui/material/Stack';
function Navbar() {

    return (
        // <div className='navbar'>
        //     <nav>
        //         <h2>
        //             <Link className='links' to="/">TRY YOURSELF</Link>
        //         </h2>
        //         <ul>
        //             <li>
        //                 <Link className='links' to="/about">About</Link>
        //             </li>
        //             <li>
        //                 <Link className='links' to="/contact">Contact</Link>
        //             </li>
        //             <li>
        //                 <Link className='links' to="/startquiz">Start Quiz</Link>
        //             </li>
        //             <li>
        //                 <Link className='links' to="/signin">Sign In</Link>
        //             </li>
        //         </ul>
        //     </nav>
        // </div>
        <Box>
            <AppBar position='standard' style={{ background: '#9dabd8' }}>
                <Toolbar>
                    <Typography variant='h6' style={{ flexGrow: 1 }}><Link className='links' to="/">QUIZ</Link></Typography>
                    <Stack direction="row" spacing={2}>
                        {/* <Button > <Link className='links' to="/about">About</Link> </Button> */}
                        {/* <Button> <Link className='links' to="/contact">Contact</Link> </Button> */}
                        <Button> <Link className='links' to="/startquiz">Start Quiz</Link> </Button>
                        <Button> <Link className='links' to="/signin">Sign In</Link> </Button>
                    </Stack>
                </Toolbar>

            </AppBar>
        </Box>
    )
}

export default Navbar