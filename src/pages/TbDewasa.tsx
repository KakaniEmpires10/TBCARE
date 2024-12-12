import { Alert, AlertTitle, Box, Card, CardContent, Container, Divider, Stack, styled, Typography } from "@mui/material";
import { useEffect } from "react";

import dewasa_1 from '/materi/dewasa_1.png'
import dewasa_2 from '/materi/dewasa_2.png'
import dewasa_3 from '/materi/dewasa_3.png'
import dewasa_4 from '/materi/dewasa_4.png'
import dewasa_5 from '/materi/dewasa_5.png'
import dewasa_6 from '/materi/dewasa_6.png'
import dewasa_7 from '/materi/dewasa_7.png'
import dewasa_8 from '/materi/dewasa_8.png'
import dewasa_9 from '/materi/dewasa_9.png'
import dewasa_10 from '/materi/dewasa_10.png'
import dewasa_11 from '/materi/dewasa_11.png'
import dewasa_12 from '/materi/dewasa_12.png'
import dewasa_13 from '/materi/dewasa_13.png'
import dewasa_14 from '/materi/dewasa_14.png'
import dewasa_15 from '/materi/dewasa_15.png'
import dewasa_16 from '/materi/dewasa_16.png'
import dewasa_17 from '/materi/dewasa_17.png'
import dewasa_18 from '/materi/dewasa_18.png'
import dewasa_19 from '/materi/dewasa_19.png'
import dewasa_20 from '/materi/dewasa_20.png'

