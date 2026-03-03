import { useState } from 'react';

const Player = () => {
    const [runs, setRuns] = useState(0);
    const [runsTimeline, setRunsTimeline] = useState([]);

    const runStyle = {backgroundColor: 'gray', padding: '2px 5px', borderRadius: "5px"};

    const handleRunCount = newRun => {
        setRuns(curr => curr + newRun);
        setRunsTimeline([...runsTimeline, newRun]);
    }
    return (
        <div>
            <h2>Player: Abul Khayer</h2>
            <h1>Score: {runs}({runsTimeline.length})</h1>
            <h3>Strike Rate: {(runs/runsTimeline.length*100).toFixed(2)}</h3>
            {
                runs >= 50 && <span style={{color: 'green'}}>Congratulation...</span>
            }
            <p style={{display: "flex", gap: '5px', overflow: 'scroll'}}>Runs Timeline: {runsTimeline.map((run, idx) => <span style={runStyle} key={idx}>{run}</span>)}</p>
            <div>
                <button onClick={() => handleRunCount(0)}>Dots (0)</button>
                <button onClick={() => handleRunCount(1)}>Singles (1)</button>
                <button onClick={() => handleRunCount(2)}>Double (2)</button>
                <button onClick={() => handleRunCount(3)}>Triple (3)</button>
                <button onClick={() => handleRunCount(4)}>Boundary(4)</button>
                <button onClick={() => handleRunCount(6)}>Maximum (6)</button>
            </div>
        </div>
    );
};

export default Player;