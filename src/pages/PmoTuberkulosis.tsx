import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

import pmo_1 from '/materi/pmo_1.png'

const PmoTuberkulosis = () => {

    useEffect(() => {
        document.title = 'PMO Tuberkulosis';
    }, []);

    return (
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
                            textAlign: 'center',
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: 'center',
                            fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                        }}
                    >
                        PMO Tuberkulosis
                    </Typography>
                    <Divider sx={{ width: 400, mx: 'auto', mb: 5 }} />
                </Stack>
            </Container>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Apa Itu PMO ?</Typography>
                        <Typography
                            sx={{
                                color: 'text.secondary',
                            }}
                        >
                            ( Pengawas Minum Obat )
                        </Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <Typography gutterBottom component="p" variant="body1">Seseorang yang dikenal, dapat dipercaya, dan tinggal dekat dengan pasien, bersedia membantu pasien, patuh terhadap instruksi dan bersedia untuk diberi penyuluhan bersama- sama dengan pasien.</Typography>
                    </Box>
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={pmo_1} alt="pmo_1" />
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box component='article'>
                    <Typography component="h2" variant="h4">Tugas PMO</Typography>
                    <Divider sx={{ my: 2, width: '5rem' }} />
                    <ul style={{ paddingLeft: '16px' }}>
                        <li style={{ marginBottom: '0.8rem' }}>Berat badan turun/tidak naik dalam 2 bulan terakhir, tidak membaik dengan asupan gizi yang baik</li>
                        <li style={{ marginBottom: '0.8rem' }}>Demam lama lebih ≥ 2 minggu dan/atau berulang tanpa sebab. Demam umumnya tidak tinggi</li>
                        <li style={{ marginBottom: '0.8rem' }}>Batuk lama ≥ 2 minggu. Batuk terus menerus, tidak membaik dengan pengobatan lain sesuai indikasi</li>
                        <li style={{ marginBottom: '0.8rem' }}>Lesu dan anak kurang aktif bermain</li>
                    </ul>
                </Box>
            </Container>
        </Box>
    )
}

export default PmoTuberkulosis