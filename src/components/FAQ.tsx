import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
    const [expanded, setExpanded] = React.useState<string[]>([]);

    const handleChange =
        (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(
                isExpanded
                    ? [...expanded, panel]
                    : expanded.filter((item) => item !== panel),
            );
        };

    return (
        <Container
            id="faq"
            sx={{
                pt: 12,
                pb: { xs: 8, sm: 16 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
            }}
        >
            <Typography
                component="h2"
                variant="h4"
                sx={{
                    color: 'text.primary',
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                }}
            >
                Frequently Asked Questions
            </Typography>
            <Box sx={{ width: '100%' }}>
                <Accordion
                    expanded={expanded.includes('panel1')}
                    onChange={handleChange('panel1')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            Siapa yang membuat website ini?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%' }, pl: { sm: 0, md: 1 } }}
                        >
                            Website ini dibuat oleh sekelompok mahasiswa magister keperawatan dari Universitas Syiah Kuala, Banda Aceh. Kami memiliki tujuan untuk meningkatkan kesadaran masyarakat tentang tuberkulosis melalui informasi yang akurat dan mudah dipahami.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded.includes('panel2')}
                    onChange={handleChange('panel2')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            Apa tujuan dari website ini?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%' }, pl: { sm: 0, md: 1 } }}
                        >
                            Tujuan website ini adalah untuk memberikan edukasi tentang tuberkulosis, mendorong pencegahan, deteksi dini, serta pengobatan yang benar. Kami juga ingin mendukung peningkatan kesehatan Masyarakat.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded.includes('panel3')}
                    onChange={handleChange('panel3')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3d-content"
                        id="panel3d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            Siapa saja anggota kelompok ini?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%' }, pl: { sm: 0, md: 1 } }}
                        >
                            Kelompok ini terdiri dari beberapa mahasiswa magister keperawatan Universitas Syiah Kuala. Informasi lebih lanjut tentang anggota tim dapat dilihat di halaman "Profil" di website.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded.includes('panel4')}
                    onChange={handleChange('panel4')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4d-content"
                        id="panel4d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            Bagaimana cara menghubungi tim pembuat website?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%' }, pl: { sm: 0, md: 1 } }}
                        >
                            Anda dapat menghubungi kami melalui email atau formulir kontak yang tersedia di website ini. Kami juga terbuka untuk saran dan kolaborasi dalam bidang edukasi kesehatan.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded.includes('panel5')}
                    onChange={handleChange('panel5')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5d-content"
                        id="panel5d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            Apa hubungan universitas dengan website ini?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%' }, pl: { sm: 0, md: 1 } }}
                        >
                            Website ini adalah bagian inisiatif untuk projek akhir matakuliah Sistem Informasi Keperawatan magister Keperawatan di Universitas Syiah Kuala. Kami berkomitmen untuk menerapkan ilmu yang kami pelajari dalam membantu masyarakat memahami isu kesehatan, khususnya tuberculosis.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
}