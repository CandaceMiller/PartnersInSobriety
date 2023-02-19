import React from 'react'

//this shows the time and date
function Clock() {
    return (
        <div className="time">
            {new Date().toLocaleDateString()}
            <br />
            {new Date().toLocaleTimeString()}
        </div>
    );
};

export default Clock;