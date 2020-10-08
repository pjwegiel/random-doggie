import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import './Photo.css';
import paw from '../../assets/paw-icon.png';

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
      <div>
        <img className="photo" src={this.state.img} alt="A dog"></img>
        <br />
        <button className="button">
          <img
            className="paw-icon"
            src={paw}
            alt="Random!"
            onClick={clickHandler}
          />
        </button>
      </div>
    );
  }
}

export default withRouter(Photo);
