import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

import anak_1 from '/materi/anak_1.png'
import anak_2 from '/materi/anak_2.png'
import anak_3 from '/materi/anak_3.png'
import anak_4 from '/materi/anak_4.png'
import anak_5 from '/materi/anak_5.png'
import anak_6 from '/materi/anak_6.png'

const TbAnak = () => {

    useEffect(() => {
        document.title = 'Tuberkulosis Anak';
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
                        Tuberkulosis Anak
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
                        <Typography gutterBottom component="p" variant="body1" sx={{ fontWeight: 'bold' }}>Bila terdapat salah satu gejala yaitu:</Typography>
                        <ol style={{ paddingLeft: '15px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Batuk ≥ 2 minggu</li>
                            <li style={{ marginBottom: '0.8rem' }}>Demam ≥ 2 minggu</li>
                            <li style={{ marginBottom: '0.8rem' }}>Berat badan turun/tidak naik selama 2 bulan berturut - turut</li>
                            <li style={{ marginBottom: '0.8rem' }}>Malaise ≥ 2 minggu</li>
                        </ol>
                        <Typography gutterBottom component="p" variant="body1" sx={{ fontWeight: 'bold' }}>Gejala tersebut menetap walau sudah diberikan terapi yang adekuat</Typography>
                    </Box>
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={anak_1} alt="anak_1" />
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={anak_2} alt="anak_2" />
                    </Box>
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Gejala TB pada Anak</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <Typography gutterBottom component="p" variant="body1">Batuk bukan gejala utama TB pada anak</Typography>
                        <Typography component="h4" variant="h6">Gejalanya adalah:</Typography>
                        <ol>
                            <li style={{ marginBottom: '0.8rem' }}>Berat badan turun/tidak naik dalam 2 bulan terakhir, tidak membaik dengan asupan gizi yang baik</li>
                            <li style={{ marginBottom: '0.8rem' }}>Demam lama lebih ≥ 2 minggu dan/atau berulang tanpa sebab. Demam umumnya tidak tinggi</li>
                            <li style={{ marginBottom: '0.8rem' }}>Batuk lama ≥ 2 minggu. Batuk terus menerus, tidak membaik dengan pengobatan lain sesuai indikasi</li>
                            <li style={{ marginBottom: '0.8rem' }}>Lesu dan anak kurang aktif bermain</li>
                        </ol>
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Siapa yang Beresiko</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <ol style={{ paddingLeft: '15px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Anak di bawah 5 tahun</li>
                            <li style={{ marginBottom: '0.8rem' }}>Anak dengan HIV</li>
                            <li style={{ marginBottom: '0.8rem' }}>Anak dengan kekebalan tubuh rendah/keadaan gizi buruk</li>
                            <li style={{ marginBottom: '0.8rem' }}>Anak yang kontak erat dekat dengan pasien TB</li>
                        </ol>
                    </Box>
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={anak_3} alt="anak_3" />
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={anak_4} alt="anak_4" />
                    </Box>
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Pemeriksaan TB pada Anak</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <ul style={{ paddingLeft: '15px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Melalui pemeriksaan dahak dengan mikroskopis atau menggunakan Tes Cepat Molekuler</li>
                            <li style={{ marginBottom: '0.8rem' }}>Bila tidak bisa diambil dahaknya atau hasilnya negatif dan ada akses tuberkulin atau foto toraks, pemeriksaan TB anak dilakukan penilaian dengan sistem pembobotan (scoring system) gejala dan pemeriksaan penunjang.</li>
                            <li style={{ marginBottom: '0.8rem' }}><strong>YANG DINILAI DALAM SISTEM PEMBOBOTAN :</strong>
                                <ol style={{ paddingLeft: '15px' }}>
                                    <li>Batuk</li>
                                    <li>Berat badan/keadaan gizi</li>
                                    <li>Demam tanpa sebab jelas</li>
                                    <li>Kontak TB</li>
                                    <li>Uji tuberkulin</li>
                                    <li>Pemeriksaan kelenjar limfe koli, aksila, inguinal</li>
                                    <li>Pembengkakan tulang/sendi panggul, lutut, phalangs (jari tangan dan kaki)</li>
                                    <li>Foto ronsen dada</li>
                                </ol>
                            </li>
                        </ul>
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Pengobatan</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <ul style={{ paddingLeft: '15px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Dengan OAT Anak yang diminum setiap hari selama 6 bulan dan diminum di depan pengawas menelan obat</li>
                            <li style={{ marginBottom: '0.8rem' }}>Tersedia gratis dan berkualitas di layanan kesehatan Puskesmas, Rumah Sakit atau Fasyankes lainnya</li>
                        </ul>
                    </Box>
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={anak_5} alt="anak_5" />
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={anak_6} alt="anak_6" />
                    </Box>
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Pencegahan</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <Typography component="h4" variant="h6">Vaksinasi BCG</Typography>
                        <ol style={{ paddingLeft: '16px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Vaksinasi BCG tidak mencegah terjadinya TB namun dapat memberikan perlindungan pada anak dari penyakit TB berat seperti TB selaput otak, TB tulang atau TB millier</li>
                            <li style={{ marginBottom: '0.8rem' }}>Vaksinasi BCG sebaiknya diberikan pada pada umur 0 s.d. 2 bulan dan sebaiknya ditunda bila ibu dalam pengobatan TB atau sakit TB.</li>
                        </ol>
                        <Typography component="h4" variant="h6" sx={{ mt: 5 }}>PP INH</Typography>
                        <ol style={{ paddingLeft: '16px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Anak yang kontak dengan pasien TB memiliki risiko untuk terinfeksi TB dan menjadi TB laten. Risiko ini akan semakin meningkat jika kasus indeks adalah ibu atau orang yang mengasuh anak tersebut.</li>
                            <li style={{ marginBottom: '0.8rem' }}>TB laten pada anak, bila tidak diberi pengobatan pencegahan, memiliki risiko lebih besar menjadi sakit TB.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Jika sakit TB, anak berisiko lebih tinggi untuk menderita TB berat seperti meningitis TB dan TB milier dengan risiko kematian yang tinggi</li>
                            <li style={{ marginBottom: '0.8rem' }}>Pemberian Pengobatan Pencegahan dengan INH (PP INH) bertujuan untuk mencegah TB laten pada anak menjadi sakit TB</li>
                            <li style={{ marginBottom: '0.8rem' }}>Efek perlindungan PP INH dengan pemberian selama 6 bulan dapat menurunkan risiko TB pada anak tersebut dimasa datang.</li>
                            <li style={{ marginBottom: '0.8rem' }}>PP INH diberikan pada anak usia kurang dari 5 tahun yang kontak pasien TB atau pada anak terinfeksi</li>
                        </ol>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default TbAnak