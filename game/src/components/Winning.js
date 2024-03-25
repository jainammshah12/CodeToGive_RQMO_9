import { Link } from 'react-router-dom';
import { useState } from 'react';



const Winning = ({ count }) => {
    
    return(
    <div>
        <h1 style={{width: "70%", marginLeft: "290px"}}> Thank you for playing this game! </h1>
        <h3 style={{marginLeft:"140px"}}>This game has been played {count} times.  Want to play again?</h3>
        <h3></h3>
        <Link to="/">
            <button style={{background: "white", fontSize: "20px", marginTop: "30px", marginLeft: "140px", padding: "10px"}}>
                Play again
            </button>
        </Link>

        <div style={{left: "0", textAlign: "left", backgroundColor: "white", padding: "20px", marginTop: "230px", position: "absolute", bottom: "0", width: "97%"}}>
            <h5> Reach out to us if you know anyone facing this issue. </h5>
            <Link to="https://rqmo.org/ressources-pour-vous/">
                <button style={{background: "black", fontSize: "20px", marginTop: "5px", left: "0", padding: "5px", color: "white"}}>
                    Further Resources
                </button>
            </Link>
        </div>

    </div>
    );
}

export default Winning;