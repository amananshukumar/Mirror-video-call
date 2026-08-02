import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#6366f1',
        },
        secondary: {
            main: '#f59e0b',
        },
        background: {
            default: '#0b1326',
            paper: '#171f33',
        },
        text: {
            primary: '#dae2fd',
            secondary: '#908fa0',
        },
    },
    typography: {
        fontFamily: "'Inter', 'Sora', sans-serif",
    },
    shape: {
        borderRadius: 16,
    },
});

export default function Authentication() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [error, setError] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [formState, setFormState] = React.useState(0); // 0 = login, 1 = register
    const [open, setOpen] = React.useState(false);

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    const handleAuth = async () => {
        try {
            if (formState === 0) {
                await handleLogin(username, password);
            } else {
                let result = await handleRegister(name, username, password);
                setUsername('');
                setPassword('');
                setName('');
                setMessage(result);
                setOpen(true);
                setError('');
                setFormState(0);
            }
        } catch (err) {
            console.log(err);
            let message = err?.response?.data?.message || 'Something went wrong';
            setError(message);
        }
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Grid
                container
                component="main"
                sx={{
                    minHeight: '100vh',
                    background: 'radial-gradient(circle at 50% 30%, #1e1b4b 0%, #0b1326 70%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 2,
                }}
            >
                <CssBaseline />
                <Grid
                    item
                    xs={11}
                    sm={8}
                    md={5}
                    lg={4}
                    component={Paper}
                    elevation={12}
                    sx={{
                        borderRadius: 4,
                        background: 'rgba(23, 31, 51, 0.75)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(99, 102, 241, 0.2)',
                        overflow: 'hidden',
                    }}
                >
                    <Box
                        sx={{
                            my: 5,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 50, height: 50, boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}>
                            <LockOutlinedIcon fontSize="medium" />
                        </Avatar>
                        <Typography component="h1" variant="h5" sx={{ fontWeight: 700, mt: 1, letterSpacing: '-0.5px' }}>
                            {formState === 0 ? 'Welcome Back' : 'Create Account'}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            {formState === 0 ? 'Sign in to access your video calls' : 'Register to get started with Mirror Video Call'}
                        </Typography>

                        <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
                            {/* Toggle Buttons */}
                            <Box 
                                sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    mb: 3, 
                                    background: 'rgba(11, 19, 38, 0.6)', 
                                    p: '4px', 
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255, 255, 255, 0.08)'
                                }}
                            >
                                <Button
                                    fullWidth
                                    variant={formState === 0 ? 'contained' : 'text'}
                                    onClick={() => setFormState(0)}
                                    sx={{ 
                                        borderRadius: '8px', 
                                        py: 1, 
                                        fontWeight: 600,
                                        boxShadow: formState === 0 ? '0 0 15px rgba(99, 102, 241, 0.4)' : 'none'
                                    }}
                                >
                                    Sign In
                                </Button>
                                <Button
                                    fullWidth
                                    variant={formState === 1 ? 'contained' : 'text'}
                                    onClick={() => setFormState(1)}
                                    sx={{ 
                                        borderRadius: '8px', 
                                        py: 1, 
                                        fontWeight: 600,
                                        boxShadow: formState === 1 ? '0 0 15px rgba(99, 102, 241, 0.4)' : 'none'
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </Box>

                            {formState === 1 && (
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Full Name"
                                    name="name"
                                    value={name}
                                    autoFocus
                                    onChange={(e) => setName(e.target.value)}
                                    sx={{ mb: 1 }}
                                />
                            )}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={username}
                                autoComplete="username"
                                onChange={(e) => setUsername(e.target.value)}
                                sx={{ mb: 1 }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={password}
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {error && (
                                <Typography color="error" variant="body2" align="center" sx={{ mt: 2, background: 'rgba(239, 68, 68, 0.1)', p: 1, borderRadius: 2, border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                                    {error}
                                </Typography>
                            )}

                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                sx={{ 
                                    mt: 3, 
                                    mb: 2, 
                                    py: 1.4, 
                                    fontWeight: 700, 
                                    fontSize: '1rem',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                                    boxShadow: '0 0 25px rgba(99, 102, 241, 0.4)',
                                    '&:hover': {
                                        boxShadow: '0 0 35px rgba(99, 102, 241, 0.6)',
                                    }
                                }}
                                onClick={handleAuth}
                            >
                                {formState === 0 ? 'Login' : 'Register'}
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)} message={message} />
        </ThemeProvider>
    );
}

