import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="header">

                <div className="inner-header flex flex-column align-center justify-content-center">
                    <h1 className='title'>
                        Welcome to Diagnosis Quest!
                    </h1>
                    <p className='description'>
                        Navigate through the challenges of the healthcare system and explore support networks to find answers and improve your well-being.
                    </p>
                    <div style={{ textAlign: 'left', padding: '0 20px' }}>
                        <h4 style={{ margin: 0, marginBottom: '10px' }}>Instructions</h4>
                        <ul style={{ fontSize: 'large' }}>
                            <li>You are in a situation and you need to choose the most appropriate answer.</li>
                            <li>Every answer will pave the way to a different kind of discovery.</li>
                            <li>There is no wrong or right answer, you are just making the choices of a real human being</li>
                        </ul>
                    </div>
                    <Link to="/game" className='link'>
                        {/* <button style={{ background: "white", fontSize: "30px", marginTop: "50px", left: "0", padding: "10px" }}>
                            Play
                        </button> */}
                        <button className="play-game-button">Play Game</button>
                    </Link>
                </div>

                <div>
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
            </div>
            <div className="content flex">
                <p className='footer-text'> &copy; Diagnosis Quest 2024, Canada in partner with <a href='https://rqmo.org/ressources-pour-vous/'>Rqmo.org</a> </p>
            </div>
        </>
    );
}

export default Home;
