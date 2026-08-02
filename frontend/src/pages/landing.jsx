import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

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

            <div className="landingMainContainer">
                <div>
                    <h1>
                        <span style={{ 
                            background: 'linear-gradient(135deg, #FF9839 0%, #f59e0b 100%)', 
                            WebkitBackgroundClip: 'text', 
                            WebkitTextFillColor: 'transparent' 
                        }}>Connect</span> with your loved Ones
                    </h1>

                    <p>Cover a distance by Mirror Video Call. Ultra low-latency, crystal clear HD video conferencing built for modern connectivity.</p>
                    
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
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
                            HD Quality Stream
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
                            Encrypted P2P
                        </div>
                    </div>
                </div>

                <div>
                    <img src="/mobile.png" alt="Mirror Video Call Mobile & Web App Preview" />
                </div>
            </div>
        </div>
    )
}