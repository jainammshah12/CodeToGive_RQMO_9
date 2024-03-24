import {useState, useEffect } from 'react';
import './Scenario.css';

var _ = require('lodash');
const Scenario = () => {
    const data = [
    {
        scene: 'You are a student at Concordia University and currently a technology analyst intern at Morgan Stanley.\
         You suddenly realize that you have a bunch of issues - red rashes, high fever, a headache, a stomachache.\
         Also, you apparently for some reason can\'t see very clearly.',
        img: "https://media.istockphoto.com/id/877369086/photo/lion-panthera-leo-10-years-old-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=v0MNby9fCmlTVtNBeltMGQG98j3g8zvxSs0gmq8csqo=",
        question: "What would you do in this situation?",
        options: ["Go to the doctor", "Ignore Treatment"]
    },
    {
        scene: 'You are at the doctor\'s place. After mentioning these symptoms, the doctor seems very confused. \
        He gives you information about your disease saying it is Disease A, and provides you with diagnosis. \
        He gives you the medicines to buy and rest for 3 days at home. \
        He also refers you to other medical specialists because they have more information on these kinds of diseases. \
        What do you do next?',
        img: "https://media.istockphoto.com/id/877369086/photo/lion-panthera-leo-10-years-old-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=v0MNby9fCmlTVtNBeltMGQG98j3g8zvxSs0gmq8csqo=",
        question: "What would you do in this situation?",
        options: ["Buy medicines and ignore the specialists", "Visit the specialists"]

    },
    {
        scene: 'You are at the specialist\'s place. After mentioning these symptoms and previous doctor\'s diagnosis, the specialist also seems very confused. \
        He gives you information about your disease saying it is actually Disease B, and provides you with a different diagnosis. He gives you the medicines to \
        buy and tells you to move more. He also asks you to go and get a full-body checkup. ',
        img: "https://media.istockphoto.com/id/877369086/photo/lion-panthera-leo-10-years-old-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=v0MNby9fCmlTVtNBeltMGQG98j3g8zvxSs0gmq8csqo=",
        question: "What do you do next?",
        options: ["Full-body checkup", "Buy medicines and start the treatment"]
    },
    {
        scene: 'The tests actually give signs of disease C, and the specialist now gives you a separate diagnosis saying it is actually disease C, and based on all symptoms and previous diagnosis, \
        he gives you a treatment plan',
        img: "https://media.istockphoto.com/id/877369086/photo/lion-panthera-leo-10-years-old-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=v0MNby9fCmlTVtNBeltMGQG98j3g8zvxSs0gmq8csqo=",
        options: ["Go with the treatment plan", "Visit the second specialist"]
    }
    
    ];
    const [scenario, setScenario] = useState(data[0]);

  
    return(
        <div>
            <div id='scene'>
                <p>
                    {scenario.scene}
                </p>
            </div>
            <div style={{padding: "20px"}}>
                <img src="https://media.istockphoto.com/id/877369086/photo/lion-panthera-leo-10-years-old-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=v0MNby9fCmlTVtNBeltMGQG98j3g8zvxSs0gmq8csqo="
                alt="had an issue" width="750px" height="540px" />
            </div>
            <div>
                <div id="q">
                    <p>{scenario.question} </p>
                </div>
                
                <div id="option1" className='option'>
                    <button onClick={() => {
                        if(_.isEqual(scenario, data[0])){
                            setScenario(data[1]);
                        }
                    }}>{scenario.options[0]}</button>
                </div>
                <div id="option2" className='option'>
                <button>{scenario.options[1]}</button>
                </div>
                { data[0].options.length > 2 && 
                <div id="option3" className='option'>
                    <button>{scenario.options[2]}</button>
                </div>
                }
                
                
            </div>
        </div>
    );
}

export default Scenario;