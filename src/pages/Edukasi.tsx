import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Dialog, Divider, Stack, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useState } from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DownloadIcon from '@mui/icons-material/Download';

import Kepatuhan_Minum_Obat_Tuberkulosis from '/pdf/Kepatuhan_Minum_Obat_Tuberkulosis.pdf'
import TB_RO from '/pdf/TB_RO.pdf'
import TOSS_TB from '/pdf/TOSS_TB.pdf'
import Tuberkulosis_pada_Anak from '/pdf/Tuberkulosis_pada_Anak.pdf'

import Cegah_Anak_dari_TB from '/poster/Cegah_Anak_dari_TB.jpg'
import Gejala_TB from '/poster/Gejala_TB.png'
import Hari_Tuberkulosis from '/poster/Hari_Tuberkulosis.jpg'
import Mengenal_Fakta_Seputar_TB from '/poster/Mengenal_Fakta_Seputar_TB.jpg'
import Obati_Sampai_Penuh from '/poster/Obati_Sampai_Penuh.jpg'
import Periksa_TB from '/poster/Periksa_TB.jpg'
import Tuberkulosis from '/poster/Tuberkulosis.jpg'
import { NavLink } from "react-router";
import SEO from "../utils/SEO";

const leafletData = [
    {
        title: 'Leaflet TOSS TB',
        description:
            'TOSS TBC merupakan sebuah gerakan atau kampanya untuk menemukan tuberkulosis, mendiagnosis, mengobati, dan menyembuhkan pasien tuberkulosis (TBC) di Indonesia.',
        link: TOSS_TB
    },
    {
        title: 'Leaflet TB RO (Tuberkulosis Resistan Obat)',
        description:
            'Selama pengobatan pasien TBC-RO perlu rutin berobat ke rumah sakit setiap bulan untuk memeriksakan dahak dan menjalani berbagai pemeriksaan (berat badan, klinis dan laboratorium).',
        link: TB_RO
    },
    {
        title: 'Leaflet Tuberkulosis pada Anak',
        description:
            'Anak usia 0-14 tahun yang kontak erat dengan pasien TBC Paru, berisiko tinggi untuk tertular dan sakit TBC. Oleh karena itu harus dibawa ke dokter (Puskesmas) untuk menentukan apakah anak tersebut sakit TBC atau tidak.',
        link: Tuberkulosis_pada_Anak
    },
    {
        title: 'Leaflet Kepatuhan Minum Obat Tuberkulosis',
        description:
            'Untuk menghindari komplikasi tidak patuh minum obat salah satunya adalah dengan adanya PMO (Pengawas Minum Obat).',
        link: Kepatuhan_Minum_Obat_Tuberkulosis
    },
]

const posterData = [
    {
        img: Tuberkulosis,
        title: 'Tuberkulosis'
    },
    {
        img: Mengenal_Fakta_Seputar_TB,
        title: 'Mengenal Fakta Seputar TB'
    },
    {
        img: Gejala_TB,
        title: 'Gejala TB'
    },
    {
        img: Periksa_TB,
        title: 'Periksa TB'
    },
    {
        img: Obati_Sampai_Penuh,
        title: 'Obati Sampai Penuh'
    },
    {
        img: Cegah_Anak_dari_TB,
        title: 'Cegah Anak dari TB'
    },
    {
        img: Hari_Tuberkulosis,
        title: 'Hari Tuberkulosis'
    },
]

const videoData = [
    {
        src: 'https://www.youtube.com/embed/EXtUk5WiOAI?si=oxiZtwYK2NwEC5uB',
        title: 'Update Tatalaksana TB Paru dan TB Laten'
    },
    {
        src: 'https://www.youtube.com/embed/2OeHkeor320?si=l7O7sJ1XiqOetk6H',
        title: 'Perbedaan Antara TB Laten dan Aktif dalam Bahasa (aksen dari Indonesia)'
    },
    {
        src: 'https://www.youtube.com/embed/QVokXcE8O0o?si=L7KxcsIyZtJ1zQKw',
        title: 'Tuberkulosis Resisten Obat dalam Bahasa (aksen dari Indonesia)'
    },
    {
        src: 'https://www.youtube.com/embed/A-pXGNcxSmQ?si=8WdFWLwX6EXCtHw5',
        title: 'PMO TB'
    },
    {
        src: 'https://www.youtube.com/embed/t2AwwGee54c?si=GdHLtJIpJC9Iwby-',
        title: 'APA ITU TUBERKULOSIS (TBC) DAN BAGAIMANA PENCEGAHANNYA?'
    },
    {
        src: 'https://www.youtube.com/embed/NbLGlIViUy0?si=ZuzPTw6FxRbbYCa6',
        title: 'ANAK TBC? INI GEJALA DAN CARA MENANGANINYA - DOKTER ANAKKU DOKTER JAHJA'
    },
    {
        src: 'https://www.youtube.com/embed/41LzxgyaGoo?si=RYqBGkJgd4DI5voV',
        title: 'VIDEO EDUKASI TBC PADA ANAK'
    },
    {
        src: 'https://www.youtube.com/embed/G4142KR9A8I?si=ghTDtirESKhTqW1E',
        title: 'What is Tuberculosis (TBC)? - Feat. Indonesian Red Cross'
    },
    {
        src: 'https://www.youtube.com/embed/4OZG86RThT4?si=AIx9FMnSND6bjufA',
        title: 'KENALI DAN WASPADAI TBC PADA ANAK (IKLAN LAYANAN MASYARAKAT)'
    },
]

