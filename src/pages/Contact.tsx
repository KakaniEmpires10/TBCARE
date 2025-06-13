import { Stack } from "@mui/material"
import Content from "../components/ContactPage/Content"
import ContactCard from "../components/ContactPage/ContactCard"
import SEO from "../utils/SEO"

const Contact = () => {
    return (
        <>
            <SEO
                title="Kontak - Hubungi TBCARE"
                description="Hubungi tim TBCARE untuk konsultasi, pertanyaan, atau informasi lebih lanjut tentang tuberkulosis dan layanan edukasi kami."
                keywords="kontak TBCARE, hubungi TBCARE, konsultasi TB, layanan pelanggan tuberkulosis"
                url="https://tbcare.vercel.app/kontak"
            />
            <Stack
                direction="column"
                component="main"
                sx={[
                    {
                        justifyContent: 'center',
                        height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
                        marginTop: 'max(120px - var(--template-frame-height, 0px), 0px)',
                        minHeight: '100%',
                    },
                    (theme) => ({
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            zIndex: -1,
                            inset: 0,
                            backgroundImage:
                                'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
                            backgroundRepeat: 'no-repeat',
                            ...theme.applyStyles('dark', {
                                backgroundImage:
                                    'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(0, 0%, 0%))',
                            }),
                        },
                    }),
                ]}
            >
                <Stack
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    sx={{
                        justifyContent: 'center',
                        gap: { xs: 6, sm: 12 },
                        p: 2,
                        mx: 'auto',
                    }}
                >
                    <Stack
                        direction={{ xs: 'column-reverse', md: 'row' }}
                        sx={{
                            justifyContent: 'center',
                            gap: { xs: 6, sm: 12 },
                            p: { xs: 2, sm: 4 },
                            m: 'auto',
                        }}
                    >
                        <ContactCard />
                        <Content />
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default Contact