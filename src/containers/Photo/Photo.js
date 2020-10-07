import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import './Photo.css';
import paw from '../../assets/wetransfer-7e1d69/Untitled (2)/Union-1.png';

class Photo extends Component {
  state = {
    img: '',
  };

  componentDidMount() {
    Axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
      this.setState({ img: response.data.message });
    });
  }

  render() {
    const clickHandler = () => {
      Axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
        this.setState({ img: response.data.message });
      });
    };
    return (
      <div className="container">
        <img className="photo" src={this.state.img} alt="A dog"></img>
        <br></br>
        <button className="button">
          <img
            src={paw}
            alt="Random!"
            onClick={clickHandler}
            style={{ height: '10vh' }}
          />
        </button>
      </div>
    );
  }
}

export default withRouter(Photo);