const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundImage: "url('/bg-card.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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

    ...theme.applyStyles('dark', {
        backgroundImage: "url('/bg-card.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    })
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

const Edukasi = () => {
    const [open, setOpen] = useState(false);
    const [openImage, setOpenImage] = useState(false);
    const [selectedPdfLink, setSelectedPdfLink] = useState('');
    const [selectedImgLink, setSelectedImgLink] = useState('');

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpenImage = (link: string) => {
        setSelectedImgLink(link);
        setOpenImage(true);
    };

    const handleCloseImage = () => {
        setOpenImage(false);
    };

    const handleClickOpen = (link: string) => {
        setSelectedPdfLink(link);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <SEO
                title="Edukasi Tuberkulosis"
                description="Program edukasi interaktif tentang tuberkulosis. Tingkatkan pemahaman Anda tentang TB melalui berbagai metode pembelajaran yang menarik."
                keywords="edukasi tuberkulosis, program edukasi TB, pembelajaran interaktif TB, sosialisasi tuberkulosis"
                url="https://tbcare.vercel.app/edukasi"
            />
            <Box
                id="profil"
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
                            Edukasi
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'center',
                                color: 'text.secondary',
                                width: { sm: '100%', md: '80%' },
                            }}
                        >
                            Berikut beberapa media yang dapat anda lihat dan baca untuk menambah wawasan dan <i>awareness</i> kita bersama terkait bahayanya <strong>TBC</strong> dan mempelajari pencegahan dan penanggulangannya
                        </Typography>
                        <Divider sx={{ width: 400, mx: 'auto', mb: 5 }} />
                    </Stack>
                    <Box sx={{ width: '100%' }}>
                        <Typography
                            component="h2"
                            variant="h4"
                            gutterBottom
                            sx={{ color: 'text.primary' }}
                        >
                            Leaflet
                        </Typography>
                        <Grid container spacing={2} columns={12}>
                            {leafletData.map(item => (
                                <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
                                    <SyledCard
                                        variant="outlined"
                                        tabIndex={0}
                                        sx={{ height: '100%' }}
                                    >
                                        <SyledCardContent
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                height: '100%',
                                            }}
                                        >
                                            <div>
                                                <Chip sx={{ mb: 2 }} label="Downloadable" variant="outlined" />
                                                <Typography gutterBottom variant="h6" component="div">
                                                    {item.title}
                                                </Typography>
                                                <StyledTypography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    gutterBottom
                                                >
                                                    {item.description}
                                                </StyledTypography>
                                            </div>
                                        </SyledCardContent>
                                        <CardActions sx={{ display: 'flex', justifyContent: 'end', m: 2 }}>
                                            <Button
                                                onClick={() => handleClickOpen(item.link)}
                                                variant="outlined"
                                                size="small"
                                                endIcon={<OpenInNewIcon />}
                                            >
                                                Selengkapnya
                                            </Button>
                                        </CardActions>
                                    </SyledCard>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Box sx={{ width: '100%', mt: 10 }}>
                        <Typography
                            component="h2"
                            variant="h4"
                            gutterBottom
                            sx={{ color: 'text.primary' }}
                        >
                            Poster
                        </Typography>
                        <Grid container spacing={2} columns={12}>
                            {posterData.map(item => (
                                <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
                                    <SyledCard
                                        variant="outlined"
                                        tabIndex={0}
                                    >
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            image={item.img}
                                            sx={{
                                                aspectRatio: '16 / 9',
                                                borderBottom: '1px solid',
                                                borderColor: 'divider',
                                            }}
                                        />
                                        <SyledCardContent>
                                            <Typography variant="h6" component="div">
                                                {item.title}
                                            </Typography>
                                        </SyledCardContent>
                                        <CardActions sx={{ display: 'flex', justifyContent: 'end', m: 2 }}>
                                            <Button
                                                href={item.img}
                                                download={item.img}
                                                variant="outlined"
                                                size="small"
                                                endIcon={<DownloadIcon />}
                                            >
                                                Download
                                            </Button>
                                            <Button
                                                onClick={() => handleClickOpenImage(item.img)}
                                                variant="outlined"
                                                size="small"
                                                endIcon={<OpenInNewIcon />}
                                            >
                                                Selengkapnya
                                            </Button>
                                        </CardActions>
                                    </SyledCard>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Box sx={{ width: '100%', mt: 10 }}>
                        <Typography
                            component="h2"
                            variant="h4"
                            gutterBottom
                            sx={{ color: 'text.primary' }}
                        >
                            Video
                        </Typography>
                        <Grid container spacing={2} columns={12}>
                            {videoData.map(item => (
                                <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
                                    <SyledCard
                                        variant="outlined"
                                        tabIndex={0}
                                    >
                                        <CardMedia
                                            component="iframe"
                                            src={item.src}
                                            sx={{
                                                aspectRatio: '16 / 9',
                                                borderBottom: '1px solid',
                                                borderColor: 'divider',
                                            }}
                                        />
                                        <SyledCardContent>
                                            <Typography variant="h6" component="div">
                                                {item.title}
                                            </Typography>
                                        </SyledCardContent>
                                        <CardActions sx={{ display: 'flex', justifyContent: 'end', m: 2 }}>
                                            <NavLink to={item.src} target="_blank">
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    endIcon={<OpenInNewIcon />}
                                                >
                                                    Youtube
                                                </Button>
                                            </NavLink>
                                        </CardActions>
                                    </SyledCard>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Dialog
                fullScreen={fullScreen}
                fullWidth
                maxWidth="xl"
                open={open}
                onClose={handleClose}
            >
                <iframe src={selectedPdfLink} width='100%' height='800px'></iframe>
            </Dialog>
            <Dialog
                fullWidth
                maxWidth="lg"
                open={openImage}
                onClose={handleCloseImage}
            >
                <img style={{ width: '100%', height: 'auto' }} src={selectedImgLink} alt="poster" />
            </Dialog>
        </>
    )
}

export default Edukasi