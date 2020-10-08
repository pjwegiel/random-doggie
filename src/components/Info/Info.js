import React from 'react';
import './Info.css';
import { withRouter } from 'react-router-dom';

const info = () => {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Random doggie</h2>
      <p>App created by Paweł Węgiel with React.js</p>
      <p>
        App allows you to render random photo of dog from{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dog.ceo/dog-api/"
        >
          Dog API
        </a>
      </p>
      <p>Libraries used to make this app:</p>
      <ul>
        <li>react-router-dom</li>
        <li>axios</li>
      </ul>
      <p>
        Full project directory available{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/pjwegiel/random-doggie"
        >
          here
        </a>
      </p>
    </div>
  );
};

export default withRouter(info);
