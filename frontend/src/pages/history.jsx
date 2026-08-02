import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { IconButton, Container, Box, ThemeProvider, createTheme, Chip } from '@mui/material';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#6366f1',
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

export default function History() {
    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([])
    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {
                // SNACKBAR HANDLING IF NEEDED
            }
        }

        fetchHistory();
    }, [])

    let formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();
        return `${day}/${month}/${year}`
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ minHeight: '100vh', background: 'radial-gradient(circle at 50% 0%, #1e1b4b 0%, #0b1326 70%)', py: 4, px: 3 }}>
                <Container maxWidth="md">
                    {/* Header bar */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4, pb: 2, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <IconButton 
                                onClick={() => routeTo("/home")}
                                sx={{ 
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    border: '1px solid rgba(255, 255, 255, 0.12)',
                                    color: '#c0c1ff',
                                    '&:hover': { background: 'rgba(99, 102, 241, 0.2)' }
                                }}
                            >
                                <HomeIcon />
                            </IconButton>
                            <Typography variant="h5" sx={{ fontWeight: 700, background: 'linear-gradient(135deg, #ffffff, #c0c1ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Meeting History
                            </Typography>
                        </Box>

                        <Chip 
                            label={`${meetings.length} Recorded Calls`} 
                            size="small"
                            sx={{ background: 'rgba(99, 102, 241, 0.15)', color: '#c0c1ff', border: '1px solid rgba(99, 102, 241, 0.3)', fontWeight: 600 }}
                        />
                    </Box>

                    {/* Cards grid */}
                    {meetings.length !== 0 ? (
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                            {meetings.map((e, i) => (
                                <Card 
                                    key={e._id || e.meetingCode || i} 
                                    elevation={6}
                                    sx={{
                                        background: 'rgba(23, 31, 51, 0.75)',
                                        backdropFilter: 'blur(16px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: 4,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            borderColor: 'rgba(99, 102, 241, 0.4)',
                                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(99, 102, 241, 0.25)'
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                                            <Typography variant="subtitle2" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <VideoCallIcon fontSize="small" sx={{ color: '#6366f1' }} />
                                                Meeting Code
                                            </Typography>
                                            <Chip label={e.meetingCode} size="small" color="primary" variant="outlined" sx={{ fontWeight: 700 }} />
                                        </Box>

                                        <Typography variant="body2" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                            <CalendarTodayIcon fontSize="small" sx={{ color: '#f59e0b', fontSize: '1rem' }} />
                                            {formatDate(e.date)}
                                        </Typography>

                                        <Button 
                                            fullWidth
                                            variant="contained" 
                                            size="small"
                                            onClick={() => routeTo(`/${e.meetingCode}`)}
                                            sx={{
                                                mt: 1,
                                                borderRadius: '10px',
                                                fontWeight: 600,
                                                textTransform: 'none',
                                                background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                                            }}
                                        >
                                            Rejoin Call
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    ) : (
                        <Box sx={{ textAlign: 'center', py: 8, background: 'rgba(23, 31, 51, 0.5)', borderRadius: 4, border: '1px border rgba(255,255,255,0.08)' }}>
                            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1 }}>No Meeting History Found</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>Join or host a video call from the home screen to build your history log.</Typography>
                            <Button variant="contained" onClick={() => routeTo('/home')}>Go to Home</Button>
                        </Box>
                    )}
                </Container>
            </Box>
        </ThemeProvider>
    )
}