import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import GroupsIcon from '@mui/icons-material/Groups';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

export default function LandingPage() {
    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Mirror Video Call</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")
                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")
                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="landingMainContainer">
                <div>
                    <h1>
                        Experience <span style={{ 
                            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #f59e0b 100%)', 
                            WebkitBackgroundClip: 'text', 
                            WebkitTextFillColor: 'transparent' 
                        }}>Ultra-HD</span> Video Calls
                    </h1>

                    <p>Connect instantly across any distance with zero latency, crystal-clear audio, and end-to-end encryption built for modern communication.</p>
                    
                    <div className="ctaGroup">
                        <div className="glowButton">
                            <Link to={"/auth"}>Get Started Free</Link>
                        </div>
                        <button className="ghostButton" onClick={() => router("/aljk23")}>
                            Join as Guest
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: '15px', marginTop: '2rem', flexWrap: 'wrap' }}>
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontSize: '0.875rem',
                            color: '#c7c4d7',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
                            4K Ultra-HD Streams
                        </div>
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontSize: '0.875rem',
                            color: '#c7c4d7',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6366f1' }}></span>
                            P2P Encrypted
                        </div>
                    </div>
                </div>

                <div>
                    <img src="/mobile.png" alt="Mirror Video Call Mobile & Web App Preview" />
                </div>
            </div>

            {/* Feature Bento Grid */}
            <div className="bentoSection">
                <h2>Engineered for Flawless Performance</h2>
                <div className="bentoGrid">
                    <div className="featureCard">
                        <div className="iconBox"><SpeedIcon /></div>
                        <h3>Ultra Low Latency</h3>
                        <p>Sub-100ms real-time WebRTC peer-to-peer streaming with smooth framerates on any connection.</p>
                    </div>

                    <div className="featureCard">
                        <div className="iconBox"><SecurityIcon /></div>
                        <h3>End-to-End Encrypted</h3>
                        <p>Your video, voice, and chat streams are direct P2P encrypted for absolute privacy & security.</p>
                    </div>

                    <div className="featureCard">
                        <div className="iconBox"><GroupsIcon /></div>
                        <h3>100+ HD Participants</h3>
                        <p>Seamlessly scale from 1-on-1 private calls to large group conferences with clear audio.</p>
                    </div>

                    <div className="featureCard">
                        <div className="iconBox"><GraphicEqIcon /></div>
                        <h3>Smart Noise Filtering</h3>
                        <p>Intelligent background noise suppression keeps conversations clear even in loud environments.</p>
                    </div>
                </div>
            </div>

            {/* Live Stats Counter Section */}
            <div className="statsSection">
                <div className="statsGrid">
                    <div className="statItem">
                        <h3>10M+</h3>
                        <p>Calls Hosted</p>
                    </div>
                    <div className="statItem">
                        <h3>99.9%</h3>
                        <p>Platform Uptime</p>
                    </div>
                    <div className="statItem">
                        <h3>4.9 / 5</h3>
                        <p>User Rating</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="landingFooter">
                <p>© {new Date().getFullYear()} Mirror Video Call. All rights reserved. Powered by WebRTC & Socket.IO.</p>
            </div>
        </div>
    )
}
