import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import logo_usk from '/logos/Logo_USK.png'
import logo_usk_dark from '/logos/Logo_USK_dark.png'
import ColorModeIconDropdown from '../SharedTheme/ColorModeIconDropdown';
import { NavLink, useLocation } from 'react-router';
import { Tooltip } from '@mui/material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme).palette.primary.main,
    backgroundColor: alpha(theme.palette.background.default, 0.4),
    boxShadow: (theme).shadows[1],
    padding: '8px 12px',
}));

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();

    const router = useLocation();

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <AppBar
            position="fixed"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                mt: 'calc(var(--template-frame-height, 0px) + 28px)',
            }}
        >
            <Container maxWidth="lg">
                <StyledToolbar variant="dense" disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0, }}>
                        <Tooltip title="Home">
                            <NavLink to='/'>
                                {theme.palette.mode == 'light' ? <img style={{ width: "90px" }} src={logo_usk} alt="Logo" /> : <img style={{ width: "90px" }} src={logo_usk_dark} alt="Logo" />}
                            </NavLink>
                        </Tooltip>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 1,
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                            <NavLink to="/profil">
                                <Button variant={router.pathname == '/profil' ? 'contained' : 'text'} size="small">
                                    Profil
                                </Button>
                            </NavLink>
                            <NavLink to="/materi">
                                <Button variant={router.pathname == '/materi' || router.pathname == '/materi/tuberkulosis_dewasa' || router.pathname == '/materi/tuberkulosis_anak' || router.pathname == '/materi/pmo_tuberkulosis'  ? 'contained' : 'text'} size="small">
                                    Materi
                                </Button>
                            </NavLink>
                            <NavLink to="/edukasi">
                                <Button variant={router.pathname == '/edukasi' ? 'contained' : 'text'} size="small">
                                    Edukasi
                                </Button>
                            </NavLink>
                            <NavLink to="/FAQ">
                                <Button variant={router.pathname == '/FAQ' ? 'contained' : 'text'} size="small" sx={{ minWidth: 0 }}>
                                    FAQ
                                </Button>
                            </NavLink>
                            <NavLink to="/kontak">
                                <Button variant={router.pathname == '/kontak' ? 'contained' : 'text'} size="small" sx={{ minWidth: 0 }}>
                                    Kontak
                                </Button>
                            </NavLink>
                        </Box>
                        <ColorModeIconDropdown />
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                        <ColorModeIconDropdown size="medium" />
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                            PaperProps={{
                                sx: {
                                    top: 'var(--template-frame-height, 0px)',
                                },
                            }}
                        >
                            <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>

                                <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/profil">
                                    <MenuItem sx={{ mb: 1 }} selected={router.pathname == '/profil' ? true : false}>Profil</MenuItem>
                                </NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/materi">
                                    <MenuItem sx={{ mb: 1 }} selected={router.pathname == '/materi' ? true : false}>Materi</MenuItem>
                                </NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/edukasi">
                                    <MenuItem sx={{ mb: 1 }} selected={router.pathname == '/edukasi' ? true : false}>Edukasi</MenuItem>
                                </NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/FAQ">
                                    <MenuItem sx={{ mb: 1 }} selected={router.pathname == '/FAQ' ? true : false}>FAQ</MenuItem>
                                </NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/kontak">
                                    <MenuItem sx={{ mb: 1 }} selected={router.pathname == '/kontak' ? true : false}>Kontak</MenuItem>
                                </NavLink>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}