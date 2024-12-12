import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import logo_kemenkes from '/logos/Logo_Kemenkes.png';
import logo_kemenkes_dark from '/logos/Logo_Kemenkes_dark.png';
import logo_ppni from '/logos/Logo_PPNI.png';
import logo_usk from '/logos/Logo_USK.png';
import logo_usk_dark from '/logos/Logo_USK_dark.png';
import { useTheme } from '@mui/system';
import { Divider } from '@mui/material';

const whiteLogos = [
    logo_usk,
    logo_kemenkes,
    logo_ppni,
];

const darkLogos = [
    logo_usk_dark,
    logo_kemenkes_dark,
    logo_ppni,
];

export default function LogoCollection() {
    const theme = useTheme();
    const logos = theme.palette.mode === 'light' ? whiteLogos : darkLogos;

    return (
        <>
            <Divider style={{ borderWidth: '1px' }} />
            <Box id="logoCollection" sx={{ py: 4 }}>
                <Grid container sx={{ justifyContent: 'center', mt: 0.5, gap: 10, alignItems: 'center' }}>
                    {logos.map((logo, index) => (
                        <Grid item key={index}>
                            <img
                                src={logo}
                                alt={`Logos ${index + 1}`}
                                style={{ width: '120px'}}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Divider style={{ borderWidth: '1px' }} />
        </>
    );
}