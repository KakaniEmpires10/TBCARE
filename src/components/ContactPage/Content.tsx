import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';

const items = [
    {
        icon: <MapIcon sx={{ color: 'text.secondary' }} />,
        title: 'Alamat',
        description:
            'Jl. Tgk Tanoh Abee, Gedung Petronas Fakultas Keperawatan Universitas Syiah Kuala, Kopelma Darussalam, Banda Aceh 23111. (0651) 8053041',
    },
    {
        icon: <EmailIcon sx={{ color: 'text.secondary' }} />,
        title: 'Email',
        description:
            'tuberkulosisfkepusk@gmail.com',
    },
];

export default function Content() {
    return (
        <Stack
            sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
        >
            {items.map((item, index) => (
                <Stack key={index} direction="row" sx={{ gap: 2 }}>
                    {item.icon}
                    <div>
                        <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.description}
                        </Typography>
                    </div>
                </Stack>
            ))}
        </Stack>
    );
}