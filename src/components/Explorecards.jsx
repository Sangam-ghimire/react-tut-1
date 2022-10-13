import React from 'react';
import "./Explorecards.css";

const Explorecards = (props) => {
    return (
        <div>
             <div
                    id="card">

                    <div>
                    <img src="explorecards.png" alt="error" />
                    </div>
                    <div id="planttitle">{props.title}</div>
                    <div id="quantity">{props.qtext}</div>
                    </div>
        </div>
    );
};

export default Explorecards;