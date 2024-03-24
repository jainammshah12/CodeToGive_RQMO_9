import { Link } from 'react-router-dom';

const Game = () => {
    return(
        <div>
            <h1>Welcome to Diagnosis Quest!</h1>
            <div style={{width: "50%", marginLeft: "380px", }}>
                <p>Navigate through the challenges of the healthcare system, connect with professionals, 
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
        
      
            <button style={{background: "white", fontSize: "30px", marginTop: "30px", left: "0", padding: "10px"}}>
                Ready to play?
            </button>
            </Link>
        </div>
    )
};
export default Game;