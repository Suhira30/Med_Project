import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Sample from './sample';
import Container from '@mui/material/Container';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function Sidebar() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const matches1 = useMediaQuery(theme.breakpoints.up('sm'));

    const drawerWidth = matches ? 200 : matches1 ? 170 : 130;
    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(5, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    return (
        <Box sx={{ display: 'flex', }}>
            <CssBaseline />

            {/* AppBar */}
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'primary.dark' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ marginRight: 2 }}
                    >
                        {open ? <MenuOpenIcon /> : <MenuIcon />}
                    </IconButton>
                    <Typography variant="h6" >
                        Medical Faculty Project, UoJ
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Drawer (Sidebar) */}
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        borderRight: '1px dashed #BEC8D0'
                    },
                }}
            >
                <Toolbar />

                <Box sx={{ overflow: 'auto', }}>
                    <List sx={{ alignItems: 'center', margin: '10px 0 0 10px' }}>
                        {['Dashboard', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}
                                sx={{
                                    cursor: 'pointer',
                                    borderRadius: '20px 0 0 20px',
                                    margin: '0 0 8px 0',
                                    '&:hover': {
                                        backgroundColor: '#f0f2f4'
                                    }
                                }}
                            >
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon sx={{ fontSize: '21px', color: '#5B6B79' }} /> : <MailIcon sx={{ fontSize: '21px', color: '#5B6B79' }} />}
                                </ListItemIcon>
                                <ListItemText primary={<Typography color='#5B6B79' variant='subtitle2' sx={{ marginLeft: '0px' }}>{text}</Typography>} sx={{ marginLeft: '-20px', }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            {/* Main Content */}

            <Container maxWidth='lg'>
                <DrawerHeader />
                <Box sx={{
                    backgroundColor: 'secondary.lighter',
                    border: '1px dashed #BEC8D0',
                    borderRadius: '20px',
                    p: 3,
                    transition: 'margin 0.3s',
                    marginLeft: !open ? `-${drawerWidth}px` : 0
                }}>
                    <Sample />
                </Box>
                {/* <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        transition: 'margin 0.3s',
                        marginLeft: open ? `${drawerWidth}px` : 0,
                        backgroundColor: '#faf7f0',
                        borderRadius: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center items horizontally
                        // justifyContent: 'center', // Center items vertically
                        height: '100vh', // Fill the height of the viewport
                    }}
                >
                    <Toolbar />
                    
                    <Sample />
                </Box> */}
            </Container>
        </Box>
    );
}

export default Sidebar;
