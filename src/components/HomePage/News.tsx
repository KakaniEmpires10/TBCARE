import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Dialog, styled, Typography, useMediaQuery, useTheme } from "@mui/material"
import Grid from '@mui/material/Grid2';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import logo_kemenkes from '/logos/Logo_Kemenkes.png';
import logo_kemenkes_dark from '/logos/Logo_Kemenkes_dark.png';
import thumb_1 from '/thumbnail/thumb_1.jpeg'
import thumb_2 from '/thumbnail/thumb_2.jpeg'
import thumb_3 from '/thumbnail/thumb_3.png'
import Laporan_Tuberkulosis_2023_Dunia from '/pdf/Laporan_Tuberkulosis_2023_Dunia.pdf'
import Laporan_Tuberkulosis_Indonesia_2022 from '/pdf/Laporan_Tuberkulosis_Indonesia_2022.pdf'

import { NavLink } from "react-router";
import { useState } from "react";

const cardData = [
    {
        img: thumb_1,
        title: 'Apa yang dimaksud Tuberkulosis?',
        description:
            'Tuberkulosis, sering disingkat TB atau TBC, adalah penyakit menular yang disebabkan oleh bakteri Mycobacterium tuberculosis. Penyakit ini dapat menyerang siapa saja dan organ tubuh yang diserang biasanya adalah paru-paru, tulang belakang, kulit, otak, kelenjar getah bening, dan jantung.',
        link: 'https://ayosehat.kemkes.go.id/topik-penyakit/pencegahan-infeksi-bagi-bayi-dan-balita/tuberkulosis'
    },
    {
        img: thumb_2,
        title: 'Tuberkulosis Sensitif Obat',
        description:
            'Tuberkulosis adalah sebuah kondisi infeksi yang dapat menimbulkan dampak serius. Penyakit ini bisa menyerang berbagai bagian tubuh, walaupun sering kali menginfeksi paru-paru.',
        link: 'https://ayosehat.kemkes.go.id/topik-penyakit/infeksi-pernapasan--tb/tuberkulosis-sensitif-obat#:~:text=Tuberkulosis%20adalah%20sebuah%20kondisi%20infeksi%20serius%20yang%20bisa%20menyerang%20berbagai,dilepaskan%20saat%20batuk%20atau%20bersin.'
    },
    {
        img: thumb_3,
        title: 'Temukan, Obati Tuberkulosis (TBC) Sampai Sembuh',
        description:
            'TOSS TBC merupakan sebuah gerakan atau kampanya untuk menemukan tuberkulosis, mendiagnosis, mengobati, dan menyembuhkan pasien tuberkulosis (TBC) di Indonesia.',
        link: 'https://www.tbindonesia.or.id/'
    },
];

const viewData = [
    {
        title: 'Laporan Tuberkulosis Dunia 2023',
        description:
            'Formulir pengumpulan data dikembangkan oleh Hazim Timimi, dengan masukan dari staf di seluruh Program Tuberkulosis Global WHO. Hazim Timimi memimpin dan mengatur semua aspek pengelolaan data dan kode, termasuk persiapan dan implementasi sistem web yang digunakan untuk pengumpulan data tuberkulosis (TB) global tahun 2023 dari 215 negara dan wilayah, dengan dukungan dari Simone Gigli dan Veemalla Thevi.',
        link: Laporan_Tuberkulosis_2023_Dunia
    },
    {
        title: 'Laporan Tuberkulosis Dunia 2022',
        description:
            'Tuberkulosis (TBC) merupakan salah satu 10 penyebab kematian tertinggi di seluruh dunia dan penyebab utama kematian dari agen infeksius.  Secara global diperkirakan 10.6 juta (range 9,8-11,3 juta) orang sakit TBC; 1,4 juta (range 1,3-1,5 juta) kematian akibat TBC termasuk HIV-negatif dan 187.000 kematian (range 158.000–218.000) termasuk HIV-positif.',
        link: Laporan_Tuberkulosis_Indonesia_2022
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

const News = () => {
    const [open, setOpen] = useState(false);
    const [selectedPdfLink, setSelectedPdfLink] = useState('');

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = (link: string) => {
        setSelectedPdfLink(link);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Container sx={{ py: { xs: 8, sm: 16 } }}>
                <Box sx={{ width: { sm: '100%', md: '60%' } }}>
                    <Typography
                        component="h2"
                        variant="h4"
                        gutterBottom
                        sx={{ color: 'text.primary' }}
                    >
                        Berita
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
                    >
                        Berikut beberapa berita terkait TB (Tuberkulosis).
                    </Typography>
                </Box>
                <Grid container spacing={2} columns={12}>
                    {cardData.map(item => (
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
                                    {theme.palette.mode == 'light' ? <img style={{ width: "120px", marginLeft: '-7px' }} src={logo_kemenkes} alt="Logo" /> : <img style={{ width: "100px", marginLeft: '-7px' }} src={logo_kemenkes_dark} alt="Logo" />}
                                    <Typography gutterBottom variant="h6" component="div">
                                        {item.title}
                                    </Typography>
                                    <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                        {item.description}
                                    </StyledTypography>
                                </SyledCardContent>
                                <CardActions sx={{ display: 'flex', justifyContent: 'end', m: 2 }}>
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
                            </SyledCard>
                        </Grid>
                    ))}
                    {viewData.map(item => (
                        <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
                            <SyledCard
                                variant="outlined"
                                tabIndex={0}
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
            </Container>
            <Dialog
                fullScreen={fullScreen}
                fullWidth
                maxWidth="xl"
                open={open}
                onClose={handleClose}
            >
                <iframe src={selectedPdfLink} width='100%' height='800px'></iframe>
            </Dialog>
        </>
    )
}

export default News