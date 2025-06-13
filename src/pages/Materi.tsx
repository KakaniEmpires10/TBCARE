import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Stack, styled, Typography, useTheme } from "@mui/material"
import { NavLink } from "react-router";

import logo_kemenkes from '/logos/Logo_Kemenkes.png';
import logo_kemenkes_dark from '/logos/Logo_Kemenkes_dark.png';
import dewasa from '/thumbnail/dewasa.jpeg';
import anak from '/thumbnail/anak.jpeg';
import pmo from '/thumbnail/pmo.jpeg';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SEO from "../utils/SEO";

const cardData = [
    {
        img: dewasa,
        title: 'Tuberkulosis Dewasa',
        desc: 'TB atau tuberkulosis yang terjadi pada orang dewasa. Ayo Kenali Gejala dan resikonya agar dapat melakukan pengobatan dan pencegahan yang tepat.',
        link: '/materi/tuberkulosis_dewasa'
    },
    {
        img: anak,
        title: 'Tuberkulosis Anak',
        desc: 'TB atau tuberkulosis yang terjadi pada anak-anak. Ayo Kenali Gejala dan resikonya agar dapat melakukan pengobatan dan pencegahan yang tepat.',
        link: '/materi/tuberkulosis_anak'
    },
    {
        img: pmo,
        title: 'PMO Tuberkulosis',
        desc: 'PMO (Pengawas Minum Obat) yaitu seseorang yang bersedia membantu pasien patuh terhadap instruksi dan bersedia untuk diberi penyuluhan bersama-sama dengan pasien.',
        link: '/materi/pmo_tuberkulosis'
    },
]

const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 0,
    height: '100%',
    backgroundColor: (theme).palette.background.paper,
    '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '2px',
    },
}));

const SyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
        paddingBottom: 16,
    },
});

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

const Materi = () => {
    const theme = useTheme()
    return (
        <>
            <SEO
                title="Materi Edukasi Tuberkulosis"
                description="Kumpulan materi edukasi lengkap tentang tuberkulosis meliputi TB dewasa, TB anak, dan panduan PMO untuk mendukung pengobatan yang efektif."
                keywords="materi tuberkulosis, edukasi TB, pembelajaran tuberkulosis, modul TB, panduan pengobatan TB"
                url="https://tbcare.vercel.app/materi"
            />
            <Box
                id="materi"
                sx={(theme) => ({
                    width: '100%',
                    backgroundRepeat: 'no-repeat',

                    backgroundImage:
                        'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
                    ...theme.applyStyles('dark', {
                        backgroundImage:
                            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
                    }),
                })}
            >
                <Container
                    maxWidth='xl'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        pt: { xs: 14, sm: 20 },
                        pb: { xs: 8, sm: 12 },
                    }}
                >
                    <Stack
                        spacing={2}
                        useFlexGap
                        sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                alignItems: 'center',
                                fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                            }}
                        >
                            Materi
                        </Typography>
                        <Divider sx={{ width: 400, mx: 'auto', mb: 5 }} />
                        {cardData.map(item => (
                            <SyledCard
                                key={item.title}
                                sx={{ flexDirection: { sm: 'column', md: 'row' } }}
                                variant="outlined"
                                tabIndex={0}
                            >
                                <CardMedia
                                    component="img"
                                    alt="placeholder"
                                    image={item.img}
                                    sx={{
                                        aspectRatio: '1 / 1',
                                        borderBottom: '1px solid',
                                        borderColor: 'divider',
                                        width: { sm: '100%', md: '16rem' }
                                    }}
                                />
                                <div>
                                    <SyledCardContent sx={{ flex: '1 0 auto' }}>
                                        {theme.palette.mode == 'light' ? <img style={{ width: "90px", marginLeft: '-7px' }} src={logo_kemenkes} alt="Logo" /> : <img style={{ width: "90px", marginLeft: '-7px' }} src={logo_kemenkes_dark} alt="Logo" />}
                                        <Typography gutterBottom variant="h6" component="div">
                                            {item.title}
                                        </Typography>
                                        <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                            {item.desc}
                                        </StyledTypography>
                                    </SyledCardContent>
                                    <CardActions sx={{ m: 2 }}>
                                        <NavLink to={item.link} target="_blank">
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                endIcon={<OpenInNewIcon />}
                                            >
                                                Selengkapnya
                                            </Button>
                                        </NavLink>
                                    </CardActions>
                                </div>
                            </SyledCard>
                        ))}
                    </Stack>
                </Container>
            </Box>
        </>
    )
}

export default Materi