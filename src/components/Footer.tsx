import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo_usk from '/logos/Logo_USK.png';
import logo_usk_dark from '/logos/Logo_USK_dark.png';
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';
import LinkIcon from '@mui/icons-material/Link';
import { Card, Divider, useTheme } from '@mui/material';
import { NavLink } from 'react-router';

const items = [
    {
        icon: <MapIcon sx={{ color: 'text.secondary' }} />,
        title: 'Alamat',
        description:
            'Jl. Tgk Tanoh Abee, Gedung Petronas Fakultas Keperawatan Universitas Syiah Kuala, Kopelma Darussalam, Banda Aceh 23111. (0651) 8053041',
    },
    {
        icon: <EmailIcon sx={{ color: 'text.secondary' }} />,
        title: 'Email',
        description:
            'tuberkulosisfkepusk@gmail.com',
    },
];

function Copyright() {
    return (
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            {'Copyright © '}
            <Link style={{ fontWeight: 'bold' }} color="text.secondary" href="#">
                tbcare.id
            </Link>
            &nbsp;
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    const theme = useTheme()

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 8, sm: 10 },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        minWidth: { xs: '100%', sm: '60%' },
                    }}
                >
                    <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
                        {theme.palette.mode == 'light' ? <img style={{ width: "100px", marginLeft: '-7px' }} src={logo_usk} alt="Logo" /> : <img style={{ width: "100px", marginLeft: '-7px' }} src={logo_usk_dark} alt="Logo" />}
                        <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
                            Together We Can End TB
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            Mari bersatu melawan TBC! Dengan kerja sama, kesadaran, dan tindakan nyata, kita bisa mengakhiri penyebaran TBC. Setiap langkah kecil yang kita ambil hari ini adalah harapan besar bagi masa depan tanpa TBC. Bersama, kita bisa wujudkan dunia yang lebih sehat.
                        </Typography>
                    </Box>
                </Box>
                <Card sx={{ flexBasis: { xs: 'auto', sm: '60rem' } }}>
                    <Typography gutterBottom variant='h6' sx={{ mb: 2 }}>Hubungi Kami di :</Typography>
                    <Stack
                        sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
                    >
                        {items.map((item, index) => (
                            <Stack key={index} direction="row" sx={{ gap: 2 }}>
                                {item.icon}
                                <div>
                                    <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {item.description}
                                    </Typography>
                                </div>
                            </Stack>
                        ))}
                        <Stack direction="row" sx={{ gap: 2 }}>
                            <LinkIcon />
                            <Link component={NavLink} to='/kontak' sx={{ fontWeight: 'bold', mb: 2 }}>
                                Halaman Kontak
                            </Link>
                        </Stack>
                    </Stack>
                </Card>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 4, sm: 8 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <div>
                    <Copyright />
                </div>
                <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    sx={{ justifyContent: 'left', color: 'text.secondary' }}
                >
                    <Box
                        sx={(theme) => ({
                            py: 1,
                            px: 2,
                            borderRadius: 2,
                            border: 1,
                            borderColor: theme.palette.divider
                        })}
                    >
                        Semoga Membantu 🙏
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
}