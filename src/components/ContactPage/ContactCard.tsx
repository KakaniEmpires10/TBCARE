import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import logo_usk from '/logos/Logo_USK.png';
import logo_usk_dark from '/logos/Logo_USK_dark.png';
import { Alert, AlertTitle, CircularProgress, Divider, Snackbar, SnackbarCloseReason } from '@mui/material';
import emailjs from '@emailjs/browser'

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        width: '450px',
    },
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

export default function ContactCard() {
    const theme = useTheme();

    const [nameError, setNameError] = React.useState(false);
    const [nameErrorMessage, setNameErrorMessage] = React.useState('');
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [subjectError, setSubjekError] = React.useState(false);
    const [subjectErrorMessage, setSubjekErrorMessage] = React.useState('');
    const [messageError, setMessageError] = React.useState(false);
    const [messageErrorMessage, setMessageErrorMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    // Snackbar / Toast State
    const [open, setOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
    const [snackbarSeverity, setSnackbarSeverity] = React.useState<'success' | 'error'>('success');

    const handleClose = (
        _event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = document.getElementById('form_contact') as HTMLFormElement;

        event.preventDefault();

        if (nameError || emailError || subjectError || messageError) {
            return;
        }

        setLoading(true);

        const data = new FormData(event.currentTarget);

        const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
        const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;
        const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;

        const templateParams = {
            from_name: data.get('name'),
            from_subject: data.get('subjek'),
            from_email: data.get('email'),
            message: data.get('message'),
            to_name: 'tuberkulosisfkepusk@gmail.com'
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .then((_response) => {
                form.reset()
                setSnackbarMessage('Pesan berhasil dikirim!');
                setSnackbarSeverity('success');
                setOpen(true)
            }).catch(error => {
                console.log(error)
                setSnackbarMessage('Gagal mengirim pesan. Coba lagi nanti.');
                setSnackbarSeverity('error');
                setOpen(true);
            }).finally(() => {
                setLoading(false);
            })
    };

    const validateInputs = () => {
        const name = document.getElementById('name') as HTMLInputElement;
        const email = document.getElementById('email') as HTMLInputElement;
        const subjek = document.getElementById('subjek') as HTMLInputElement;
        const message = document.getElementById('message') as HTMLInputElement;

        let isValid = true;

        if (!name.value) {
            setNameError(true);
            setNameErrorMessage('Nama Wajib Diisi!');
            isValid = false;
        } else {
            setNameError(false);
            setNameErrorMessage('');
        }

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Tolong Masukkan Email yang Valid!');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!subjek.value) {
            setSubjekError(true);
            setSubjekErrorMessage('Subjek Wajib Diisi!');
            isValid = false;
        } else {
            setSubjekError(false);
            setSubjekErrorMessage('');
        }

        if (!message.value) {
            setMessageError(true);
            setMessageErrorMessage('Pesan Wajib Diisi!');
            isValid = false;
        } else {
            setMessageError(false);
            setMessageErrorMessage('');
        }

        return isValid;
    };

    return (
        <>
            <Card variant="outlined">
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    {theme.palette.mode == 'light' ? <img style={{ width: "90px" }} src={logo_usk} alt="Logo" /> : <img style={{ width: "90px" }} src={logo_usk_dark} alt="Logo" />}
                </Box>
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                >
                    Hubungi Kami
                </Typography>
                <Divider />
                <Box
                    id='form_contact'
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
                >
                    <FormControl>
                        <FormLabel htmlFor="name">Nama</FormLabel>
                        <TextField
                            error={nameError}
                            helperText={nameErrorMessage}
                            id="name"
                            type="name"
                            name="name"
                            placeholder="Masukkan Nama Anda..."
                            autoComplete="name"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            color={nameError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <TextField
                            error={emailError}
                            helperText={emailErrorMessage}
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email_mu@email.com"
                            autoComplete="email"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            color={emailError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="subjek">Subjek</FormLabel>
                        <TextField
                            error={subjectError}
                            helperText={subjectErrorMessage}
                            name="subjek"
                            placeholder="Subjek Pesan..."
                            type="text"
                            id="subjek"
                            autoComplete="subjek"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            color={subjectError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="message">Pesan</FormLabel>
                        <TextField
                            error={messageError}
                            helperText={messageErrorMessage}
                            name="message"
                            placeholder="Tuliskan isi Pesan Anda..."
                            id="message"
                            autoComplete="message"
                            autoFocus
                            multiline
                            rows={5}
                            required
                            fullWidth
                            variant="outlined"
                            color={messageError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={validateInputs}
                        disabled={loading}
                        startIcon={loading && <CircularProgress sx={(theme) => ({ color: theme.palette.mode == 'dark' ? 'black' : 'white' })} size={20} />}
                    >
                        {loading ? <Box component='span' sx={(theme) => ({ color: theme.palette.mode == 'dark' ? 'black' : 'white' })}>Submitting</Box> : 'Submit'}
                    </Button>
                </Box>
            </Card>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                anchorOrigin={{ horizontal: 'center', vertical: "bottom" }}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={snackbarSeverity}
                    sx={{ width: '100%', border: 1, borderColor: 'success' }}
                >
                    <AlertTitle sx={{ fontWeight: 700 }}>{snackbarSeverity == 'success' ? 'Success' : 'Error'}</AlertTitle>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
}