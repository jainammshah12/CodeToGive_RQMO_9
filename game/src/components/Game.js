import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Game = ({ count, setCount }) => {
    return(
        <div style={{backgroundColor: "#ebebeb", }}>
            <div class="typing-container" style={{fontSize: "60px", fontWeight: "bold", marginTop: "40px"}}>
                <span id="sentence" class="sentence">Welcome to Diagnosis Quest!</span>
                <span id="feature-text"></span>
                <span class="input-cursor"></span>
            </div>
            <div style={{width: "50%", marginLeft: "380px", }}>
                <p>Navigate through the challenges of the healthcare system, 
                and explore support networks to find answers and improve your well-being.</p>
            </div>
            

            <div style={{marginLeft: "400px",padding: "30px", width: "50%", textAlign: "left", background: "rgb(131, 230, 255)", color: "black"}}>
                <h3>Instructions</h3>
                <ul>
                    <li>You are in a situation and you need to choose the most appropriate answer.</li>
                    <li>Every answer will pave the way to a different kind of discovery.</li>
                    <li>There is no wrong or right answer, you are just making the choices of a real human being</li>
                </ul>
            </div>
            <Link to="/game">
        
      
            <button style={{background: "white", fontSize: "30px", marginTop: "50px", left: "0", padding: "10px"}} onClick={() => setCount(count+1)}>
                Ready to play?
            </button>
            </Link>

            {/* <div style={{left: "0", textAlign: "left", backgroundColor: "white", padding: "20px", marginTop: "230px"}}>
                <h5> Reach out to us if you know anyone facing this issue </h5>
                <Link to="https://rqmo.org/ressources-pour-vous/">
                    <button style={{background: "black", fontSize: "20px", marginTop: "5px", left: "0", padding: "5px", color: "white"}}>
                        Further Resources
                    </button>
                </Link>
            </div> */}
        </div>
    )
};
export default Game;