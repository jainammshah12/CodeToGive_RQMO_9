import { Link } from 'react-router-dom';



const Winning = () => {
    return(
    <div>
        <h1 style={{width: "70%", marginLeft: "290px"}}>Congratulations, you have found the diagnosis to the disease!</h1>

        <h3> Want to play again?</h3>
        <Link to="/">
            <button style={{background: "white", fontSize: "30px", marginTop: "30px", left: "0", padding: "10px"}}>
                Click Here
            </button>
            </Link>
    </div>
    );
}

export default Winning;