const SyledCard = styled(Card)(({ theme }) => ({
    padding: 0,
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

const TbDewasa = () => {

    useEffect(() => {
        document.title = 'Tuberkulosis Dewasa';
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
                        TOSS TB
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            color: 'text.secondary',
                            width: { sm: '100%', md: '80%' },
                        }}
                    >
                        ( Temukan Obati Sampai Sembuh Tuberkulosis )
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
                        <Typography component="h2" variant="h4">Apa Itu TB ?</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <Typography gutterBottom component="p" variant="body1">TB atau tuberculosis adalah penyakit menular yang disebabkan kuman Mycobacterium tuberculosis. TB dikenal orang dengan sebutan TBC, penyakit 3 huruf, paru-paru basah, flek paru dll. Kuman TB paling sering menyerang paru-paru tetapi juga dapat menyerang organ tubuh lainnya seperti kelenjar getah bening, tulang, otak, kulit dll.</Typography>
                        <Typography component="p" variant="body1"><strong>TB bukan penyakit keturunan atau guna-guna.</strong></Typography>
                    </Box>
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_1} alt="dewasa_1" />
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_2} alt="dewasa_2" />
                    </Box>
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Gejala TB</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <Typography component="h4" variant="h6">Gejala Utama :</Typography>
                        <ul>
                            <li style={{ marginBottom: '0.8rem' }}>Batuk terus - menerus (berdahak maupun tidak berdahak)</li>
                        </ul>
                        <Typography component="h4" variant="h6">Gejala Lainnya :</Typography>
                        <ol>
                            <li style={{ marginBottom: '0.8rem' }}>Demam meriang berkepanjangan</li>
                            <li style={{ marginBottom: '0.8rem' }}>Sesak nafas dan nyeri dada</li>
                            <li style={{ marginBottom: '0.8rem' }}>Berat badan menurun</li>
                            <li style={{ marginBottom: '0.8rem' }}>Kadang dahak bercampur darah</li>
                            <li style={{ marginBottom: '0.8rem' }}>Nafsu makan menurun</li>
                            <li style={{ marginBottom: '0.8rem' }}>Berkeringat di malam hari meski tanpa melakukan kegiatan</li>
                        </ol>

                        <Alert sx={{ mt: 2, border: 1 }} severity="warning">Bila ada yang mempunyai gejala-gejala tersebut segera periksa ke layanan kesehatan terdekat.</Alert>
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Penularan TB</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <ul style={{ paddingLeft: '15px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Penularan TB terjadi melalui udara dari percikan dahak pasien TB yang batuk tanpa menutup mulut.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Jika udara yang mengandung kuman TB tadi terhirup maka terdapat kemungkinan kita terkena infeksi TB namun tidak selalu berarti kita akan sakit TB, bisa jadi kuman TB tersebut ‘tidur’(dormant) dalam badan kita. Kuman ‘tidur’ tidak membuat kita sakit TB dan kita juga tidak dapat menularkan ke orang lain.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Jika daya tubuh menurun kuman TB yang ‘tidur’ ini menjadi aktif dan memperbanyak diri, maka kita menjadi sakit TB.</li>
                        </ul>

                        <Typography gutterBottom component="p" variant="body1"><strong>TB tidak menular melalui perlengkapan pribadi si pasien yang sudah dibersihkan seperti peralatan makan, pakaian atau tempat tidur yang digunakan oleh pasien TB.</strong></Typography>

                        <Alert sx={{ mt: 2, border: 1 }} severity="info">
                            <AlertTitle><strong>Catatan</strong></AlertTitle>
                            <Typography gutterBottom component="p" variant="body1">Petugas kesehatan harus menjelaskan jika ada pertanyaan tentang penggunaan perlengkapan pribadi. langkah langkah yang harus dilakukan :</Typography>
                            <ol style={{ paddingLeft: '15px' }}>
                                <li>Menenangkan pasien agar jangan khawatir.</li>
                                <li>Jelaskan bahwa peralatan makan harus dicuci dengan sabun sampai bersih.</li>
                                <li>Jelaskan bahwa jendela di kamar/rumah harus dibuka setiap pagi agar sinar matahari dapat masuk ke dalam kamar, serta menjemur kasur secara berkala.</li>
                            </ol>
                        </Alert>
                    </Box>
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_3} alt="dewasa_3" />
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_4} alt="dewasa_4" />
                    </Box>
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Siapa yang Paling Beresiko Sakit TB ?</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <ol style={{ paddingLeft: '15px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Siapa saja dapat tertular TB tetapi belum tentu menjadi sakit</li>
                            <li style={{ marginBottom: '0.8rem' }}>Orang dengan imunitas atau daya tahan tubuh rendah yang paling berisiko yaitu:
                                <ul style={{ paddingLeft: '15px' }}>
                                    <li>Anak</li>
                                    <li>Orang dengan HIV/AIDS</li>
                                    <li>Orang usia lanjut</li>
                                    <li>Penyandang Diabetes Mellitus</li>
                                    <li>Perokok</li>
                                </ul>
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>Orang kontak erat atau kontak serumah dengan pasien TB</li>
                        </ol>
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Pemeriksaan TB</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <ol style={{ paddingLeft: '15px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>TB dapat diketahui melalui pemeriksaan dahak</li>
                            <li style={{ marginBottom: '0.8rem' }}>Kuman TB dilihat dengan mikroskopis atau dengan menggunakan mesin Tes Cepat Molekuler (TCM)</li>
                            <li style={{ marginBottom: '0.8rem' }}>Dibutuhkan 2 kali pengambilan dahak pasien yaitu saat datang ke layanan (Sewaktu) dan dahak pagi sesaat setelah bangun tidur (Pagi) atau sebaliknya Pagi dan sewaktu (saat pasien mengantar dahak pagi ke layanan)</li>
                            <li style={{ marginBottom: '0.8rem' }}>Petugas bisa menambahkan informasi fasilitas pemeriksaan yang ada di layanannya, mikroskop atau TCM</li>
                        </ol>
                    </Box>
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_5} alt="dewasa_5" />
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_6} alt="dewasa_6" />
                    </Box>
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Cara Mengeluarkan Dahak yang Benar</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <ol style={{ paddingLeft: '15px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Tarik nafas dalam - dalam sebanyak 3 kali, lalu sentakkan untuk mengeluarkan dahak dari paru-paru</li>
                            <li style={{ marginBottom: '0.8rem' }}>Bila sulit dilakukan, dapat dibantu dengan cara:
                                <ul style={{ paddingLeft: '15px' }}>
                                    <li>Berkumur - kumur dengan air bersih</li>
                                    <li>Lari-lari kecil di tempat</li>
                                    <li>Atau minum teh manis hangat</li>
                                </ul>
                            </li>
                        </ol>

                        <Typography gutterBottom component="p" variant="body1">Kumpulkan dahak di pot dahak yang diberikan oleh petugas. Jangan lupa cuci tangan dengan sabun dan air mengalir setelahnya.</Typography>

                        <Alert sx={{ mt: 2, border: 1 }} severity="info">Warna dahak yang benar adalah berwarna putih kekuning - kuningan atau kehijauan dan bentuknya lebih kental dari liur</Alert>
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Mencegah Penularan TB</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <ol style={{ paddingLeft: '15px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Minumlah obat teratur. Setelah 2 minggu minum obat , maka jumlah kuman akan berkurang dan tidak akan menular ke orang lain.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Pasien TB harus menutup mulutnya pada waktu batuk atau bersin.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Tidak membuang dahak sembarangan. Membuang dahak di tempat khusus dan tertutup seperti ke lubang wc atau wastafel dengan mengalirkan atau menyiram air pada dahak yang telah dibuang.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Rumah tinggal harus mempunyai ventilasi udara yang baik agar sirkulasi udara berjalan lancar dan ruang/kamar mendapatkan cahaya matahari.</li>
                        </ol>
                    </Box>
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_7} alt="dewasa_7" />
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_8} alt="dewasa_8" />
                    </Box>
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Etika Batuk</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <Typography gutterBottom component="p" variant="body1" sx={{ fontWeight: 'bold' }}>Untuk mencegah penularan bapak/ibu juga harus menjalankan etika batuk:</Typography>
                        <ol style={{ paddingLeft: '15px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Gunakan masker, terutama bila anda sedang berada di keramaian atau bersama orang lain</li>
                            <li style={{ marginBottom: '0.8rem' }}>Tutup hidung dan mulut dengan menggunakan lengan dalam anda</li>
                            <li style={{ marginBottom: '0.8rem' }}>Tutup mulut dan hidung dengan tisu</li>
                            <li style={{ marginBottom: '0.8rem' }}>Jangan lupa membuangnya di tempat sampah</li>
                            <li style={{ marginBottom: '0.8rem' }}>Cucilah tangan dengan menggunakan air mengalir dan sabun</li>
                        </ol>
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
                            <li style={{ marginBottom: '0.8rem' }}><strong>Pasien diberikan obat selama 6-8 bulan, diminum secara teratur, sesuai dengan dosis yang diberikan dan sebaiknya obat diminum dalam keadaan perut kosong di pagi hari</strong></li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <strong>Tahap pemberian obat:</strong>
                                <br />
                                Tahap awal: 2 bulan atau 3 bulan diminum setiap hari <br />
                                Tahap lanjutan: 4 bulan atau 5 bulan diminum 3x/minggu
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>Bila tidak patuh dapat menyebabkan pasien menjadi resistan terhadap Obat Anti TB (OAT) atau yang paling parah menyebabkan kematian.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Obat TB gratis disediakan oleh pemerintah, dapat diperoleh di Puskesmas, Fasyankes lainnya (petugas dapat memberikan informasi Fasyankes yang menyediakan obat TB gratis dan berkualitas).</li>
                        </ul>
                    </Box>
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_9} alt="dewasa_9" />
                    </Box>
                </Box>

                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' },justifyContent: 'space-between', alignItems: 'center', gap: { xs: 5, sm: 5, md: 10 } }}
                >
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto', borderRadius: '10px' }} src={dewasa_10} alt="dewasa_10" />
                    </Box>
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto', borderRadius: '10px' }} src={dewasa_11} alt="dewasa_11" />
                    </Box>
                </Box>
                <Divider sx={{ mt: 5, mb: 10 }} />

                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_12} alt="dewasa_12" />
                    </Box>
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Efek Samping Obat</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <ul style={{ paddingLeft: '15px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Ada sebagian pasien TB mengalami efek samping ringan setelah minum obat anti TB yaitu :
                                <ul style={{ paddingLeft: '15px' }}>
                                    <li>Hilang nafsu makan, mual, sakit perut</li>
                                    <li>Nyeri sendi</li>
                                    <li>Kesemutan sampai rasa terbakar di kaki</li>
                                    <li>Warna kemerahan pada air seni (urine ), jika ini terjadi tidak apa-apa</li>
                                </ul>
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>Tetapi jika setelah minum obat anti TB timbul gejala :
                                <ul style={{ paddingLeft: '15px' }}>
                                    <li>Gatal-gatal dan warna kemerahan pada kulit</li>
                                    <li>Gangguan keseimbangan tubuh</li>
                                    <li>Gangguan penglihatan dan gangguan pendengaran</li>
                                    <li>Kulit kuning tanpa penyebab lainnya</li>
                                </ul>
                                Segera datang kepada petugas kesehatan atau dokter di Fasyankes setempat.
                            </li>
                        </ul>

                        <Alert sx={{ mt: 2, border: 1 }} severity="warning">Jika timbul gejala tersebut, jangan berhenti minum obat anti TB tetapi mintalah pertolongan kepada petugas kesehatan atau dokter setempat.</Alert>
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Apa itu TB Resisten Obat ?</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <ul style={{ paddingLeft: '15px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>TB Resistan Obat (TB RO) atau TB Kebal Obat disebabkan oleh jenis kuman TB yang sama namun sudah kebal terhadap obat lini 1. Oleh karena itu penanganannya menjadi lebih sulit.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Diagnosis memerlukan pemeriksaan lebih canggih.</li>
                            <li style={{ marginBottom: '0.8rem' }}>TB RO tidak dapat diobati dengan obat TB biasa, dan harus menggunakan obat lain yang disebut <Typography component='span' sx={{ fontWeight: 'bold' }}>Obat Anti TB lini 2</Typography> (OAT LINI 2).</li>
                            <li style={{ marginBottom: '0.8rem' }}>Pengobatan TB Resistan Obat <Typography component='span' sx={{ fontWeight: 'bold' }}>lebih lama</Typography> (paling sedikit 9 - 24 bulan)</li>
                            <li style={{ marginBottom: '0.8rem' }}>Jika tidak diobati dengan tepat, kuman dapat semakin kebal dan tidak ada lagi obat untuk menyembuhkannya</li>
                        </ul>

                        <Alert sx={{ mt: 2, border: 1 }} severity="info">Minum Obat Secara Teratur Sampai Tuntas TB RO Dapat Disembuhkan!</Alert>
                    </Box>
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_13} alt="dewasa_13" />
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_18} alt="dewasa_18" />
                    </Box>
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Perbedaan TB Reguler dan TB Resistan Obat</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <Typography component="p" variant="body1" sx={{ fontWeight: 'bold' }}>TB Reguler</Typography>
                        <ul style={{ paddingLeft: '16px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Minum setidaknya 4 jenis obat dalam bentuk Fixed Dosed Combination (FDC) atau yang dikemas menjadi 1 tablet</li>
                            <li style={{ marginBottom: '0.8rem' }}>Lama pengobatan minimal 6 bulan</li>
                            <li style={{ marginBottom: '0.8rem' }}>Efek samping relatif ringan</li>
                        </ul>
                        <Typography component="p" variant="body1" sx={{ fontWeight: 'bold', mt: 2 }}>TB Resistan Rifampisin/ Multi Drug Resistant (TB RR/ MDR)</Typography>
                        <ul style={{ paddingLeft: '16px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Suntik dan minum obat setidaknya 6 jenis</li>
                            <li style={{ marginBottom: '0.8rem' }}>Lama pengobatan minimal 9 – 20 bulan</li>
                            <li style={{ marginBottom: '0.8rem' }}>Efek samping lebih berat</li>
                        </ul>
                        <Typography component="p" variant="body1" sx={{ fontWeight: 'bold', mt: 2 }}>TB Extensively Drug Resistant (TB XDR)</Typography>
                        <ul style={{ paddingLeft: '16px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Suntik dan minum obat lebih dari 6 jenis</li>
                            <li style={{ marginBottom: '0.8rem' }}>Lama pengobatan minimal 24 bulan</li>
                            <li style={{ marginBottom: '0.8rem' }}>Efek samping lebih berat</li>
                        </ul>
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Penyebab TB Resistan Obat</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <ol style={{ paddingLeft: '15px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Tidak teratur menelan OAT sesuai panduan yang dianjurkan oleh petugas kesehatan</li>
                            <li style={{ marginBottom: '0.8rem' }}>Menghentikan pengobatan secara sepihak sebelum waktunya</li>
                            <li style={{ marginBottom: '0.8rem' }}>Tidak mematuhi anjuran dokter/ petugas kesehatan</li>
                            <li style={{ marginBottom: '0.8rem' }}>Gangguan penyerapan obat</li>
                            <li style={{ marginBottom: '0.8rem' }}>Tertular dari pasien TB RO lainnya (Menular lewat udara saat pasien TB RO batuk atau bersin). TB Resistan Obat tidak akan menular hanya karena :
                                <ul style={{ paddingLeft: '15px' }}>
                                    <li>Berjabat Tangan</li>
                                    <li>Penggunaan baju bersama yang bersih</li>
                                    <li>Penggunaan alat makan bersama yang bersih</li>
                                </ul>
                            </li>
                        </ol>
                    </Box>
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_19} alt="dewasa_19" />
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_20} alt="dewasa_20" />
                    </Box>
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Pencegahan Terjadinya TB Resistan Obat</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <ol style={{ paddingLeft: '15px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Memeriksakan diri sesegera mungkin jika ada gejala TB</li>
                            <li style={{ marginBottom: '0.8rem' }}>Minum obat TB secara rutin dan tidak terputus sampai dinyatakan sembuh</li>
                            <li style={{ marginBottom: '0.8rem' }}>Patuhi anjuran dokter dan petugas kesehatan</li>
                            <li style={{ marginBottom: '0.8rem' }}>Penggunaan masker untuk pasien TB Resistan Obat</li>
                        </ol>
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Faktor Resiko TB Resistan Obat</Typography>
                        <Typography
                            sx={{
                                color: 'text.secondary',
                            }}
                        >
                            ( Siapa Saja yang Beresiko )
                        </Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <ol style={{ paddingLeft: '15px' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Pasien TB gagal pengobatan kategori 2</li>
                            <li style={{ marginBottom: '0.8rem' }}>Pasien TB pengobatan kategori 2 yang tidak konversi setelah 3 bulan pengobatan</li>
                            <li style={{ marginBottom: '0.8rem' }}>Pasien TB mempunyai riwayat pengobatan TB yang tidak standar serta menggunakan kuinolon & obat injeksi lini kedua paling sedikit selama 1 bulan</li>
                            <li style={{ marginBottom: '0.8rem' }}>Pasien gagal pengobatan kategori 1</li>
                            <li style={{ marginBottom: '0.8rem' }}>Pasien TB pengobatan kategori 1 yang tidak konversi setelah 2 bulan pengobatan</li>
                            <li style={{ marginBottom: '0.8rem' }}>Pasien TB kasus kambuh (relaps) dengan pengobatan OAT kategori 1 dan kategori 2</li>
                            <li style={{ marginBottom: '0.8rem' }}>Pasien TB yang kembali pengobatan kategori 2 setelah lost to follow up (lalai berobat/ default)</li>
                            <li style={{ marginBottom: '0.8rem' }}>Terduga TB yang mempunyai riwayat kontak erat dengan pasien TB RO, termasuk warga binaan di lapas, hunian padat seperti asrama, barak, pesantren, pabrik.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Pasien ko-infeksi TB-HIV yang tidak respon secara bakteriologis maupun klinis terhadap pemberian OAT (bila penegakan diagnosis awal tidak menggunakan TCM TB)</li>
                        </ol>
                    </Box>
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_14} alt="dewasa_14" />
                    </Box>
                </Box>
                <Divider />
                <Box
                    sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}
                >
                    <Box component="img" sx={{ width: { xs: '100%', sm: '100%', md: '70%' }, height: 'auto', alignSelf: 'center' }} src={dewasa_15} alt="dewasa_15"></Box>
                </Box>
                <Box component='article'>
                    <Typography sx={{ textAlign: 'center' }} component="h2" variant="h4">Pengobatan TB Resistan Obat</Typography>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            color: 'text.secondary',
                        }}
                    >
                        Ada 2 Jenis
                    </Typography>
                    <Divider sx={{ my: 2, width: '5rem', mx: 'auto' }} />
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', gap: { xs: 5, sm: 5, md: 10 } }}>
                        <Box component='div'>
                            <SyledCard>
                                <SyledCardContent sx={{ textAlign: 'center' }}>
                                    <Typography component="h3" sx={{ fontWeight: 'bold' }} variant="subtitle2">
                                        Pengobatan Standar Jangka Pendek
                                    </Typography>
                                </SyledCardContent>
                            </SyledCard>
                            <SyledCard sx={{ mt: 3 }}>
                                <SyledCardContent>
                                    <Typography gutterBottom component="p">
                                        Lama pengobatan 9-11 bulan
                                    </Typography>
                                    <Typography gutterBottom component="p">
                                        Tahap awal: <br />
                                        Pengobatan selama 4-6 bulan <br />
                                        Diberikan obat yang diminum (obat oral) dan obat suntikan setiap hari (7 hari, Senin-Minggu)
                                    </Typography>
                                    <Typography gutterBottom component="p">
                                        Tahap lanjutan: <br />
                                        Pengobatan selama 5 bulan <br />
                                        Diberikan obat yang diminum (obat oral) setiap hari (7 hari, Senin-Minggu), tanpa obat suntikan
                                    </Typography>
                                </SyledCardContent>
                            </SyledCard>
                        </Box>
                        <Box component='div'>
                            <SyledCard>
                                <SyledCardContent sx={{ textAlign: 'center' }}>
                                    <Typography component="h3" sx={{ fontWeight: 'bold' }} variant="subtitle2">
                                        Pengobatan Individual
                                    </Typography>
                                </SyledCardContent>
                            </SyledCard>
                            <SyledCard sx={{ mt: 3 }}>
                                <SyledCardContent>
                                    <Typography gutterBottom component="p">
                                        Lama Pengobatan 20-26 bulan
                                    </Typography>
                                    <Typography gutterBottom component="p">
                                        Tahap awal: <br />
                                        Tahap pengobatan dengan menggunakan obat oral dan obat suntikan sekurang-kurangnya selama 8 bulan <br />
                                        Suntikan diberikan 5 kali seminggu (Senin-Jumat)
                                        Obat oral diberikan 7 kali seminggu (Senin-Minggu)
                                    </Typography>
                                    <Typography gutterBottom component="p">
                                        Tahap lanjutan: <br />
                                        Tahap pengobatan setelah selesai tahap awal. Pemberian obat oral saja sekurang-kurangnya 12 bulan <br />
                                        Obat oral diberikan 7 kali dalam seminggu (Senin- Minggu) Obat suntikan sudah tidak diberikan
                                    </Typography>
                                </SyledCardContent>
                            </SyledCard>
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ mt: 5, mb: 10 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_16} alt="dewasa_16" />
                    </Box>
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Efeks Samping Pengobatan TB RO</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <Typography component="h4" variant="h6">Efek Samping ringan - sedang yang sering muncul :</Typography>
                        <ul>
                            <li style={{ marginBottom: '0.8rem' }}>Pusing/ Sakit Kepala</li>
                            <li style={{ marginBottom: '0.8rem' }}>Diare</li>
                            <li style={{ marginBottom: '0.8rem' }}>Nyeri Otot dan Tulang</li>
                            <li style={{ marginBottom: '0.8rem' }}>Kesemutan</li>
                            <li style={{ marginBottom: '0.8rem' }}>Nyeri di tempat suntikan</li>
                            <li style={{ marginBottom: '0.8rem' }}>Mual Muntah</li>
                        </ul>
                        <Typography component="h4" variant="h6">Efek Samping Berat/ Serius :</Typography>
                        <ol>
                            <li style={{ marginBottom: '0.8rem' }}>Sesak Nafas</li>
                            <li style={{ marginBottom: '0.8rem' }}>Nyeri Dada</li>
                            <li style={{ marginBottom: '0.8rem' }}>Jantung Berdebar</li>
                            <li style={{ marginBottom: '0.8rem' }}>Lemah dan Lesu Berkepanjangan</li>
                            <li style={{ marginBottom: '0.8rem' }}>Pendengaran Berkurang</li>
                        </ol>
                    </Box>
                </Box>
                <Divider sx={{ mb: 5 }} />
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'normal', sm: 'normal', md: 'center' }, gap: { xs: 5, sm: 5, md: 10 }, mb: 10 }}
                >
                    <Box component='article'>
                        <Typography component="h2" variant="h4">Gaya Hidup Sehat dan Pencegahan TB</Typography>
                        <Divider sx={{ my: 2, width: '5rem' }} />
                        <Typography component="h4" variant="h6">Secara langsung TB dapat dihindari dengan :</Typography>
                        <ul>
                            <li style={{ marginBottom: '0.8rem' }}>Menjalankan kehidupan pribadi sehat seperti tidak merokok.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Meningkatkan daya tahan tubuh dengan makan makanan yang bergizi seimbang, dll</li>
                            <li style={{ marginBottom: '0.8rem' }}>Rumah yang cukup mendapatkan sinar matahari dan mempunyai sirkulasi udara yang baik. Agar rumah mendapatkan sinar matahari dan udara yang cukup, bukalah jendela pada pagi hari secara teratur, serta menjemur kasur atau tikar secara teratur agar tidak lembab.</li>
                        </ul>
                        <Typography component="h4" variant="h6">Secara tidak langsung TB dapat dihindari dengan :</Typography>
                        <ol>
                            <li style={{ marginBottom: '0.8rem' }}>Berolah raga teratur</li>
                            <li style={{ marginBottom: '0.8rem' }}>Cukup beristirahat</li>
                            <li style={{ marginBottom: '0.8rem' }}>Tidak tidur larut malam</li>
                            <li style={{ marginBottom: '0.8rem' }}>Secepatnya membawa bayi berusia di bawah 3 bulan untuk mendapatkan vaksin BCG</li>
                        </ol>
                    </Box>
                    <Box sx={{ maxWidth: { xs: '100%', sm: '100%', md: '50%' } }}>
                        <img style={{ width: '100%', height: 'auto' }} src={dewasa_17} alt="dewasa_17" />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default TbDewasa