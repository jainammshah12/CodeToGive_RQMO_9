import { useState } from 'react';
import '../styles/scenario.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import close_btn from '../img/close_icon.png';


var _ = require('lodash');
const Scenario = () => {
    const navigate = useNavigate();
    const data = [
        {
            scene: 'You are a student at Concordia University and currently a technology analyst intern at Morgan Stanley.\
         You suddenly realize that you have a bunch of issues - red rashes, high fever, a headache, a stomachache.\
         Also, you apparently for some reason can\'t see very clearly.',
            img: `${img1}`,
            question: "What do you do next?",
            options: ["Go to the doctor", "Ignore Treatment"]
        },
        {
            scene: 'You are at the doctor\'s place. After mentioning these symptoms, the doctor seems very confused. \
        He gives you information about your disease saying it is Flobbergitis, and provides you with diagnosis. \
        He gives you the medicines to buy and rest for 3 days at home. \
        He also refers you to other medical specialists because they have more information on these kinds of diseases. ',
            img: `${img2}`,
            question: "What would you do in this situation?",
            options: ["Start the treatment plan", "Visit the specialists"]

        },
        {
            scene: 'You are at the specialist\'s place. After mentioning these symptoms and previous doctor\'s diagnosis, the specialist also seems very confused. \
        He gives you information about your disease saying it is actually Igranomatis, and provides you with a different diagnosis. He gives you the medicines to \
        buy and tells you to move more. He also asks you to go and get a blood test. ',
            img: `${img3}`,
            question: "What do you do next?",
            options: ["Blood test", "Start the treatment plan"]
        },
        {
            scene: 'The tests actually give signs of Dopamine D, and the specialist now gives you a separate diagnosis saying it is actually Dopamine D, and based on all symptoms and previous diagnosis, \
        he gives you a treatment plan.',
            img: `${img4}`,
            question: "Seems like the final plan. Do you wish to proceed?",
            options: ["Yes", "No"]
        },
        {
            scene: 'Your situation gets worse, you seriously need medical care. You are lying on the bed with the same symptoms. \
        All your friends suggest you to go to the doctor.',
            img: `${img1}`,
            question: "Do you want to go to the doctor? ",
            options: ["Yes", "No"]
        },
        {
            scene: 'The treatment plan seems to be working for the first few days. However, you notice other side effects coming up.',
            img: `${img1}`,
            question: "What do you want to do now?",
            options: ["Go to the specialist", "Continue with treatment plan"]
        },
        {
            scene: 'The treatment plan seems to be working for the first few days. However, you notice other side effects coming up since the specialist didn\'t have concrete evidence of the blood test',
            img: `${img1}`,
            question: "What do you want to do now?",
            options: ["Blood tests", "Continue with treatment plan"]
        }
    ];

    const [scenario, setScenario] = useState(data[0]);

    return (
        <div className='scenario_container'>
            <div className='scenario_header scenario_header_mobile'>
                    <p>
                        Scenario
                    </p>
                    <img src={close_btn} alt='close' width='20' height='20' />
                </div>
            <div className='image_container'>
                <img src={scenario.img}
                    alt="had an issue" width="100%" height="auto" />
            </div>
            <div className='scenario_details_container'>
                <div className='scenario_header scenario_header_desktop'>
                    <p>
                        Scenario
                    </p>
                    <img src={close_btn} alt='close' width='20' height='20' />
                </div>
                <div id='scene'>
                    <p>
                        {scenario.scene}
                    </p>
                </div>
                <div id="q" className='scenario_question'>
                    <p>{scenario.question} </p>
                </div>

                <div className='options'>
                    <button className='options-button'
                        onClick={() => {
                            if (_.isEqual(scenario, data[0])) {
                                setScenario(data[1]);
                            }
                            else if (_.isEqual(scenario, data[1])) {
                                setScenario(data[5]);
                            }
                            else if (_.isEqual(scenario, data[2])) {
                                setScenario(data[3]);
                            }
                            else if (_.isEqual(scenario, data[3])) {
                                navigate('/win');
                            }
                            else if (_.isEqual(scenario, data[4])) {
                                setScenario(data[1]);
                            }
                            else if (_.isEqual(scenario, data[5])) {
                                setScenario(data[2]);
                            }
                            else if (_.isEqual(scenario, data[6])) {
                                setScenario(data[3]);
                            }

                        }}>{scenario.options[0]}</button>
                    <button className='options-button' onClick={() => {
                        if (_.isEqual(scenario, data[0])) {
                            setScenario(data[4]);
                        }
                        else if (_.isEqual(scenario, data[1])) {
                            setScenario(data[2]);
                        }
                        else if (_.isEqual(scenario, data[2])) {
                            setScenario(data[6]);
                        }
                        else if (_.isEqual(scenario, data[3])) {
                            navigate('/win');
                        }
                        else if (_.isEqual(scenario, data[4])) {
                            navigate('/win');
                        }
                        else if (_.isEqual(scenario, data[5])) {
                            navigate('/win');
                        }
                        else if (_.isEqual(scenario, data[6])) {
                            navigate('/win');
                        }

                    }}>{scenario.options[1]}</button>
                </div>


            </div>
        </div>
    );
}

export default Scenario;