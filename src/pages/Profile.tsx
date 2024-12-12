import { Box, Card, CardContent, CardMedia, Container, Divider, Stack, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import ami_maisura from '/profil/Ami_Maisura.jpeg'
import arifah_mutia_saroh from '/profil/Arifah_Mutia_Saroh.jpg'
import dara_anjalita from '/profil/Dara_Anjalita.jpeg'
import eka_tlaga_herawati from '/profil/Eka_Tlaga_Herawati.jpeg'
import esa_riolyta from '/profil/Esa_Riolyta.jpeg'
import farhan_saputra from '/profil/Farhan_Saputra.jpg'
import ica_melisa_yofiana from '/profil/Ica_Melisa_Yofiana.jpeg'
import jelvina from '/profil/Jelvina.jpg'
import liska_ainanur from '/profil/Liska_Ainanur.jpg'
import mesya_geubrina_rahmah from '/profil/Mesya_Geubrina_Rahmah.jpg'
import nisa_rifka_afifah from '/profil/Nisa_Rifka_Afifah.jpg'
import nurul_khairani from '/profil/NURUL_KHAIRANI.png'
import rihhadatul_aisy from '/profil/Rihhadatul_Aisy.jpg'
import ula_urzia from '/profil/Ula_Urzia.jpg'
import yolanda from '/profil/Yolanda.jpeg'
import zhada_mawadi from '/profil/Zhada_Mawadi.jpg'
import { useEffect } from "react";

const data = [
    {
        img: ami_maisura,
        name: 'Ami Maisura',
    },
    {
        img: arifah_mutia_saroh,
        name: 'Arifah Mutia Saroh',
    },
    {
        img: dara_anjalita,
        name: 'Dara Anjalita',
    },
    {
        img: eka_tlaga_herawati,
        name: 'Eka Tlaga Herawati',
    },
    {
        img: esa_riolyta,
        name: 'Esa Riolyta',
    },
    {
        img: farhan_saputra,
        name: 'Farhan Saputra',
    },
    {
        img: ica_melisa_yofiana,
        name: 'Ica Melisa Yofiana',
    },
    {
        img: jelvina,
        name: 'Jelvina',
    },
    {
        img: liska_ainanur,
        name: 'Liska Ainanur',
    },
    {
        img: mesya_geubrina_rahmah,
        name: 'Mesya Geubrina Rahmah',
    },
    {
        img: nisa_rifka_afifah,
        name: 'Nisa Rifka Afifah',
    },
    {
        img: nurul_khairani,
        name: 'Nurul Khairani',
    },
    {
        img: rihhadatul_aisy,
        name: 'Rihhadatul Aisy',
    },
    {
        img: ula_urzia,
        name: 'Ula Urzia',
    },
    {
        img: yolanda,
        name: 'Yolanda',
    },
    {
        img: zhada_mawadi,
        name: 'Zhada Mawadi',
    },
]

const Profile = () => {

    useEffect(() => {
        document.title = 'TBC | Profil';
    }, []);

    return (
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
                        Anggota
                    </Typography>
                    <Divider sx={{ width: 400, mx: 'auto', mb: 5 }} />
                </Stack>
                <Grid container spacing={3}>
                    {data.map((item) => {
                        return (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.name}>
                                <Card>
                                    <CardMedia
                                        sx={{ height: '12rem', mb: 2, borderRadius: 1 }}
                                        image={item.img}
                                        title={item.name} 
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Mahasiswa S2 <br /> Fakultas Keperawatan <b>USK</b>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Box>
    )
}

export default Profile