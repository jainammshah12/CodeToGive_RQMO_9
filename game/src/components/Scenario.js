import Option from './Option';

const Scenario = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
    return(
        <div>
            <div style={{border: "solid 2px black", width: "97%", height: "100px", padding: "15px", position: "relative"}}>
                <p>
                You are a student at Concordia University and currently a technology analyst intern at Morgan Stanley. 
                You suddenly realize that you have a bunch of issues - red rashes, high fever, a headache, a stomachache.
                 Also, you apparently for some reason can't see very clearly.
                </p>
            </div>
            <div style={{padding: "20px"}}>
                <img src="https://media.istockphoto.com/id/877369086/photo/lion-panthera-leo-10-years-old-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=v0MNby9fCmlTVtNBeltMGQG98j3g8zvxSs0gmq8csqo="
                alt="had an issue" width="750px" height="585px" style={{left: "0", position: "absolute", border: "solid 1px black", marginBottom: "30px"}}/>
            </div>
            <div>
                <div style={{position: "absolute", border: "solid 1px black", left: "800px",  padding: "40px", top:"150px", 
                width: "40%"}}>
                    <p>What would you do in this situation? </p>
                </div>
                <div style={{position: "absolute", border: "solid 1px black", left: "950px",  padding: "20px", top:"350px", 
                width: "30%"}}>
                    <Option name="doctor" label="Go to The Doctor" value="Go to The Doctor"/>
                </div>
                <div style={{position: "absolute", border: "solid 1px black", left: "950px",  padding: "20px", top:"430px", 
                width: "30%"}}>
                    <Option name="doctor" label="Go to The Doctor" value="Go to The Doctor"/>
                </div>
                <div style={{position: "absolute", border: "solid 1px black", left: "950px",  padding: "20px", top:"510px", 
                width: "30%"}}>
                    <Option name="doctor" label="Go to The Doctor" value="Go to The Doctor"/>
                </div>
                <div style={{position: "absolute", border: "solid 1px black", left: "950px",  padding: "20px", top:"590px", 
                width: "30%"}}>
                    <Option name="doctor" label="Go to The Doctor" value="Go to The Doctor"/>
                </div>
            </div>
            <div>
                <button style={{position: "absolute", border: "solid 1px black", left: "1050px",  padding: "10px", top:"680px", 
                width: "20%"}}>Continue</button>
            </div>
        </div>
    );
}

export default Scenario;