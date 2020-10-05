import React from 'react';

import { withRouter } from 'react-router-dom';

const info = () => {
    
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="container">
                <h2>Random doggie</h2>
                <p>App created by Paweł Węgiel</p>
                <p>App allows you to render random photo of dog from <a target="_blank" rel="noopener noreferrer" href="https://dog.ceo/dog-api/">Dog API</a></p>
                <br></br>
                <h4>Technologies used to build app:</h4>
                <ul>
                    <li>React</li>
                    <li>react-router-dom</li>
                    <li>axios</li>
                    <li>bootsrap</li>
                </ul>
                <br></br>
                <p>Full project directory available <a target="_blank" rel="noopener noreferrer" href="https://github.com/pjwegiel/random-doggie">here</a></p>
            </div>
        </div>
    )
};

export default withRouter(info);