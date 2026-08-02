import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField, ThemeProvider, createTheme } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import LogoutIcon from '@mui/icons-material/Logout';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { AuthContext } from '../contexts/AuthContext';

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
        borderRadius: 12,
    },
});

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const { addToUserHistory } = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        if (!meetingCode.trim()) return;
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <div className="navBar">
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ 
                        background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
                        padding: '8px', 
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)'
                    }}>
                        <VideoCallIcon style={{ color: 'white' }} />
                    </div>
                    <h2>Apna Video Call</h2>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div 
                        onClick={() => navigate("/history")}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            cursor: 'pointer',
                            padding: '6px 12px',
                            borderRadius: '10px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <IconButton size="small" style={{ color: '#c0c1ff', padding: 0 }}>
                            <RestoreIcon />
                        </IconButton>
                        <p style={{ margin: 0, fontWeight: 500, color: '#dae2fd', fontSize: '0.95rem' }}>History</p>
                    </div>

                    <Button 
                        onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/auth")
                        }}
                        variant="outlined"
                        startIcon={<LogoutIcon />}
                        sx={{
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                            color: '#dae2fd',
                            borderRadius: '10px',
                            textTransform: 'none',
                            fontWeight: 600,
                            '&:hover': {
                                borderColor: '#ffb4ab',
                                color: '#ffb4ab',
                                background: 'rgba(255, 180, 171, 0.08)'
                            }
                        }}
                    >
                        Logout
                    </Button>
                </div>
            </div>

            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call Just Like Quality Education</h2>

                        <div style={{ 
                            display: 'flex', 
                            gap: "12px", 
                            marginTop: "1.5rem",
                            background: 'rgba(23, 31, 51, 0.6)',
                            padding: '16px',
                            borderRadius: '20px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(16px)',
                            maxWidth: '480px'
                        }}>
                            <TextField 
                                onChange={e => setMeetingCode(e.target.value)} 
                                value={meetingCode}
                                id="outlined-basic" 
                                label="Enter Meeting Code" 
                                variant="outlined" 
                                fullWidth
                                size="small"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        backgroundColor: 'rgba(11, 19, 38, 0.8)',
                                    }
                                }}
                            />
                            <Button 
                                onClick={handleJoinVideoCall} 
                                variant='contained'
                                sx={{
                                    px: 3,
                                    borderRadius: '12px',
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                                    boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)',
                                    '&:hover': {
                                        boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)',
                                    }
                                }}
                            >
                                Join
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt="Mirror Video Call Illustration" />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default withAuth(HomeComponent)