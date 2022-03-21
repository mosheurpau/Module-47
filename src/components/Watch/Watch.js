import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import Tablet from '../Tablet/Tablet';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
        // console.log(steps);
    }

    useEffect( ()=>{
        console.log(steps);
    }, [steps])

    return (
        <div style={{border: '2px solid pink', margin: '20px'}}>
            <h2>This is my smart watch</h2>
            <h3>My Current steps: {steps}</h3>
            <button onClick={increaseSteps}>De Dour...</button>
            <Display name="Garmin" steps={steps}></Display>
            <Tablet></Tablet>
        </div>
    );
};

export default Watch;