import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import intro from '/videos/intro.mp4';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import { styled } from '@mui/material/styles';
import { useRef, useState } from 'react';
import { Button, IconButton } from '@mui/material';
import { NavLink } from 'react-router';

const StyledBox = styled('div')(({ theme }) => ({
    alignSelf: 'center',
    width: '100%',
    height: '100svh',
    outline: '6px solid',
    outlineColor: 'hsla(220, 25%, 80%, 0.2)',
    border: '1px solid',
    borderColor: theme.palette.grey[200],
    boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
        height: '100svh',
    },
    ...theme.applyStyles('dark', {
        boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
        outlineColor: 'hsla(220, 20%, 42%, 0.1)',
        borderColor: theme.palette.grey[700],
    }),
}));

const BackgroundVideo = styled('video')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
});

const Overlay = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0) 100%)',
    zIndex: 0,
});

const MuteButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: theme.palette.common.white,
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
}));

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <Box
            id="hero"
            sx={{
                width: '100%',
            }}
        >
            <Container
                disableGutters
                maxWidth={false}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <StyledBox
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <BackgroundVideo
                        ref={videoRef}
                        src={intro}
                        autoPlay
                        loop
                        muted
                    />
                    <Stack
                        spacing={2}
                        useFlexGap
                        sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' }, zIndex: 3 }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                color: 'white',
                                alignItems: 'center',
                                fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                            }}
                        >
                            TBCARE
                            <Typography
                                component="span"
                                variant="h1"
                                sx={(theme) => ({
                                    fontSize: 'inherit',
                                    color: 'primary.main',
                                    ...theme.applyStyles('dark', {
                                        color: 'primary.light',
                                    }),
                                })}
                            >
                                .id
                            </Typography>
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'center',
                                color: 'white',
                                width: { sm: '100%', md: '80%' },
                            }}
                        >
                            Kami adalah platform informasi dan edukasi yang berfokus pada pemberantasan Tuberkulosis (TBC) di Indonesia. Kami hadir sebagai solusi untuk meningkatkan kesadaran masyarakat tentang bahaya TBC sekaligus mendorong langkah nyata dalam pencegahan, deteksi dini, dan pengobatan yang tepat.
                        </Typography>
                        <Typography
                            variant='subtitle1'
                            sx={{
                                textAlign: 'center',
                                color: 'white',
                                fontWeight: 700,
                                width: { sm: '100%', md: '80%' },
                            }}
                        >
                            Mari bersama wujudkan Indonesia tanpa TBC!
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
                            <NavLink to='/edukasi'>
                                <Button variant='outlined'>Edukasi</Button>
                            </NavLink>
                            <NavLink to='/materi'>
                                <Button variant='contained'>Materi</Button>
                            </NavLink>
                        </Box>
                    </Stack>
                    <Overlay />
                    <MuteButton onClick={toggleMute}>
                        {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                    </MuteButton>
                </StyledBox>
            </Container>
        </Box>
    );
}