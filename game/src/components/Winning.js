import { Link } from 'react-router-dom';
import game_over from '../img/game_over.svg'

const Winning = () => {

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
            <img src={game_over} alt='game_over' style={{ width: '100%', height: 'auto', position: 'relative', maxHeight: '200px', marginBottom: '30px' }} />
                <h1 style={{ marginBottom: '20px', marginTop: '0px' }}> Game Over </h1>
                <p style={{ marginBottom: '30px', marginTop: '0px' }}>Thank you for playing!</p>
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '0px' }}>
                    <Link to="/game">
                        <button style={{ background: "white", border: '2px solid black', padding: '10px 20px', width: '150px' }}>
                            Play Again
                        </button>
                    </Link>
                    <Link to="/">
                        <button style={{ background: "white", border: '2px solid black', padding: '10px 20px', width: '150px', marginLeft: '20px' }}>
                            Home
                        </button>
                    </Link>
                </div>

            </div>
            {/* <div style={{ left: "0", textAlign: "left", backgroundColor: "white", padding: "20px", marginTop: "230px", position: "absolute", bottom: "0", width: "97%" }}>
                <h5> Reach out to us if you know anyone facing this issue. </h5>
                <Link to="https://rqmo.org/ressources-pour-vous/">
                    <button style={{ background: "black", fontSize: "20px", marginTop: "5px", left: "0", padding: "5px", color: "white" }}>
                        Further Resources
                    </button>
                </Link>
            </div> */}
        </>
    );
}

export default Winning;