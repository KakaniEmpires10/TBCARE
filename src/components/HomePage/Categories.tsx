import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import { FaMale } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { NavLink } from 'react-router';

const items = [
    {
        icon: <FaMale style={{ fontSize: '1.2rem' }} />,
        title: 'Tuberkulosis Dewasa',
        description:
            'TB atau tuberkulosis yang terjadi pada orang dewasa.',
        link: 'tuberkulosis_dewasa',
        imageLight: `url("/thumbnail/dewasa_thumb.png")`,
        imageDark: `url("/thumbnail/dewasa_thumb.png")`,
    },
    {
        icon: <FaChild style={{ fontSize: '1.2rem' }} />,
        title: 'Tuberkulosis Anak',
        description:
            'TB atau tuberkulosis yang terjadi pada anak-anak.',
        link: 'tuberkulosis_anak',
        imageLight: `url("/thumbnail/anak_thumb.png")`,
        imageDark: `url("/thumbnail/anak_thumb.png")`,
    },
    {
        icon: <EscalatorWarningIcon />,
        title: 'PMO Tuberkulosis',
        description:
            'PMO (Pengawas Minum Obat) yaitu seseorang yang bersedia membantu pasien patuh terhadap instruksi dan bersedia untuk diberi penyuluhan bersama-sama dengan pasien.',
        link: 'pmo_tuberkulosis',
        imageLight: `url("/thumbnail/pmo_thumb.png")`,
        imageDark: `url("/thumbnail/pmo_thumb.png")`,
    },
];

interface ChipProps {
    selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
    variants: [
        {
            props: ({ selected }) => selected,
            style: {
                background:
                    'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
                color: 'hsl(0, 0%, 100%)',
                borderColor: (theme).palette.primary.light,
                '& .MuiChip-label': {
                    color: 'hsl(0, 0%, 100%)',
                },
                ...theme.applyStyles('dark', {
                    borderColor: (theme).palette.primary.dark,
                }),
            },
        },
    ],
}));

interface MobileLayoutProps {
    selectedItemIndex: number;
    handleItemClick: (index: number, link: string) => void;
    selectedFeature: (typeof items)[0];
    link: string
}

export function MobileLayout({
    selectedItemIndex,
    handleItemClick,
    selectedFeature,
    link
}: MobileLayoutProps) {
    if (!items[selectedItemIndex]) {
        return null;
    }

    return (
        <Box
            sx={{
                display: { xs: 'flex', sm: 'none' },
                flexDirection: 'column',
                gap: 2,
            }}
        >
            <Box sx={{ display: 'flex', gap: 2, overflow: 'auto' }}>
                {items.map(({ title, link }, index) => (
                    <Chip
                        size="medium"
                        key={index}
                        label={title}
                        onClick={() => handleItemClick(index, link)}
                        selected={selectedItemIndex === index}
                    />
                ))}
            </Box>
            <Card variant="outlined">
                <Box
                    sx={(theme) => ({
                        mb: 2,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: 280,
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: 'var(--items-imageLight)',
                        ...theme.applyStyles('dark', {
                            backgroundImage: 'var(--items-imageDark)',
                        }),
                    })}
                    style={
                        items[selectedItemIndex]
                            ? ({
                                '--items-imageLight': items[selectedItemIndex].imageLight,
                                '--items-imageDark': items[selectedItemIndex].imageDark,
                            } as never)
                            : {}
                    }
                />
                <Box sx={{ px: 2, pb: 2 }}>
                    <Typography
                        gutterBottom
                        sx={{ color: 'text.primary', fontWeight: 'medium' }}
                    >
                        {selectedFeature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
                        {selectedFeature.description}
                    </Typography>
                    <NavLink to={`/materi/${link}`} target='_blank'>
                        <Button
                            size='small'
                            endIcon={<OpenInNewIcon />}
                            variant='outlined'
                        >
                            Selengkapnya
                        </Button>
                    </NavLink>
                </Box>
            </Card>
        </Box>
    );
}

export default function Categories() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const [link, setLink] = React.useState('tuberkulosis_dewasa');

    const handleItemClick = (index: number, link: string) => {
        setSelectedItemIndex(index);
        setLink(link);
    };

    const selectedFeature = items[selectedItemIndex];

    return (
        <Container sx={{ py: { xs: 8, sm: 16 } }}>
            <Box sx={{ width: { sm: '100%', md: '60%' } }}>
                <Typography
                    component="h2"
                    variant="h4"
                    gutterBottom
                    sx={{ color: 'text.primary' }}
                >
                    Kategori TBC
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
                >
                    Tuberkulosis Terbagi Menjadi 3 Kategori.
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row-reverse' },
                    gap: 2,
                }}
            >
                <div>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 2,
                            height: '100%',
                        }}
                    >
                        {items.map(({ icon, title, description, link }, index) => (
                            <Box
                                key={index}
                                component={Button}
                                onClick={() => handleItemClick(index, link)}
                                sx={[
                                    (theme) => ({
                                        p: 2,
                                        height: '100%',
                                        width: '100%',
                                        outline: 1,
                                        outlineColor: (theme).palette.divider,
                                        '&:hover': {
                                            backgroundColor: (theme).palette.action.hover,
                                        },
                                    }),
                                    selectedItemIndex === index && {
                                        backgroundColor: 'primary.main',
                                        outline: 0,
                                        '&:hover': {
                                            backgroundColor: 'primary.dark',
                                        },
                                    },
                                ]}
                            >
                                <Box
                                    sx={[
                                        {
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'left',
                                            gap: 1,
                                            textAlign: 'left',
                                            textTransform: 'none',
                                            color: 'text.secondary',
                                        },
                                        selectedItemIndex === index && {
                                            color: 'white',
                                        },
                                    ]}
                                >
                                    {icon}

                                    <Typography variant="h6">{title}</Typography>
                                    <Typography variant="body2">{description}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <MobileLayout
                        selectedItemIndex={selectedItemIndex}
                        handleItemClick={handleItemClick}
                        selectedFeature={selectedFeature}
                        link={link}
                    />
                </div>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        width: { xs: '100%', md: '70%' },
                        height: 'var(--items-image-height)',
                    }}
                >
                    <Card
                        variant="outlined"
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: { xs: 'none', sm: 'flex' },
                            // pointerEvents: 'none',
                        }}
                    >
                        <Box
                            sx={(theme) => ({
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                                m: 'auto',
                                width: 420,
                                height: 500,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundImage: 'var(--items-imageLight)',
                                ...theme.applyStyles('dark', {
                                    backgroundImage: 'var(--items-imageDark)',
                                }),
                            })}
                            style={
                                items[selectedItemIndex]
                                    ? ({
                                        '--items-imageLight': items[selectedItemIndex].imageLight,
                                        '--items-imageDark': items[selectedItemIndex].imageDark,
                                    } as never)
                                    : {}
                            }
                        >
                            <NavLink to={`/materi/${link}`} target='_blank'>
                                <Button
                                    endIcon={<OpenInNewIcon />}
                                    variant='outlined'
                                >
                                    Selengkapnya
                                </Button>
                            </NavLink>
                        </Box>
                    </Card>
                </Box>
            </Box>
        </Container>
    );
}