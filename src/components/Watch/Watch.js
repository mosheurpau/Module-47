import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

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
        <div>
            <h2>This is my smart watch</h2>
            <h3>My Current steps: {steps}</h3>
            <button onClick={increaseSteps}>De Dour...</button>
            <Display name="Mosheur Rahnam" steps={steps}></Display>
        </div>
    );
};

export default Watch;