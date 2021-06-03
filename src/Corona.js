import React from 'react';
import "./App.css";

const Corona=({names,update,confirmed,active,recoveries,deaths})=> {
    return (
        <div className="big-box">
            <h3 className="heading3">{names}</h3>
            <h5>Last updated on-({update})</h5>
            <ul className="box">
                <li className="lists">Confirmed cases-{confirmed}</li>
                <li className="lists">Active cases-{active}</li>
                <li className="lists">Recovered-{recoveries}</li>
                <li className="lists">Total Death-{deaths}</li>
            </ul>
        </div>
    )
}

export default Corona;
